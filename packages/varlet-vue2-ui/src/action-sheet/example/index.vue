<template>
  <div class="var-actionSheet-example">
    <app-type>{{ pack.functionCall }}</app-type>
    <var-button type="primary" block @click="createBasic">{{ pack.basicUsage }}</var-button>
    <var-button type="primary" block @click="modifyTitle">{{ pack.modifyTitle }}</var-button>
    <var-button type="primary" block @click="disableAction">{{ pack.disabled }}</var-button>
    <var-button type="primary" block @click="disableCloseOnClickAction">{{
      pack.disableCloseOnClickAction
    }}</var-button>
    <var-button type="primary" block @click="customActionStyles">{{ pack.customActionStyles }}</var-button>

    <app-type>{{ pack.componentCall }}</app-type>
    <var-button type="warning" block @click="show = true">{{ pack.basicUsage }}</var-button>
    <var-action-sheet :actions="actions" :show.sync="show" @select="handleSelect" />

    <var-button type="warning" block @click="show1 = true">{{ pack.modifyTitle }}</var-button>
    <var-action-sheet :title="pack.customTitle" :actions="actions" :show.sync="show1" @select="handleSelect" />

    <var-button type="warning" block @click="show2 = true">{{ pack.disabled }}</var-button>
    <var-action-sheet :actions="disabledActions" :show.sync="show2" @select="handleSelect" />

    <var-button type="warning" block @click="show3 = true">{{ pack.disableCloseOnClickAction }}</var-button>
    <var-action-sheet :close-on-click-action="false" :actions="actions" :show.sync="show3" @select="handleSelect" />

    <var-button type="warning" block @click="show4 = true">{{ pack.customActionStyles }}</var-button>
    <var-action-sheet :actions="customStyleActions" :show.sync="show4" @select="handleSelect" />
  </div>
</template>

<script>
import ActionSheet from '../index'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarButton from '../../button'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

const rawActions = [
  {
    name: 'Item 01',
    icon: 'account-circle',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
  },
]
const rawDisabledActions = [
  {
    name: 'Item 01',
    icon: 'account-circle',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
    disabled: true,
  },
]
const rawCustomStyleActions = [
  {
    name: 'Item 01',
    icon: 'account-circle',
    color: '#00c48f',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
    color: '#ff9800',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
    color: '#00afef',
  },
]

export default {
  name: 'ActionSheetExample',

  components: {
    VarActionSheet: ActionSheet.Component,
    VarButton,
    AppType,
  },

  data: () => ({
    actions: rawActions,
    disabledActions: rawDisabledActions,
    customStyleActions: rawCustomStyleActions,
    show: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
  }),

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)
  },

  methods: {
    async createBasic() {
      const action = await ActionSheet({ actions: rawActions })

      action !== 'close' && Snackbar(`${this.pack.yourSelected}${action.name}`)
    },

    async modifyTitle() {
      const action = await ActionSheet({
        actions: rawActions,
        title: this.pack.customTitle,
      })

      action !== 'close' && Snackbar(`${this.pack.yourSelected}${action.name}`)
    },

    async disableAction() {
      const action = await ActionSheet({
        actions: rawDisabledActions,
      })

      action !== 'close' && Snackbar(`${this.pack.yourSelected}${action.name}`)
    },

    async customActionStyles() {
      const action = await ActionSheet({
        actions: rawCustomStyleActions,
      })

      action !== 'close' && Snackbar(`${this.pack.yourSelected}${action.name}`)
    },

    disableCloseOnClickAction() {
      ActionSheet({
        actions: [
          {
            name: 'Item 01',
            icon: 'account-circle',
          },
          {
            name: 'Item 02',
            icon: 'notebook',
          },
          {
            name: 'Item 03',
            icon: 'wifi',
          },
        ],
        closeOnClickAction: false,
        onSelect: (action) => Snackbar(`${this.pack.yourSelected}${action.name}`),
      })
    },

    handleSelect(action) {
      Snackbar(`${this.pack.yourSelected}${action.name}`)
    },
  },
}
</script>

<style scoped lang="less">
.var-actionSheet-example {
  .var-button {
    margin-top: 10px;
  }
}
</style>
