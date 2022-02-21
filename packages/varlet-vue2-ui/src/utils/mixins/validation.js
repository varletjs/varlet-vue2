import { isArray } from '../shared'

export const ValidationMixin = {
  data: () => ({
    errorMessage: '',
  }),

  methods: {
    async _validate(rules, value, apis) {
      if (!isArray(rules) || !rules.length) {
        return true
      }

      const resArr = await Promise.all(rules.map((rule) => rule(value, apis)))
      const valid = !resArr.some((res) => {
        if (res !== true) {
          this.errorMessage = String(res)
          return true
        }

        return false
      })

      valid && (this.errorMessage = '')

      return valid
    },

    async _validateWithTrigger(validateTrigger, trigger, rules, value, apis) {
      if (validateTrigger.includes(trigger)) {
        await this._validate(rules, value, apis)
      }
    },

    // expose
    resetValidation() {
      this.errorMessage = ''
    },
  },
}
