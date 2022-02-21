<template>
  <div class="var-form">
    <slot />
  </div>
</template>

<script>
import { props } from './props'
import { defineComponent } from '../utils/create'
import { ValidationMixin } from '../utils/mixins/validation'
import { createParentMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarForm',

  mixins: [ValidationMixin, createParentMixin('form', { childrenKey: 'formItems' })],

  props,

  methods: {
    // expose
    async validate() {
      const res = await Promise.all(this.formItems.map(({ validate }) => validate()))

      return res.every((r) => r === true)
    },

    // expose
    reset() {
      this.formItems.forEach(({ reset }) => reset())
    },

    // expose
    resetValidation() {
      this.formItems.forEach(({ resetValidation }) => resetValidation())
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
