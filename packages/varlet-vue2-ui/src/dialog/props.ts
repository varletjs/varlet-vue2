import { pickProps } from '../utils/components'
import { props as popupProps } from '../popup/props'
import type { PropType } from 'vue'

function messageAlignValidator(messageAlign: string): boolean {
  return ['left', 'center', 'right'].includes(messageAlign)
}

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  messageAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
    validator: messageAlignValidator,
  },
  confirmButton: {
    type: Boolean,
    default: true,
  },
  cancelButton: {
    type: Boolean,
    default: true,
  },
  confirmButtonText: {
    type: String,
  },
  cancelButtonText: {
    type: String,
  },
  confirmButtonTextColor: {
    type: String,
  },
  cancelButtonTextColor: {
    type: String,
  },
  confirmButtonColor: {
    type: String,
  },
  cancelButtonColor: {
    type: String,
  },
  dialogClass: {
    type: String,
  },
  dialogStyle: {
    type: Object,
  },
  // internal
  beforeClose: {
    type: Function,
  },
  ...pickProps(popupProps, [
    'overlay',
    'overlayClass',
    'overlayStyle',
    'lockScroll',
    'closeOnClickOverlay',
    'teleport',
  ]),
}
