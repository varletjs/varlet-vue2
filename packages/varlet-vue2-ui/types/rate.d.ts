import { VarComponent } from './varComponent'

export interface RateProps {
  value?: string | number
  count?: string | number
  color?: string
  icon?: string
  emptyColor?: string
  disabledColor?: string
  emptyIcon?: string
  halfIcon?: string
  size?: string | number
  gap?: string | number
  half?: boolean
  disabled?: boolean
  readonly?: boolean
  ripple?: boolean
  validateTrigger?: Array<RadioGroupValidateTriggers>
  rules?: Array<(value: any) => any>
  onChange?: (value: string | number) => void
  onInput?: (value: string | number) => void
}

export class Rate extends VarComponent {
  $props: RateProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _RateComponent extends Rate {}
