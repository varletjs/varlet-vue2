import type { VueConstructor } from 'vue'
import Card from './Card.vue'

Card.install = function (app: VueConstructor) {
  app.component(Card.name, Card)
}

export const _CardComponent = Card

export default Card
