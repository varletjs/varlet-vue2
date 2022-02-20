<template>
  <div class="var-progress-example">
    <div class="space"></div>

    <div class="progress-demo__basic">
      <app-type>{{ pack.basicUsage }}</app-type>
      <var-progress :value="20" :track="false" />
      <var-progress :value="value" :track="false" />
      <var-progress :value="100" :track="false" />
    </div>

    <div class="progress-demo__label">
      <app-type>{{ pack.showLabel }}</app-type>
      <var-progress :value="30" label />
      <var-progress :value="value" label />
      <var-progress :value="100" label>success</var-progress>
    </div>

    <div class="progress-demo__style">
      <app-type>{{ pack.style }}</app-type>
      <var-progress :value="30" line-width="8" color="#ff9f00" />
      <var-progress :value="60" line-width="8" color="#ff9f00" track-color="#f5cb90" />
      <var-progress :value="80" ripple line-width="8" color="#ff9f00" track-color="#f5cb90" />
    </div>

    <app-type>{{ pack.circle }}</app-type>
    <div class="progress-demo__circle">
      <var-progress mode="circle" :value="30" line-width="5" :size="56" />
      <div class="space"></div>
      <var-progress mode="circle" label :value="value" line-width="5" :size="56" />
      <div class="space"></div>
      <var-progress mode="circle" label :value="100" line-width="5" :size="56" />
    </div>

    <app-type>{{ pack.hideTrack }}</app-type>
    <div class="progress-demo__circle">
      <var-progress mode="circle" :value="50" :size="56" :track="false" />
    </div>
  </div>
</template>

<script>
import VarProgress from '..'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'ProgressExample',

  components: { VarProgress, AppType },

  data: () => ({
    value: 0,
    interval: 0,
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

  mounted() {
    this.interval = window.setInterval(() => {
      if (this.value >= 100) this.value = 0
      else this.value += 20
    }, 1000)
  },

  beforeDestroy() {
    window.clearInterval(this.interval)
  },
}
</script>

<style lang="less" scoped>
.var-progress-example {
  h4 {
    margin: 0;
  }

  .space {
    height: 10px;
  }

  .progress-demo__basic,
  .progress-demo__style,
  .progress-demo__label,
  .progress-demo__custom {
    .var-progress {
      margin: 12px 0;

      &:nth-child(2) {
        margin-top: 0;
      }
    }
  }

  .progress-demo__circle {
    display: flex;
    align-items: center;

    .space {
      width: 20px;
    }
  }
}
</style>
