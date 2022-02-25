<template>
  <div class="var-step2-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-steps :active="active" @clickStep="click">
      <var-step>{{ pack.first }}</var-step>
      <var-step>{{ pack.second }}</var-step>
      <var-step>{{ pack.third }}</var-step>
      <var-step>{{ pack.fourth }}</var-step>
    </var-steps>
    <app-type>{{ pack.customStyle }}</app-type>
    <var-steps :active="active" active-color="#f44336" inactive-color="#e99eb4">
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.first }}</var-step>
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.second }}</var-step>
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.third }}</var-step>
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.fourth }}</var-step>
    </var-steps>
    <app-type>{{ pack.vertical }}</app-type>
    <var-steps direction="vertical" :active="active">
      <var-step>{{ pack.first }}</var-step>
      <var-step>{{ pack.second }}</var-step>
      <var-step>{{ pack.third }}</var-step>
      <var-step>{{ pack.fourth }}</var-step>
    </var-steps>
    <var-button type="primary" block @click="next" style="margin-top: 20px">{{ pack.next }}</var-button>
  </div>
</template>

<script>
import VarSteps from '..'
import VarStep from '../../step'
import VarButton from '../../button'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'StepsExample',

  components: {
    VarSteps,
    VarStep,
    VarButton,
    AppType,
  },

  data: () => ({
    active: 0,
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
    next() {
      this.active = (this.active + 1) % 4
    },

    click(index) {
      console.log(index)
    },
  },
}
</script>
