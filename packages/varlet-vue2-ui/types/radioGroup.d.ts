import { VarComponent } from './varComponent'

export type RadioGroupValidateTriggers = 'onChange'

export interface RadioGroupProps {
  value?: any[]
  direction?: 'horizontal' | 'vertical'
  validateTrigger?: Array<RadioGroupValidateTriggers>
  rules?: Array<(value: any) => any>
  onChange?: (value: Array<any>) => void
  onInput?: (value: Array<any>) => void
}

export class RadioGroup extends VarComponent {
  $props: RadioGroupProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _RadioGroupComponent extends RadioGroup {}
