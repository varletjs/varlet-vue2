<template>
  <div class="var-uploader var--box">
    <div class="var-uploader__file-list">
      <div
        class="var-uploader__file var-elevation--2"
        v-for="f in value"
        :class="[f.state === 'loading' ? 'var-uploader--loading' : null]"
        :key="f.id"
        v-ripple="{ disabled: disabled || formDisabled || readonly || formReadonly || !ripple }"
        @click="preview(f)"
      >
        <div class="var-uploader__file-name">
          {{ f.name || f.url }}
        </div>
        <div class="var-uploader__file-close" v-if="removable" @click.stop="handleRemove(f)">
          <var-icon class="var-uploader__file-close-icon" var-uploader-cover name="delete" />
        </div>
        <img
          class="var-uploader__file-cover"
          :style="{ objectFit: f.fit }"
          :src="f.cover"
          :alt="f.name"
          v-if="f.cover"
        />
        <div
          class="var-uploader__file-indicator"
          :class="[
            f.state === 'success' ? 'var-uploader--success' : null,
            f.state === 'error' ? 'var-uploader--error' : null,
          ]"
        ></div>
      </div>

      <div
        class="var--relative"
        :class="[
          !hasSlots('default') ? 'var-uploader__action var-elevation--2' : null,
          disabled || formDisabled ? 'var-uploader--disabled' : null,
        ]"
        v-if="!maxlength || value.length < maxlength"
        v-ripple="{ disabled: disabled || formDisabled || readonly || formReadonly || !ripple || hasSlots('default') }"
      >
        <input
          class="var-uploader__action-input"
          type="file"
          :multiple="multiple"
          :accept="accept"
          :capture="capture"
          :disabled="disabled || formDisabled || readonly || formReadonly"
          @change="handleChange"
        />
        <slot>
          <var-icon class="var-uploader__action-icon" var-uploader-cover name="plus" />
        </slot>
      </div>
    </div>

    <var-form-details :error-message="errorMessage" :maxlength-text="maxlengthText" />

    <var-popup
      :class.native="'var-uploader__preview'"
      var-uploader-cover
      position="center"
      :show.sync="showPreview"
      @closed="currentPreview = null"
    >
      <video
        class="var-uploader__preview-video"
        playsinline="true"
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
        controls
        :src="currentPreview && currentPreview.url"
        v-if="currentPreview && isHTMLSupportVideo(currentPreview.url)"
      ></video>
    </var-popup>
  </div>
</template>

<script>
import VarFormDetails from '../form-details'
import VarIcon from '../icon'
import VarPopup from '../popup'
import ImagePreview from '../image-preview'
import Ripple from '../ripple'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { isNumber, isHTMLSupportImage, isHTMLSupportVideo, toNumber, isString } from '../utils/shared'
import { ValidationMixin } from '../utils/mixins/validation'
import { createChildrenMixin } from '../utils/mixins/relation'

let fid = 0

