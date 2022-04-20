<template>
  <div class="var-imagePreview-example">
    <div class="image-preview-demo">
      <app-type>{{ pack.functionCall }} </app-type>
      <var-button type="primary" block @click="preview"> {{ pack.preview }} </var-button>
      <var-button type="primary" block @click="previewCallback"> {{ pack.callBack }} </var-button>
    </div>

    <div class="image-preview-demo">
      <app-type>{{ pack.componentCall }} </app-type>
      <var-button type="warning" block @click="show = true">{{ pack.basicUse }} </var-button>
      <var-image-preview :images="image" :show.sync="show" />

      <var-button type="warning" block @click="currentShow = true">{{ pack.specifyInitialPosition }} </var-button>
      <var-image-preview :images="images" :show.sync="currentShow" current="https://varlet-vue2.vercel.app/cat2.jpg" />

      <var-button type="warning" block @click="closeShow = true">{{ pack.displayCloseButton }} </var-button>
      <var-image-preview :images="images" :show.sync="closeShow" :closeable="true" />

      <var-button type="warning" block @click="closeEventShow = true">{{ pack.listenCloseEvents }} </var-button>
      <var-image-preview :images="images" :show.sync="closeEventShow" @close="handleCloseEvent" />

      <var-button type="warning" block @click="extraSlotsShow = true">{{ pack.showExtraSlots }}</var-button>
      <var-image-preview :images="images" :show.sync="extraSlotsShow">
        <template #extra>
          <var-icon name="menu" :size="22" color="#fff" @click="menuShow = true" />
          <var-action-sheet :actions="actions" :show.sync="menuShow" />
        </template>
      </var-image-preview>
    </div>
  </div>
</template>

<script>
import ImagePreview from '../index'
import VarButton from '../../button'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import Snackbar from '../../snackbar'
import { defineComponent } from '../../utils/create'
import { pack, use } from './locale'
import { watchLang } from '@varlet-vue2/cli/site/utils'
import ActionSheet from '../../action-sheet'
import VarIcon from '../../icon'

export default defineComponent({
  name: 'ImagePreviewExample',

  components: {
    VarImagePreview: ImagePreview.Component,
    VarButton,
    AppType,
    VarIcon,
    VarActionSheet: ActionSheet.Component,
  },

  data: () => ({
    images: ['https://varlet-vue2.vercel.app/cat.jpg', 'https://varlet-vue2.vercel.app/cat2.jpg'],
    image: ['https://varlet-vue2.vercel.app/cat.jpg'],
    show: false,
    menuShow: false,
    currentShow: false,
    closeShow: false,
    closeEventShow: false,
    extraSlotsShow: false,
  }),

  computed: {
    pack() {
      return pack.value
    },
    actions() {
      return [
        {
          name: pack.value.operate,
          icon: 'wrench',
        },
        {
          name: pack.value.operate,
          icon: 'wrench',
        },
      ]
    },
  },

  created() {
    watchLang(this, use)
  },

  methods: {
    handleCloseEvent() {
      Snackbar({
        content: this.pack.shutdownEvent,
        duration: 1000,
      })
    },

    previewCallback() {
      ImagePreview({
        images: this.images,
        onChange: (index) => {
          console.log('index', index)
        },
      })
    },

    preview() {
      ImagePreview(this.image)
    },
  },
})
</script>

<style lang="less" scoped>
.var-imagePreview-example {
  .image-preview-demo {
    .var-button {
      margin-top: 10px;
    }
  }
}
</style>
