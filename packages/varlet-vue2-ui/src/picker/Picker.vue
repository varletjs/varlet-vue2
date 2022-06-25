<template>
  <var-popup
    v-if="dynamic"
    var-picker-cover
    position="bottom"
    :show="show"
    :teleport="teleport"
    :class.native="'var-picker__popup'"
    :close-on-click-overlay="closeOnClickOverlay"
    @open="$emit('open')"
    @opened="$emit('opened')"
    @close="$emit('close')"
    @closed="$emit('closed')"
    @route-change="$emit('route-change')"
    @click-overlay="$emit('click-overlay')"
    @update:show="(value) => $emit('update:show', value)"
  >
    <div class="var-picker" v-bind="$attrs">
      <div class="var-picker__toolbar">
        <slot name="cancel">
          <var-button
            class="var-picker__cancel-button"
            var-picker-cover
            text
            :text-color="cancelButtonTextColor"
            @click="cancel"
          >
            {{ dt(cancelButtonText, pack.pickerCancelButtonText) }}
          </var-button>
        </slot>
        <slot name="title">
          <div class="var-picker__title">{{ dt(title, pack.pickerTitle) }}</div>
        </slot>
        <slot name="confirm">
          <var-button
            class="var-picker__confirm-button"
            text
            var-picker-cover
            :text-color="confirmButtonTextColor"
            @click="confirm"
          >
            {{ dt(confirmButtonText, pack.pickerConfirmButtonText) }}
          </var-button>
        </slot>
      </div>
      <div class="var-picker__columns" :style="{ height: `${columnHeight}px` }">
        <div
          class="var-picker__column"
          v-for="c in scrollColumns"
          :key="c.id"
          @touchstart="handleTouchstart($event, c)"
          @touchmove.prevent="handleTouchmove($event, c)"
          @touchend="handleTouchend($event, c)"
        >
          <div
            class="var-picker__scroller"
            ref="scrollEl"
            :style="{
              transform: `translateY(${c.translate}px)`,
              transitionDuration: `${c.duration}ms`,
              transitionProperty: c.duration ? 'transform' : 'none',
            }"
            @transitionend="handleTransitionend(c)"
          >
            <div
              class="var-picker__option"
              :style="{ height: `${localOptionHeight}px` }"
              v-for="t in c.column.texts"
              :key="t"
            >
              <div class="var-picker__text">{{ textFormatter(t, c.columnIndex) }}</div>
            </div>
          </div>
        </div>
        <div
          class="var-picker__picked"
          :style="{
            top: `${center}px`,
            height: `${localOptionHeight}px`,
          }"
        ></div>
        <div
          class="var-picker__mask"
          :style="{ backgroundSize: `100% ${(columnHeight - localOptionHeight) / 2}px` }"
        ></div>
      </div>
    </div>
  </var-popup>
  <transition v-else var-picker-cover>
    <div class="var-picker" v-bind="$attrs">
      <div class="var-picker__toolbar">
        <slot name="cancel">
          <var-button
            class="var-picker__cancel-button"
            var-picker-cover
            text
            :text-color="cancelButtonTextColor"
            @click="cancel"
          >
            {{ dt(cancelButtonText, pack.pickerCancelButtonText) }}
          </var-button>
        </slot>
        <slot name="title">
          <div class="var-picker__title">{{ dt(title, pack.pickerTitle) }}</div>
        </slot>
        <slot name="confirm">
          <var-button
            class="var-picker__confirm-button"
            text
            var-picker-cover
            :text-color="confirmButtonTextColor"
            @click="confirm"
          >
            {{ dt(confirmButtonText, pack.pickerConfirmButtonText) }}
          </var-button>
        </slot>
      </div>
      <div class="var-picker__columns" :style="{ height: `${columnHeight}px` }">
        <div
          class="var-picker__column"
          v-for="c in scrollColumns"
          :key="c.id"
          @touchstart="handleTouchstart($event, c)"
          @touchmove.prevent="handleTouchmove($event, c)"
          @touchend="handleTouchend($event, c)"
        >
          <div
            class="var-picker__scroller"
            ref="scrollEl"
            :style="{
              transform: `translateY(${c.translate}px)`,
              transitionDuration: `${c.duration}ms`,
              transitionProperty: c.duration ? 'transform' : 'none',
            }"
            @transitionend="handleTransitionend(c)"
          >
            <div
              class="var-picker__option"
              :style="{ height: `${localOptionHeight}px` }"
              v-for="t in c.column.texts"
              :key="t"
            >
              <div class="var-picker__text">{{ textFormatter(t, c.columnIndex) }}</div>
            </div>
          </div>
        </div>
        <div
          class="var-picker__picked"
          :style="{
            top: `${center}px`,
            height: `${localOptionHeight}px`,
          }"
        ></div>
        <div
          class="var-picker__mask"
          :style="{ backgroundSize: `100% ${(columnHeight - localOptionHeight) / 2}px` }"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script>
