import { VarComponent } from './varComponent'

export interface PullRefreshProps {
  value?: boolean
  disabled?: boolean
  animationDuration?: number | string
  successDuration?: number | string
  bgColor?: string
  successBgColor?: string
  color?: string
  successColor?: string
  onRefresh: () => void
  onInput?: (value: boolean) => void
}

export class PullRefresh extends VarComponent {
  $props: PullRefreshProps
}

export class _PullRefreshComponent extends PullRefresh {}
