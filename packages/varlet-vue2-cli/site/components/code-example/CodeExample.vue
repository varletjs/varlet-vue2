<template>
  <div class="var-site-code-example">
    <div class="var-site-code-example__toolbar">
      <var-site-button text round @click="toggle" v-if="fold && !disabledFold">
        <var-site-icon name="xml" size="18" />
      </var-site-button>

      <var-site-button
        :id="`clip-trigger-${cid}`"
        :data-clipboard-target="`#clip-target-${cid}`"
        text
        round
        v-if="clipboard"
      >
        <var-site-icon name="content-copy" size="18" />
      </var-site-button>
    </div>
    <div
      :id="`clip-target-${cid}`"
      class="var-site-code-example__code"
      :class="[disabledFold ? 'var-site-code-example--scroller' : null]"
      ref="code"
      :style="{
        height: height >= 0 ? `${height}px` : undefined,
      }"
      >
      <slot/>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
import Button from '../button'
import Snackbar from '../snackbar'
import Clipboard from 'clipboard'
import config from '@config'
import { doubleRaf } from '../utils/elements'
import { get } from 'lodash-es'
import { getPCLocationInfo } from '../../utils'
import { defineComponent, nextTick } from '../utils/create'

let clipId = 0
const offset = 10

export default defineComponent({
  name: 'VarSiteCodeExample',

  components: {
    [Button.name]: Button,
    [Icon.name]: Icon
  },

  data: () => ({
    cid: clipId++,
    fold: get(config, 'pc.fold'),
    disabledFold: false,
    clipboard: get(config, 'pc.clipboard', {}),
    height: -1,
    timer: null
  }),

  mounted() {
    const trigger = new Clipboard(`#clip-trigger-${this.cid}`)

    trigger.on('success', () => {
      Snackbar.success(this.clipboard[getPCLocationInfo().language])
    })

    const { offsetHeight } = this.$refs.code
    this.disabledFold = offsetHeight - this.fold.foldHeight < offset
    this.height = this.fold?.defaultFold ? this.fold?.foldHeight : -1
  },

  methods: {
    async toggle() {
      const foldHeight = this.fold.foldHeight

      if (this.height === foldHeight) {
        this.height = -1
        await nextTick()
        const { offsetHeight } = this.$refs.code
        this.height = foldHeight
        await doubleRaf()
        this.height = offsetHeight

        this.timer = setTimeout(() => {
          this.height = -1
        }, 250)
      } else {
        clearTimeout(this.timer)
        const { offsetHeight } = this.$refs.code
        this.height = offsetHeight
        await doubleRaf()
        this.height = foldHeight
      }
    }
  },
})
</script>

<style lang="less">
@import "./codeExample";
</style>
