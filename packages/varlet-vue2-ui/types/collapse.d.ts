import { VarComponent } from './varComponent'

export type CollapseModelValue = null | string | number | Array<string | number>

export interface CollapseProps {
  value?: CollapseModelValue
  accordion?: boolean
  offset?: boolean
  onChange?: (value: CollapseModelValue) => void
  onInput?: (value: CollapseModelValue) => void
}

export class Collapse extends VarComponent {
  $props: CollapseProps
}

export class _CollapseComponent extends Collapse {}
