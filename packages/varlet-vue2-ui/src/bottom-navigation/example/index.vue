<template>
  <div class="bottom-navigation-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-bottom-navigation :active.sync="basicUsage">
      <var-bottom-navigation-item :label="pack.label" icon="home" />
      <var-bottom-navigation-item :label="pack.label" icon="magnify" />
      <var-bottom-navigation-item :label="pack.label" icon="heart" />
      <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>{{ pack.matchByName }}</app-type>
    <var-bottom-navigation :active.sync="matchByName">
      <var-bottom-navigation-item name="home" :label="pack.label" icon="home" />
      <var-bottom-navigation-item name="search" :label="pack.label" icon="magnify" />
      <var-bottom-navigation-item name="heart" :label="pack.label" icon="heart" />
      <var-bottom-navigation-item name="user" :label="pack.label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>{{ pack.showBadge }}</app-type>
    <var-bottom-navigation :active.sync="showBadge">
      <var-bottom-navigation-item :label="pack.label" icon="home" />
      <var-bottom-navigation-item :label="pack.label" icon="magnify" badge />
      <var-bottom-navigation-item :label="pack.label" icon="heart" :badge="badgeProps" />
      <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>{{ pack.customColor }}</app-type>
    <var-bottom-navigation active-color="#ba68c8" :active.sync="customColor">
      <var-bottom-navigation-item :label="pack.label" icon="home" />
      <var-bottom-navigation-item :label="pack.label" icon="magnify" />
      <var-bottom-navigation-item :label="pack.label" icon="heart" />
      <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>{{ pack.changeEvent }}</app-type>
    <var-bottom-navigation :active.sync="changeEvent" @change="handleChange">
      <var-bottom-navigation-item :label="pack.label" icon="home" />
      <var-bottom-navigation-item :label="pack.label" icon="magnify" />
      <var-bottom-navigation-item :label="pack.label" icon="heart" />
      <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>{{ pack.clickEvent }}</app-type>
    <var-bottom-navigation :active.sync="clickEvent">
      <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="home" />
      <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="magnify" />
      <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="heart" />
      <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="account-circle" />
    </var-bottom-navigation>

    <app-type>{{ pack.fab }}</app-type>
    <var-bottom-navigation :active.sync="fab" @fab-click="isEven = !isEven" style="margin-top: 10px">
      <template v-slot:fab>
        <var-icon name="heart" />
      </template>
      <var-bottom-navigation-item :label="pack.label" icon="home" />
      <var-bottom-navigation-item :label="pack.label" icon="magnify" />
      <var-bottom-navigation-item :label="pack.label" icon="heart" />
      <var-bottom-navigation-item :label="pack.label" icon="bell" />
      <var-bottom-navigation-item v-if="!isEven" :label="pack.label" icon="account-circle" />
    </var-bottom-navigation>
  </div>
</template>

<script>
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarBottomNavigation from '..'
import VarBottomNavigationItem from '../../bottom-navigation-item'
import VarIcon from '../../icon'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'BottomNavigationExample',

  components: {
    VarBottomNavigation,
    VarBottomNavigationItem,
    VarIcon,
    AppType,
  },

  data: () => ({
    basicUsage: 0,
    matchByName: 'home',
    showBadge: 0,
    badgeProps: {
      type: 'primary',
      value: '66',
    },
    customColor: 0,
    changeEvent: 0,
    clickEvent: 0,
    fab: 0,
    isEven: true,
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
    handleChange(active) {
      Snackbar.info(`changed to ${active}`)
    },
    handleClick(active) {
      Snackbar.success(`clicked ${active}`)
    },
  },
}
</script>
