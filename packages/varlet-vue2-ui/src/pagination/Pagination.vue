<template>
  <ul class="var-pagination">
    <li
      v-ripple="{ disabled: localCurrent <= 1 || disabled }"
      class="var-pagination__item var-pagination__prev"
      :class="{
        'var-pagination__item-disabled': localCurrent <= 1 || disabled,
        'var-pagination__item-hover': simple,
        'var-elevation--2': !simple,
      }"
      @click="clickItem('prev')"
    >
      <slot name="prev">
        <var-icon name="chevron-left" />
      </slot>
    </li>
    <li v-if="simple" class="var-pagination__simple" :class="{ 'var-pagination__item-disabled': disabled }">
      <var-input
        v-model="simpleValue"
        :disabled="disabled"
        var-pagination-cover
        @blur="setPage('simple', simpleValue, $event)"
        @keydown.enter="setPage('simple', simpleValue, $event)"
      />
      <span>/ {{ pageCount }}</span>
    </li>
    <li
      v-else
      v-ripple="{ disabled }"
      v-for="(item, index) in pageList"
      :key="index"
      :item-mode="getMode(item, index)"
      class="var-pagination__item var-elevation--2"
      :class="{
        'var-pagination__item-active': item === localCurrent && !disabled,
        'var-pagination__item-hide': isHideEllipsis(item, index),
        'var-pagination__item-disabled': disabled,
        'var-pagination__item-disabled-active': item === localCurrent && disabled,
      }"
      @click="clickItem(item, index)"
    >
      {{ item }}
    </li>
    <li
      v-ripple="{ disabled: localCurrent >= pageCount || disabled }"
      class="var-pagination__item var-pagination__next"
      :class="{
        'var-pagination__item-disabled': localCurrent >= pageCount || disabled,
        'var-pagination__item-hover': simple,
        'var-elevation--2': !simple,
      }"
      @click="clickItem('next')"
    >
      <slot name="next">
        <var-icon name="chevron-right" />
      </slot>
    </li>

    <li v-if="showSizeChanger" class="var-pagination__size" :class="{ 'var-pagination__item-disabled': disabled }">
      <var-menu :show.sync="menuVisible" :offset-x="-4">
        <div class="var-pagination__size-open" style="display: flex" @click="showMenu">
          <span>{{ localSize }}{{ pack.paginationItem }} / {{ pack.paginationPage }}</span>
          <var-icon class="var-pagination__size-open-icon" var-pagination-cover name="menu-down" />
        </div>

        <template #menu>
          <var-cell
            class="var-pagination__list"
            :class="{
              'var-pagination__list-active': localSize === option,
            }"
            v-ripple
            v-for="(option, index) in sizeOption"
            :key="index"
            @click.native="clickSize(option)"
          >
            {{ option }}{{ pack.paginationItem }} / {{ pack.paginationPage }}
          </var-cell>
        </template>
      </var-menu>
    </li>
    <li
      v-if="showQuickJumper && !simple"
      class="var-pagination__quickly"
      :class="{ 'var-pagination__item-disabled': disabled }"
    >
      {{ pack.paginationJump }}
      <var-input
        v-model="inputValue"
        :disabled="disabled"
        var-pagination-cover
        @blur="setPage('quick', inputValue, $event)"
        @keydown.enter="setPage('quick', inputValue, $event)"
      />
    </li>

    <li v-if="totalText" class="var-pagination__total">
      {{ totalText }}
    </li>
  </ul>
</template>

<script>
import VarMenu from '../menu'
import Ripple from '../ripple'
import VarIcon from '../icon'
import VarCell from '../cell'
import VarInput from '../input'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { isNumber, toNumber } from '../utils/shared'
import { pack } from '../locale'