import VarButton from '../button'
import VarPopup from '../popup'
import { defineComponent } from '../utils/create'
import { props } from './props'
import { isArray, dt } from '../utils/shared'
import { toPxNum, getTranslate } from '../utils/elements'
import { pack } from '../locale'

const MOMENTUM_RECORD_TIME = 300
const MOMENTUM_ALLOW_DISTANCE = 15

let sid = 0

export default defineComponent({
  name: 'VarPicker',

  components: {
    VarButton,
    VarPopup,
  },

  inheritAttrs: false,

  props,

  data: () => ({
    scrollColumns: [],
    prevIndexes: [],
  }),

  mounted() {
    this.setScrollEls()
  },

  updated() {
    this.setScrollEls()
  },

  computed: {
    pack() {
      return pack.value
    },

    localOptionHeight() {
      return toPxNum(this.optionHeight)
    },

    localOptionCount() {
      return toPxNum(this.optionCount)
    },

    center() {
      return (this.localOptionCount * this.localOptionHeight) / 2 - this.localOptionHeight / 2
    },

    columnHeight() {
      return this.localOptionCount * this.localOptionHeight
    },
  },

  watch: {
    columns: {
      handler(newValue) {
        this.scrollColumns = this.cascade
          ? this.normalizeCascadeColumns(newValue)
          : this.normalizeNormalColumns(newValue)

        const { indexes } = this.getPicked()
        this.prevIndexes = [...indexes]
      },
      immediate: true,
    },
  },

  methods: {
    // expose
    confirm() {
      this.stopScroll()

      const { texts, indexes } = this.getPicked()
      this.prevIndexes = [...indexes]
      this.$emit('confirm', texts, indexes)
    },

    // expose
    cancel() {
      this.stopScroll()

      const { texts, indexes } = this.getPicked()
      this.prevIndexes = [...indexes]
      this.$emit('cancel', texts, indexes)
    },

    dt,

    setScrollEls() {
      if (!this.$refs.scrollEl) {
        return
      }

      this.scrollColumns.forEach((scrollColumn, index) => {
        scrollColumn.scrollEl = this.$refs.scrollEl[index]
      })
    },

    handlePopupUpdateShow(value) {
      this.$emit('update:show', value)
    },

    limitTranslate(scrollColumn) {
      const START_LIMIT = this.localOptionHeight + this.center
      const END_LIMIT = this.center - scrollColumn.column.texts.length * this.localOptionHeight

      if (scrollColumn.translate >= START_LIMIT) {
        scrollColumn.translate = START_LIMIT
      }
      if (scrollColumn.translate <= END_LIMIT) {
        scrollColumn.translate = END_LIMIT
      }
    },

    boundaryIndex(scrollColumn, index) {
      const { length } = scrollColumn.column.texts

      index = index >= length ? length - 1 : index
      index = index <= 0 ? 0 : index

      return index
    },

    getIndex(scrollColumn) {
      const index = Math.round((this.center - scrollColumn.translate) / this.localOptionHeight)

      return this.boundaryIndex(scrollColumn, index)
    },

    getPicked() {
      const texts = this.scrollColumns.map((scrollColumn) => scrollColumn.column.texts[scrollColumn.index])
      const indexes = this.scrollColumns.map((scrollColumn) => scrollColumn.index)

      return {
        texts,
        indexes,
      }
    },

    scrollTo(scrollColumn, index, duration, noEmit = false) {
      const translate = this.center - this.boundaryIndex(scrollColumn, index) * this.localOptionHeight

      if (translate === scrollColumn.translate) {
        scrollColumn.scrolling = false
        !noEmit && this.change(scrollColumn)
      }

      scrollColumn.translate = translate
      scrollColumn.duration = duration
    },

    momentum(scrollColumn, distance, duration) {
      scrollColumn.translate += (Math.abs(distance / duration) / 0.003) * (distance < 0 ? -1 : 1)
    },

    handleTouchstart(event, scrollColumn) {
      scrollColumn.touching = true
      scrollColumn.scrolling = false
      scrollColumn.duration = 0
      scrollColumn.translate = getTranslate(scrollColumn.scrollEl)
    },

    handleTouchmove(event, scrollColumn) {
      if (!scrollColumn.touching) {
        return
      }

      const { clientY } = event.touches[0]
      const moveY = scrollColumn.prevY !== undefined ? clientY - scrollColumn.prevY : 0
      scrollColumn.prevY = clientY
      scrollColumn.translate += moveY

      this.limitTranslate(scrollColumn)

      const now = performance.now()
      if (now - scrollColumn.momentumTime > MOMENTUM_RECORD_TIME) {
        scrollColumn.momentumTime = now
        scrollColumn.momentumPrevY = scrollColumn.translate
      }
    },

    handleTouchend(event, scrollColumn) {
      scrollColumn.touching = false
      scrollColumn.scrolling = true
      scrollColumn.prevY = undefined
      const distance = scrollColumn.translate - scrollColumn.momentumPrevY
      const duration = performance.now() - scrollColumn.momentumTime
      const shouldMomentum = Math.abs(distance) >= MOMENTUM_ALLOW_DISTANCE && duration <= MOMENTUM_RECORD_TIME

      shouldMomentum && this.momentum(scrollColumn, distance, duration)

      scrollColumn.index = this.getIndex(scrollColumn)
      this.scrollTo(scrollColumn, scrollColumn.index, shouldMomentum ? 1000 : 200)
    },

    handleTransitionend(scrollColumn) {
      scrollColumn.scrolling = false
      this.change(scrollColumn)
    },

    normalizeNormalColumns(normalColumns) {
      return normalColumns.map((column, columnIndex) => {
        const normalColumn = isArray(column) ? { texts: column } : column
        const scrollColumn = {
          id: sid++,
          prevY: undefined,
          momentumPrevY: undefined,
          touching: false,
          translate: this.center,
          index: normalColumn.initialIndex ?? 0,
          columnIndex,
          duration: 0,
          momentumTime: 0,
          column: normalColumn,
          scrollEl: null,
          scrolling: false,
        }
        this.scrollTo(scrollColumn, scrollColumn.index, 200)
        return scrollColumn
      })
    },

    normalizeCascadeColumns(cascadeColumns) {
      const scrollColumns = []

      this.createChildren(scrollColumns, cascadeColumns, 0)

      return scrollColumns
    },

    createChildren(scrollColumns, children, columnIndex) {
      if (isArray(children) && children.length) {
        const scrollColumn = {
          id: sid++,
          prevY: undefined,
          momentumPrevY: undefined,
          touching: false,
          translate: this.center,
          index: 0,
          columnIndex,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: children.map((cascadeColumn) => cascadeColumn[this.textKey]),
          },
          columns: children,
          scrollEl: null,
          scrolling: false,
        }

        scrollColumns.push(scrollColumn)
        this.createChildren(scrollColumns, scrollColumn.columns[scrollColumn.index].children, columnIndex + 1)
      }
    },

    rebuildChildren(scrollColumn) {
      this.scrollColumns.splice(this.scrollColumns.indexOf(scrollColumn) + 1)
      this.createChildren(
        this.scrollColumns,
        scrollColumn.columns[scrollColumn.index].children,
        scrollColumn.columnIndex + 1
      )
    },

    change(scrollColumn) {
      const { cascade } = this
      cascade && this.rebuildChildren(scrollColumn)

      const hasScrolling = this.scrollColumns.some((scrollColumn) => scrollColumn.scrolling)
      if (hasScrolling) {
        return
      }

      const { texts, indexes } = this.getPicked()

      const samePicked = indexes.every((index, idx) => index === this.prevIndexes[idx])
      if (samePicked) {
        return
      }

      this.prevIndexes = [...indexes]
      this.$emit('change', texts, indexes)
    },

    stopScroll() {
      if (this.cascade) {
        const currentScrollColumn = this.scrollColumns.find((scrollColumn) => scrollColumn.scrolling)
        if (currentScrollColumn) {
          currentScrollColumn.translate = getTranslate(currentScrollColumn.scrollEl)
          currentScrollColumn.index = this.getIndex(currentScrollColumn)
          this.scrollTo(currentScrollColumn, currentScrollColumn.index, 0, true)
          currentScrollColumn.scrolling = false
          this.rebuildChildren(currentScrollColumn)
        }
      } else {
        this.scrollColumns.forEach((scrollColumn) => {
          scrollColumn.translate = getTranslate(scrollColumn.scrollEl)
          scrollColumn.index = this.getIndex(scrollColumn)
          this.scrollTo(scrollColumn, scrollColumn.index, 0)
        })
      }
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../button/button';
@import '../popup/popup';
@import './picker';
</style>
