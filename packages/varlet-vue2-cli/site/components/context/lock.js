import Vue from 'vue'
import context from '.'

export function resolveLock() {
  const lockCounts = Object.keys(context.locks).length
  lockCounts <= 0 ? document.body.classList.remove('m--lock') : document.body.classList.add('m--lock')
}

export function addLock(uid) {
  Vue.set(context.locks, uid, 1)
  resolveLock()
}

export function releaseLock(uid) {
  delete context.locks[uid]
  resolveLock()
}

export function createLockMixin(state, use) {
  const propWatcher = use
    ? {
        [use](newValue) {
          if (!newValue) {
            releaseLock(this._uid)
          } else if (newValue && this[state]) {
            addLock(this._uid)
          }
        },
      }
    : {}

  return {
    watch: {
      ...propWatcher,

      [state](newValue) {
        if (use && !this[use]) {
          return
        }

        if (newValue) {
          addLock(this._uid)
        } else {
          releaseLock(this._uid)
        }
      },
    },

    beforeMount() {
      if (use && !this[use]) {
        return
      }

      if (this[state]) {
        addLock(this._uid)
      }
    },

    beforeDestroy() {
      if (use && !this[use]) {
        return
      }

      if (this[state]) {
        releaseLock(this._uid)
      }
    },

    activated() {
      if (use && !this[use]) {
        return
      }

      if (this[state]) {
        addLock(this._uid)
      }
    },

    deactivated() {
      if (use && !this[use]) {
        return
      }

      if (this[state]) {
        releaseLock(this._uid)
      }
    },
  }
}