export default defineComponent({
  name: 'VarPagination',

  components: {
    VarMenu,
    VarIcon,
    VarCell,
    VarInput,
  },

  directives: { Ripple },

  props,

  data() {
    return {
      menuVisible: false,
      inputValue: '',
      simpleValue: '1',
      isHideEllipsisHead: false,
      isHideEllipsisTail: false,
      pageList: [],
      localCurrent: this.toNumber(this.current) || 1,
      localSize: this.toNumber(this.size) || 10,
    }
  },

  computed: {
    pack() {
      return pack.value
    },

    activePosition() {
      return Math.ceil(this.maxPagerCount / 2)
    },

    pageCount() {
      return Math.ceil(this.toNumber(this.total) / this.toNumber(this.localSize))
    },

    range() {
      const start = this.localSize * (this.localCurrent - 1) + 1
      const end = Math.min(this.localSize * this.localCurrent, this.toNumber(this.total))
      return [start, end]
    },

    totalText() {
      if (!this.showTotal) return ''
      return this.showTotal(this.toNumber(this.total), this.range)
    },

    page() {
      const { current, size } = this
      return { current, size }
    },

    localPage() {
      const { localCurrent, localSize } = this
      return { localCurrent, localSize }
    },
  },

  watch: {
    page({ current, size }) {
      this.localCurrent = this.toNumber(current) || 1
      this.localSize = this.toNumber(size || 10)
    },

    localPage: {
      handler(newValue, oldValue) {
        const { localCurrent: newCurrent, localSize: newSize } = newValue

        let oldCurrent
        let oldSize
        if (oldValue) {
          oldCurrent = oldValue.localCurrent
          oldSize = oldValue.localSize
        }

        if (newCurrent > this.pageCount) {
          this.localCurrent = this.pageCount
          return
        }

        let list = []
        const { maxPagerCount, total, getListeners } = this
        const { onChange } = getListeners()
        const oldCount = Math.ceil(this.toNumber(total) / this.toNumber(oldSize))
        const rEllipseSign = this.pageCount - (maxPagerCount - this.activePosition) - 1
        this.simpleValue = `${newCurrent}`

        if (this.pageCount - 2 > maxPagerCount) {
          if (oldCurrent === undefined || this.pageCount !== oldCount) {
            for (let i = 2; i < maxPagerCount + 2; i++) list.push(i)
          }

          // 左边不需要出现省略符号占位
          if (newCurrent <= maxPagerCount && newCurrent < rEllipseSign) {
            list = []

            for (let i = 1; i < maxPagerCount + 1; i++) {
              list.push(i + 1)
            }

            this.isHideEllipsisHead = true
            this.isHideEllipsisTail = false
          }
          // 两边都需要出现省略符号占位
          if (newCurrent > maxPagerCount && newCurrent < rEllipseSign) {
            list = []

            for (let i = 1; i < maxPagerCount + 1; i++) {
              list.push(newCurrent + i - this.activePosition)
            }

            // 针对 maxPagerCount===1 的特殊处理
            this.isHideEllipsisHead = newCurrent === 2 && maxPagerCount === 1
            this.isHideEllipsisTail = false
          }
          // 右边不需要出现省略符号占位
          if (newCurrent >= rEllipseSign) {
            list = []

            for (let i = 1; i < maxPagerCount + 1; i++) {
              list.push(this.pageCount - (maxPagerCount - i) - 1)
            }

            this.isHideEllipsisHead = false
            this.isHideEllipsisTail = true
          }

          list = [1, '...', ...list, '...', this.pageCount]
        } else {
          for (let i = 1; i <= this.pageCount; i++) list.push(i)
        }

        this.pageList = list

        if (oldCurrent !== undefined) onChange?.(newCurrent, newSize)
        getListeners()['onUpdate:current']?.(newCurrent)
        getListeners()['onUpdate:size']?.(newSize)
      },

      immediate: true,

      deep: true,
    },
  },

  methods: {
    isNumber,

    toNumber,

    isHideEllipsis(item, index) {
      if (this.isNumber(item)) return false
      return index === 1 ? this.isHideEllipsisHead : this.isHideEllipsisTail
    },

    getMode(item, index) {
      if (this.isNumber(item)) return 'basic'

      return index === 1 ? 'head' : 'tail'
    },

    clickItem(item, index) {
      if (item === this.localCurrent || this.disabled) return

      if (this.isNumber(item)) this.localCurrent = item
      else if (item === 'prev') this.localCurrent > 1 && (this.localCurrent -= 1)
      else if (item === 'next') this.localCurrent < this.pageCount && (this.localCurrent += 1)
      else if (item === '...') {
        if (index === 1) {
          this.localCurrent = Math.max(this.localCurrent - this.maxPagerCount, 1)
        } else {
          this.localCurrent = Math.min(this.localCurrent + this.maxPagerCount, this.pageCount)
        }
      }
    },

    showMenu() {
      if (this.disabled) return
      this.menuVisible = true
    },

    clickSize(option) {
      this.localSize = option
      this.menuVisible = false
    },

    isValidatePage(value) {
      const pattern = /^[1-9][0-9]*$/
      return pattern.test(value)
    },

    setPage(type, value, event) {
      event.target.blur()
      if (this.isValidatePage(value)) {
        let valueNum = this.toNumber(value)

        if (valueNum > this.pageCount) {
          valueNum = this.pageCount
          this.simpleValue = `${valueNum}`
        }

        if (valueNum !== this.localCurrent) this.localCurrent = valueNum
      }
      if (type === 'quick') this.inputValue = ''

      if (type === 'simple' && !this.isValidatePage(value)) this.simpleValue = `${this.localCurrent}`
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../menu/menu';
@import '../cell/cell';
@import '../input/input';
@import '../ripple/ripple';
@import '../icon/icon';
@import './pagination';
</style>
