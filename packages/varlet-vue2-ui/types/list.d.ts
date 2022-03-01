import { VarComponent } from './varComponent'

export interface LoadingProps {
  loading?: boolean
  immediateCheck?: boolean
  finished?: boolean
  error?: boolean
  offset?: 'String' | 'Number'
  loadingText?: string
  finishedText?: string
  errorText?: string
  'onUpdate:loading'?: () => void
  'onUpdate:error'?: () => void
}

export class List extends VarComponent {
  $props: ListProps
}

export class _List extends List {}