export default defineComponent({
  name: 'VarUploader',

  mixins: [ValidationMixin, createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' })],

  directives: { Ripple },

  components: {
    VarIcon,
    VarPopup,
    VarFormDetails,
  },

  props,

  data: () => ({
    showPreview: false,
    currentPreview: null,
    callReset: false,
  }),

  computed: {
    maxlengthText() {
      const {
        maxlength,
        value: { length },
      } = this

      return isNumber(maxlength) ? `${length} / ${maxlength}` : ''
    },

    formDisabled() {
      return this.form?.disabled
    },

    formReadonly() {
      return this.form?.readonly
    },
  },

  watch: {
    value: {
      handler() {
        !this.callReset && this.validateWithTrigger('onChange')
        this.callReset = false
      },
      deep: true,
    },
  },

  methods: {
    // expose
    getSuccess() {
      return this.value.filter((varFile) => varFile.state === 'success')
    },

    // expose
    getError() {
      return this.value.filter((varFile) => varFile.state === 'error')
    },

    // expose
    getLoading() {
      return this.value.filter((varFile) => varFile.state === 'loading')
    },

    // expose
    validate() {
      this._validate(this.rules, this.value, {
        getSuccess: this.getSuccess,
        getError: this.getError,
        getLoading: this.getLoading,
      })
    },

    // expose
    reset() {
      this.callReset = true
      this.getListeners().onInput?.([])
      this.resetValidation()
    },

    isHTMLSupportVideo,

    validateWithTrigger(trigger) {
      this.$nextTick(() => {
        const { validateTrigger, rules, value } = this
        this._validateWithTrigger(validateTrigger, trigger, rules, value, {
          getSuccess: this.getSuccess,
          getError: this.getError,
          getLoading: this.getLoading,
        })
      })
    },

    preview(varFile) {
      const { disabled, readonly, previewed } = this

      if (this.formDisabled || this.formReadonly || disabled || readonly || !previewed) {
        return
      }

      const { url } = varFile

      if (isString(url) && isHTMLSupportImage(url)) {
        ImagePreview(url)
        return
      }

      if (isString(url) && isHTMLSupportVideo(url)) {
        this.currentPreview = varFile
        this.showPreview = true
      }
    },

    createVarFile(file) {
      return {
        id: fid++,
        url: '',
        cover: '',
        name: file.name,
        file,
      }
    },

    getFiles(event) {
      const el = event.target
      const { files } = el
      return Array.from(files)
    },

    resolver(varFile) {
      return new Promise((resolve) => {
        const fileReader = new FileReader()

        fileReader.onload = () => {
          const base64 = fileReader.result

          varFile.file.type.startsWith('image') && (varFile.cover = base64)
          varFile.url = base64

          resolve(varFile)
        }

        fileReader.readAsDataURL(varFile.file)
      })
    },

    getResolvers(varFiles) {
      return varFiles.map(this.resolver)
    },

    getBeforeReaders(varFiles) {
      const { onBeforeRead } = this.getListeners()

      return varFiles.map((varFile) => {
        return new Promise((resolve) => {
          const valid = onBeforeRead ? onBeforeRead(varFile) : true
          Promise.resolve(valid).then((valid) =>
            resolve({
              valid,
              varFile,
            })
          )
        })
      })
    },

    async handleChange(event) {
      const { formDisabled, formReadonly, maxsize, maxlength, value, readonly, disabled, getListeners } = this

      if (formDisabled || formReadonly || disabled || readonly) {
        return
      }

      const getValidSizeVarFile = (varFiles) => {
        return varFiles.filter((varFile) => {
          if (varFile.file.size > toNumber(maxsize)) {
            getListeners().onOversize?.(varFile)
            return false
          }

          return true
        })
      }

      const getValidLengthVarFiles = (varFiles) => {
        const limit = Math.min(varFiles.length, toNumber(maxlength) - value.length)
        return varFiles.slice(0, limit)
      }

      // limit
      const files = this.getFiles(event)
      let varFiles = files.map(this.createVarFile)
      varFiles = maxsize != null ? getValidSizeVarFile(varFiles) : varFiles
      varFiles = maxlength != null ? getValidLengthVarFiles(varFiles) : varFiles

      // pre resolve
      const resolvedVarFiles = await Promise.all(this.getResolvers(varFiles))
      const validationVarFiles = await Promise.all(this.getBeforeReaders(resolvedVarFiles))
      const validVarFiles = validationVarFiles.filter(({ valid }) => valid).map(({ varFile }) => varFile)

      getListeners().onInput?.([...value, ...validVarFiles])
      event.target.value = ''
      validVarFiles.forEach((varFile) => getListeners().onAfterRead?.(varFile))
    },

    async handleRemove(removedVarFile) {
      const { formDisabled, formReadonly, disabled, readonly, value, getListeners } = this
      const { onBeforeRemove, onRemove, onInput } = getListeners()

      if (formDisabled || formReadonly || disabled || readonly) {
        return
      }

      if (onBeforeRemove && !(await onBeforeRemove(removedVarFile))) {
        return
      }

      const expectedFiles = value.filter((varFile) => varFile !== removedVarFile)
      onRemove?.(removedVarFile)
      this.validateWithTrigger('onRemove')
      onInput?.(expectedFiles)
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../form-details/formDetails';
@import '../icon/icon';
@import '../popup/popup';
@import '../image-preview/imagePreview';
@import './uploader';
</style>
