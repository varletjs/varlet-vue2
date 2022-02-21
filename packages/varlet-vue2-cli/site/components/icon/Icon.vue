<template>
  <component
    class="var-site-icon"
    :is="isURL(name) ? 'img' : 'i'"
    :class="[
      `${namespace}--set`,
      isURL(name) ? 'var-site-icon__image' : `${namespace}-${nextName}`,
      shrinking ? 'var-site-icon--shrinking' : null,
    ]"
    :style="{
      color,
      transition: `transform ${toNumber(transition)}ms`,
      width: isURL(name) ? toSizeUnit(size) : null,
      height: isURL(name) ? toSizeUnit(size) : null,
      fontSize: toSizeUnit(size),
    }"
    :src="isURL(name) ? nextName : null"
    @click="getListeners().onClick"
  />
</template>

<script>
import { isURL, toNumber } from '../utils/shared'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { defineComponent, nextTick } from '../utils/create'

export default defineComponent({
  name: 'VarSiteIcon',

  props,

  data: () => ({
    nextName: '',
    shrinking: false,
  }),

  watch: {
    name: {
      async handler(newName, oldName) {
        if (oldName == null || toNumber(this.transition) === 0) {
          this.nextName = newName
          return
        }

        this.shrinking = true
        await nextTick()
        setTimeout(() => {
          oldName != null && (this.nextName = newName)
          this.shrinking = false
        }, toNumber(this.transition))
      },
      immediate: true,
    },
  },

  methods: {
    toSizeUnit,
    isURL,
    toNumber,
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './icon';
</style>
