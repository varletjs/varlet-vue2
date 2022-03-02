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
      <var-image-preview
        :images="images"
        :show.sync="currentShow"
        current="https://varlet.gitee.io/varlet-ui/cat2.jpg"
      />

      <var-button type="warning" block @click="closeShow = true">{{ pack.displayCloseButton }} </var-button>
      <var-image-preview :images="images" :show.sync="closeShow" :closeable="true" />

      <var-button type="warning" block @click="closeEventShow = true">{{ pack.listenCloseEvents }} </var-button>
      <var-image-preview :images="images" :show.sync="closeEventShow" @close="handleCloseEvent" />
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
import { watchLang, watchPlatform } from '@varlet-vue2/cli/site/utils'
import context from '../../context'

export default defineComponent({
  name: 'ImagePreviewExample',

  components: {
    VarImagePreview: ImagePreview.Component,
    VarButton,
    AppType,
  },

  data: () => ({
    images: ['https://varlet.gitee.io/varlet-ui/cat.jpg', 'https://varlet.gitee.io/varlet-ui/cat2.jpg'],
    image: ['https://varlet.gitee.io/varlet-ui/cat.jpg'],
    show: false,
    currentShow: false,
    closeShow: false,
    closeEventShow: false,
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)

    const prevTouchmoveForbid = context.touchmoveForbid
    watchPlatform(this, (platform) => {
      if (platform === 'pc') {
        context.touchmoveForbid = false
      }
    })

    this.$on('hook:beforeDestroy', () => {
      context.touchmoveForbid = prevTouchmoveForbid
    })
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
