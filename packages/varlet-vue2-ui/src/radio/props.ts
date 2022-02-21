import type { PropType } from 'vue'

export type ValidateTriggers = 'onChange'

export const props = {
  value: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: false,
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: true,
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  checkedColor: {
    type: String,
  },
  uncheckedColor: {
    type: String,
  },
  iconSize: {
    type: [String, Number],
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTriggers>>,
    default: () => ['onChange'],
  },
  rules: {
    type: Array as PropType<Array<(value: any) => any>>,
  },
}
