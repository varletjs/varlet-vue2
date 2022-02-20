import Progress from '../../components/progress'
import config from '@config'
import { getBrowserThemes, watchThemes } from '../../utils'
import { get } from 'lodash-es'

export default {
  name: 'NProgress',
  data() {
    return {
      trackColor: this.getTrackColor(),
      color: this.getColor(),
      value: 0,
      currentThemes: '',
      timer: null
    }
  },
  methods: {
    start() {
      this.value = 0
      window.setTimeout(() => (this.color = this.getColor(this.currentThemes)), 200)
      this.changeValue()
    },
    end() {
      this.value = 100
      setTimeout(() => (this.color = this.getTrackColor(this.currentThemes)), 300)
      window.clearTimeout(this.timer)
    },
    getColor(themes) {
      const themesKey = get(config, 'themesKey')

      return get(config, `${themes ?? getBrowserThemes(themesKey)}.color-progress`)
    },
    getTrackColor(themes) {
      const themesKey = get(config, 'themesKey')

      return get(config, `${themes ?? getBrowserThemes(themesKey)}.color-progress-track`)
    },
    changeValue() {
      this.timer = window.setTimeout(() => {
        if (this.value >= 95) return
        let num = Math.random()

        if (this.value < 70) num = Math.round(5 * Math.random())

        this.value += num
        this.changeValue()
      }, 200)
    }
  },
  created() {
    watchThemes(this, (themes) => {
      this.currentThemes = themes
      this.trackColor = this.getTrackColor(themes)
      this.color = this.value === 100 ? this.getTrackColor(themes) : this.getColor(themes)
    }, false)
  },
  render() {
    return (
      <Progress
        style={{
          position: 'fixed',
          width: '100%',
          left: 0,
          top: 0,
          zIndex: 10086
        }}
        lineWidth={3}
        trackColor={this.trackColor}
        color={this.color}
        value={this.value}
      />
    )
  }
}
