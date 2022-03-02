import type { PropType } from 'vue'
import { pickProps } from '../utils/components'
import { props as swipeProps } from '../swipe/props'
import { props as popupProps } from '../popup/props'

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  current: {
    type: String,
  },
  zoom: {
    type: [String, Number],
    default: 2,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  ...pickProps(swipeProps, ['loop', 'indicator']),
  ...pickProps(popupProps, ['lockScroll', 'teleport']),
}
