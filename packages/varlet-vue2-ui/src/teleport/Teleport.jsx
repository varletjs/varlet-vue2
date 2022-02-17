import Vue from 'vue'
import { props } from './props'
import { defineComponent } from '../utils/create'

export default defineComponent({
  name: 'VarTeleport',

  props,

  data: () => ({
    el: null,
    instance: null,
  }),

  watch: {
    disabled() {
      this.transfer()
    },

    to() {
      this.transfer()
    },
  },

  methods: {
    create() {
      this.instance = new (Vue.extend({
        render: () => <div class="var-teleport__container">{this.slots()}</div>,
      }))()

      this.instance.$parent = this
      this.el = this.instance.$mount().$el
    },

    transfer() {
      const container = this.disabled ? this.$refs.teleport : document.querySelector(this.to)
      const parentNode = this.el.parentNode

      if (parentNode === container) {
        return
      }

      parentNode?.removeChild(this.el)
      container.appendChild(this.el)
    },
  },

  updated() {
    this.instance.$forceUpdate()
  },

  mounted() {
    this.create()
    this.transfer()
  },

  deactivated() {
    this.el.parentNode?.removeChild(this.el)
  },

  activated() {
    this.transfer()
  },

  beforeDestroy() {
    this.instance.$destroy()
    this.el.parentNode?.removeChild(this.el)
  },

  render() {
    return <div ref="teleport" class="var-teleport" />
  },
})
