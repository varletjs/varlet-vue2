import { defineComponent } from '../utils/create'
import { props } from './props'
import { createLockMixin } from '../context/lock'
import VarTeleport from '../teleport'
import { addRouteListener } from '../utils/components'
import { createZIndexMixin } from '../utils/mixins/zIndex'
import { createTeleportMixin } from '../utils/mixins/teleport'
import { NOOP } from '../utils/shared'

import '../styles/common.less'
import './popup.less'

export default defineComponent({
  name: 'VarPopup',

  inheritAttrs: false,

  mixins: [createZIndexMixin('show', 3), createTeleportMixin, createLockMixin('show', 'lockScroll')],

  props,

  created() {
    // internal for Dialog
    addRouteListener(this, () => this.getListeners()?.onRouteChange?.())
  },

  watch: {
    show(newValue) {
      const { onOpen, onClose } = this.getListeners()
      newValue ? onOpen?.() : onClose?.()
    },
  },

  methods: {
    hidePopup() {
      const { closeOnClickOverlay, getListeners } = this

      getListeners()?.onClickOverlay?.()

      if (!closeOnClickOverlay) return

      getListeners()['onUpdate:show']?.(false)
    },

    renderOverlay() {
      return (
        <div
          class={['var-popup__overlay', this.overlayClass]}
          style={{
            zIndex: this.zIndex - 1,
            ...this.overlayStyle,
          }}
          onClick={this.hidePopup}
        />
      )
    },

    renderContent() {
      return (
        <div
          class={['var-popup__content', 'var-elevation--3', `var-popup--${this.position}`, this.$attrs.class]}
          style={{ zIndex: this.zIndex }}
          {...{ attrs: this.$attrs }}
        >
          {this.slots('default')}
        </div>
      )
    },

    renderPopup() {
      return (
        <transition
          name="var-fade"
          onAfterEnter={this.getListeners().onOpened ?? NOOP}
          onAfterLeave={this.getListeners().onClosed ?? NOOP}
        >
          <div class="var--box var-popup" style={{ zIndex: this.zIndex - 2 }} v-show={this.show}>
            {this.overlay && this.renderOverlay()}
            <transition name={this.transition || `var-pop-${this.position}`}>
              {this.show && this.renderContent()}
            </transition>
          </div>
        </transition>
      )
    },
  },

  render() {
    return this.teleport ? (
      <VarTeleport to={this.teleport} disabled={this.teleportDisabled}>
        {this.renderPopup()}
      </VarTeleport>
    ) : (
      this.renderPopup()
    )
  },
})
