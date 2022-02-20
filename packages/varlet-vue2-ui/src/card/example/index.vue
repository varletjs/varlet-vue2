<template>
  <div class="var-card-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-card :title="pack.title" :description="pack.description" />
    <app-type>{{ pack.showSubtitle }}</app-type>
    <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" />
    <app-type>{{ pack.showImage }}</app-type>
    <var-card
      :title="pack.title"
      :subtitle="pack.subtitle"
      :description="pack.description"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    />
    <app-type>{{ pack.useSlot }}</app-type>
    <var-card
      :title="pack.title"
      :subtitle="pack.subtitle"
      :description="pack.description"
      src="https://varlet.gitee.io/varlet-ui/cat.jpg"
    >
      <template #extra>
        <var-button type="primary" style="margin-right: 10px">{{ pack.button }}</var-button>
        <var-button type="warning">{{ pack.button }}</var-button>
      </template>
    </var-card>
    <app-type>{{ pack.showRipple }}</app-type>
    <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" ripple />
  </div>
</template>

<script>
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarButton from '../../button'
import VarCard from '..'
import context from '../../context'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchPlatform, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'CardExample',

  components: {
    VarButton,
    VarCard,
    AppType,
  },

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)

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
}
</script>
