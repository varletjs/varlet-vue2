import { defineComponent, nextTick } from '../utils/create'
import { props } from './props'
import VarTeleport from '../teleport'
import { getLeft, getTop, toSizeUnit } from '../utils/elements'
import { createZIndexMixin } from '../utils/mixins/zIndex'
import { createTeleportMixin } from '../utils/mixins/teleport'
import { NOOP } from '../utils/shared'

import '../styles/common.less'
import '../styles/elevation.less'
import './menu.less'

export default defineComponent({
  name: 'VarMenu',

  mixins: [createZIndexMixin('show', 1), createTeleportMixin],

  props,

  data: () => ({
    to: null,
    top: 0,
    left: 0,
    clickSelf: false,
  }),

  computed: {
    transitionStyle() {
      return {
        top: `calc(${this.top}px + ${toSizeUnit(this.offsetY)})`,
        left: `calc(${this.left}px + ${toSizeUnit(this.offsetX)})`,
        zIndex: this.zIndex,
      }
    },
  },

  mounted() {
    this.to = this.teleport
    this.resize()

    document.addEventListener('click', this.handleMenuClose)
    window.addEventListener('resize', this.resize)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.handleMenuClose)
    window.removeEventListener('resize', this.resize)
  },

  watch: {
    alignment() {
      this.resize()
    },

    async show(newValue) {
      const { onOpen, onClose } = this.getListeners()

      if (newValue) {
        await nextTick()
        this.resize()
      }

      newValue ? onOpen?.() : onClose?.()
    },

    teleport(newValue) {
      this.to = newValue
    },
  },

  methods: {
    // expose
    resize() {
      const { host } = this.$refs

      this.top = this.computeTop(this.alignment)

      if (!host) {
        return
      }

      this.left = getLeft(host)
    },

    computeTop(alignment) {
      const { host, menu } = this.$refs

      if (!host) {
        return
      }

      return alignment === 'top' ? getTop(host) : getTop(host) - menu.offsetHeight
    },

    handleClick() {
      this.clickSelf = true
    },

    handleMenuClose() {
      if (this.clickSelf) {
        this.clickSelf = false
        return
      }

      if (!this.show) {
        return
      }

      this.getListeners()['onUpdate:show']?.()
    },

    renderTransition() {
      return (
        <transition
          name="var-menu"
          onAfterEnter={this.getListeners().onOpened ?? NOOP}
          onAfterLeave={this.getListeners().onClosed ?? NOOP}
        >
          <div
            class="var-menu__menu var-elevation--3"
            ref="menu"
            style={this.transitionStyle}
            v-show={this.show}
            onClick={(event) => {
              event.stopPropagation()
            }}
          >
            {this.slots('menu')}
          </div>
        </transition>
      )
    },
  },

  render() {
    return (
      <div class="var-menu" ref="host" onClick={this.handleClick}>
        {this.slots('default')}
        {this.to ? (
          <VarTeleport to={this.to} disabled={this.teleportDisabled}>
            {this.renderTransition()}
          </VarTeleport>
        ) : (
          this.renderTransition()
        )}
      </div>
    )
  },
})
