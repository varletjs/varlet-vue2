<template>
  <div class="var-badge-example">
    <app-type>{{ pack.themeColorBadge }}</app-type>
    <var-badge />
    <var-badge type="primary" />
    <var-badge type="info" />
    <var-badge type="warning" />
    <var-badge type="success" />
    <var-badge type="danger" />

    <app-type>{{ pack.dotBadge }}</app-type>
    <var-badge dot type="danger" />

    <app-type>{{ pack.customContentBadge }}</app-type>
    <var-badge type="danger" value="badge" />
    <var-badge type="danger" value="hot" />
    <var-badge type="danger" value="66" />

    <app-type>{{ pack.maximum }}</app-type>
    <var-badge type="danger" :value="value" :max-value="maxValue" />
    <var-badge type="danger" :value="value1" :max-value="maxValue" />

    <app-type>{{ pack.differentPositioningBadges }}</app-type>
    <var-badge type="danger" position="right-top">
      <var-chip plain :round="false" color="#009688">{{ pack.upperRight }}</var-chip>
    </var-badge>
    <var-badge type="danger" position="right-bottom">
      <var-chip plain :round="false" color="#009688">{{ pack.lowerRight }}</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-top">
      <var-chip plain :round="false" color="#009688">{{ pack.upperLeft }}</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-bottom">
      <var-chip plain :round="false" color="#009688">{{ pack.lowerLeft }}</var-chip>
    </var-badge>

    <app-type>{{ pack.whetherToDisplayTheBadge }}</app-type>
    <var-button @click="handleChange">
      {{ pack.clickToChangeTheState }}
    </var-button>
    <var-badge type="danger" position="right-top" :hidden="hidden">
      <var-chip plain :round="false" color="#009688">{{ pack.badge }}</var-chip>
    </var-badge>

    <app-type>{{ pack.customBadgeColors }}</app-type>
    <var-badge color="#6200ea" position="right-top">
      <var-chip plain :round="false" color="#009688">{{ pack.badge }}</var-chip>
    </var-badge>

    <app-type>{{ pack.customBadgeIcons }}</app-type>
    <var-badge color="#6200ea" position="right-top" icon="notebook">
      <var-chip plain :round="false" color="#009688">{{ pack.badge }}</var-chip>
    </var-badge>
  </div>
</template>

<script>
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarBadge from '..'
import VarButton from '../../button'
import VarChip from '../../chip'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'BadgeExample',

  components: {
    VarBadge,
    VarButton,
    VarChip,
    AppType,
  },

  data: () => ({
    value: 88,
    value1: 188,
    maxValue: 99,
    hidden: false,
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
    handleChange() {
      this.hidden = !this.hidden
    },
  },
}
</script>

<style lang="less" scoped>
.var-badge-example {
  .var-badge {
    margin-right: 20px;
    margin-bottom: 8px;
  }
}
</style>
