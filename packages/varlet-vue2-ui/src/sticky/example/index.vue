<template>
  <div class="var-sticky-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-sticky :offset-top="54">
      <var-button type="primary">{{ pack.basicUsage }}</var-button>
    </var-sticky>

    <app-type>{{ pack.localSticky }}</app-type>
    <div class="scroller">
      <var-sticky>
        <var-button type="success">{{ pack.localSticky }}</var-button>
      </var-sticky>
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import VarSticky from '..'
import VarButton from '../../button'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet-vue2/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'StickyExample',
  components: {
    VarSticky,
    VarButton,
    AppType,
  },
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
.var-sticky-example {
  min-height: 200vh;

  .scroller {
    height: 200px;
    overflow: auto;
    background: var(--site-config-color-app-bar);
    border-radius: 4px;

    .block {
      width: 100%;
      height: 600px;
      background: var(--site-config-color-type);
      opacity: 0.5;
    }
  }
}
</style>
