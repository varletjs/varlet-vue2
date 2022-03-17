<template>
  <div class="var-picker-header">
    <var-button round text style="filter: opacity(0.54)" :disabled="disabled.left" @click="checkDate('prev')">
      <var-icon name="chevron-left" />
    </var-button>
    <div class="var-picker-header__value" @click="$emit('check-panel')">
      <transition :name="`var-date-picker${reverse ? '-reverse' : ''}-translatex`">
        <div :key="showDate">{{ showDate }}</div>
      </transition>
    </div>
    <var-button round text style="filter: opacity(0.54)" :disabled="disabled.right" @click="checkDate('next')">
      <var-icon name="chevron-right" />
    </var-button>
  </div>
</template>

<script>
import VarButton from '../../button'
import VarIcon from '../../icon'
import { defineComponent } from '../../utils/create'
import { toNumber } from '../../utils/shared'
import { pack } from '../../locale'

export default defineComponent({
  name: 'PanelHeader',

  components: {
    VarButton,
    VarIcon,
  },

  props: {
    date: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: 'date',
    },
    disabled: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    reverse: false,
    forwardOrBackNum: 0,
  }),

  computed: {
    pack() {
      return pack.value
    },

    showDate() {
      const {
        date: { previewMonth, previewYear },
        type,
        forwardOrBackNum,
        pack,
      } = this

      if (type === 'month') return toNumber(previewYear) + forwardOrBackNum

      const monthName = pack.datePickerMonthDict?.[previewMonth.index].name
      return pack.lang === 'zh-CN' ? `${previewYear} ${monthName}` : `${monthName} ${previewYear}`
    },
  },

  watch: {
    date() {
      this.forwardOrBackNum = 0
    },
  },

  methods: {
    checkDate(checkType) {
      if ((checkType === 'prev' && this.disabled.left) || (checkType === 'next' && this.disabled.right)) return

      this.$emit('check-date', checkType)
      this.reverse = checkType === 'prev'
      this.forwardOrBackNum += checkType === 'prev' ? -1 : 1
    },
  },
})
</script>
