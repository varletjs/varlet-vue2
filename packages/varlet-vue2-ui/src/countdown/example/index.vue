<template>
  <div class="var-countdown-example">
    <div>
      <app-type>{{ pack.basicUsage }}</app-type>
      <var-countdown time="108000000" />
    </div>
    <div>
      <app-type>{{ pack.customFormat }}</app-type>
      <var-countdown time="108000000" :format="pack.format" />
    </div>
    <div>
      <app-type>{{ pack.showMillisecond }}</app-type>
      <var-countdown time="108000000" format="HH : mm : ss : SS" />
    </div>
    <div>
      <app-type>{{ pack.customStyle }}</app-type>
      <var-countdown time="108000000">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </var-countdown>
    </div>
    <div>
      <app-type>{{ pack.manualControl }}</app-type>
      <var-countdown :time="time" ref="countdown" :auto-start="false" format="ss : SSS" @end="end" @change="change" />
      <div class="btn-container">
        <var-button type="primary" @click="$refs.countdown.start()">{{ pack.startText }}</var-button>
        <var-button @click="$refs.countdown.pause()">{{ pack.pauseText }}</var-button>
        <var-button @click="$refs.countdown.reset()">{{ pack.resetText }}</var-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarCountdown from '..'
import Snackbar from '../../snackbar'
import VarButton from '../../button'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'CountdownExample',

  components: {
    VarCountdown,
    VarButton,
    AppType,
  },

  data: () => ({
    countdown: null,
    time: 3000,
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
    end() {
      Snackbar.info('end!')
    },

    change() {
      console.log('change')
    },
  },
}
</script>

<style scoped lang="less">
.var-countdown-example {
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  .block {
    background: #ff9f00;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .colon {
    margin: 0 5px;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
