<template>
  <div class="var-lazy-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <img class="cat" v-lazy="'https://varlet-vue2.vercel.app/cat.jpg'" />
    <img class="cat" v-lazy="'https://varlet-vue2.vercel.app/cat.jpg'" />
    <img class="cat" v-lazy="'https://varlet-vue2.vercel.app/cat.jpg'" />
    <img class="cat" v-lazy="'https://varlet-vue2.vercel.app/cat.jpg'" />
    <img class="cat" v-lazy="'https://varlet-vue2.vercel.app/cat.jpg'" />

    <app-type>{{ pack.backgroundImageLazyLoad }}</app-type>
    <div class="cat" v-lazy:background-image="'https://varlet-vue2.vercel.app/cat.jpg'"></div>
  </div>
</template>

<script>
import Lazy from '..'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import { use, pack } from './locale'
import { watchLang } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'LazyExample',

  directives: { Lazy },

  components: { AppType },

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
  },
}
</script>

<style scoped lang="less">
.var-lazy-example {
  .cat {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background-size: cover;
    pointer-events: none;
  }
}
</style>
