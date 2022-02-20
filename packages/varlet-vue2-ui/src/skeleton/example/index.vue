<template>
  <div class="var-skeleton-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-skeleton :loading="loading">{{ pack.loadingData }}</var-skeleton>

    <app-type>{{ pack.displayTitle }}</app-type>
    <var-skeleton title :loading="loading">{{ pack.loadingData }}</var-skeleton>

    <app-type>{{ pack.customRowsHeight }}</app-type>
    <var-skeleton title :rows="3" :loading="loading" :rows-width="['200px', '100px', '50px']">
      {{ pack.loadingData }}
    </var-skeleton>

    <app-type>{{ pack.displayAvatar }}</app-type>
    <var-skeleton title avatar :rows="3" :loading="loading">
      {{ pack.loadingData }}
    </var-skeleton>

    <app-type>{{ pack.displayCard }}</app-type>
    <var-skeleton title avatar card :rows="3" :loading="loading">
      {{ pack.loadingData }}
    </var-skeleton>

    <app-type>{{ pack.fullscreenMode }}</app-type>
    <var-button type="danger" class="button" @click="fullscreen">
      {{ pack.toggleFullscreenMode }}
    </var-button>
    <var-skeleton fullscreen :loading="fullscreenLoading" />
  </div>
</template>

<script>
import VarSkeleton from '..'
import VarButton from '../../button'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'SkeletonExample',

  components: {
    VarSkeleton,
    VarButton,
    AppType,
  },

  data: () => ({
    loading: true,
    fullscreenLoading: false,
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)
  },

  methods: {
    fullscreen() {
      this.fullscreenLoading = true

      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
  },
}
</script>

<style scoped lang="less">
.var-skeleton-example {
  .var-button {
    position: relative;
    z-index: 10;
    margin-bottom: 10px;
  }
}
</style>
