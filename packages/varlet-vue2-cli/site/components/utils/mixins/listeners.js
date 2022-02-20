import { bigCamelize } from '../shared'

export const ListenersMixin = {
  methods: {
    getListeners() {
      return Object.keys(this.$listeners).reduce((listenersWithOn, key) => {
        listenersWithOn['on' + bigCamelize(key)] = this.$listeners[key]

        return listenersWithOn
      }, {})
    },
  },
}
