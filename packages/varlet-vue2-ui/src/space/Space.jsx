import { props, internalSizeValidator } from './props'
import { toPxNum } from '../utils/elements'
import { isArray } from '../utils/shared'
import { defineComponent } from '../utils/create'

import '../styles/common.less'
import './space.less'

const internalSizes = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20],
}

const getSize = (size, isInternalSize) => {
  return isInternalSize ? internalSizes[size] : isArray(size) ? size.map(toPxNum) : [toPxNum(size), toPxNum(size)]
}

const padStartFlex = (style) => {
  return style === 'start' || style === 'end' ? `flex-${style}` : style
}

export default defineComponent({
  name: 'VarSpace',

  props,

  render() {
    const { inline, justify, align, wrap, direction, size } = this
    const children = this.slots() ?? []
    const lastIndex = children.length - 1
    const isInternalSize = internalSizeValidator(size)
    const [y, x] = getSize(size, isInternalSize)

    const spacers = children.map((child, index) => {
      let margin = '0'

      if (direction === 'row') {
        if (justify === 'start' || justify === 'center' || justify === 'end') {
          if (index !== lastIndex) {
            margin = `${y / 2}px ${x}px ${y / 2}px 0`
          } else {
            margin = `${y / 2}px 0`
          }
        } else if (justify === 'space-around') {
          margin = `${y / 2}px ${x / 2}px`
        } else if (justify === 'space-between') {
          if (index === 0) {
            margin = `${y / 2}px ${x / 2}px ${y / 2}px 0`
          } else if (index === lastIndex) {
            margin = `${y / 2}px 0 ${y / 2}px ${x / 2}px`
          } else {
            margin = `${y / 2}px ${x / 2}px`
          }
        }
      }

      if (direction === 'column' && index !== lastIndex) {
        margin = `0 0 ${y}px 0`
      }

      return <div style={{ margin }}>{child}</div>
    })

    return (
      <div
        class={['var-space', 'var--box', inline ? 'var-space--inline' : null]}
        style={{
          flexDirection: direction,
          justifyContent: padStartFlex(justify),
          alignItems: padStartFlex(align),
          flexWrap: wrap ? 'wrap' : 'nowrap',
          margin: direction === 'row' ? `-${y / 2}px 0` : undefined,
        }}
      >
        {spacers}
      </div>
    )
  },
})
