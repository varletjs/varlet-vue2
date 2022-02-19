import type { PropType } from 'vue'

export type ValidateTriggers = 'onChange'

export const props = {
  value: {
    type: [String, Number],
    default: 0,
  },
  count: {
    type: [String, Number],
    default: 5,
  },
  color: {
    type: String,
  },
  icon: {
    type: String,
    default: 'star',
  },
  emptyColor: {
    type: String,
  },
  emptyIcon: {
    type: String,
    default: 'star-outline',
  },
  size: {
    type: [String, Number],
    default: '24',
  },
  gap: {
    type: [String, Number],
    default: '2',
  },
  half: {
    type: Boolean,
    default: false,
  },
  halfIcon: {
    type: String,
    default: 'star-half-full',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledColor: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: false,
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
  onChange: {
    type: Function as PropType<(score: number) => void>,
  },
  onInput: {
    type: Function as PropType<(score: number) => void>,
  },
}
