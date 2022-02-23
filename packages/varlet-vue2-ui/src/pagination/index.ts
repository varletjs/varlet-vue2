import type { VueConstructor } from 'vue'
import Pagination from './Pagination.vue'

Pagination.install = function (app: VueConstructor) {
  app.component(Pagination.name, Pagination)
}

export const _PaginationComponent = Pagination

export default Pagination
