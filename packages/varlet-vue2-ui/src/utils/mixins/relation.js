function flatVNodes(subTree) {
  const vNodes = []

  function flat(subTree) {
    subTree.forEach((child) => {
      vNodes.push(child)

      if (child.componentInstance) {
        flat(child.componentInstance.$children.map((item) => item.$vnode))
      }

      if (child.children) {
        flat(child.children)
      }
    })
  }

  flat(subTree)
  return vNodes
}

export function sortChildren(children, parent) {
  const { componentOptions } = parent.$vnode
  if (!componentOptions || !componentOptions.children) {
    return
  }

  const vNodes = flatVNodes(componentOptions.children)
  children.sort((a, b) => vNodes.indexOf(a.$vnode) - vNodes.indexOf(b.$vnode))
}

export function createParentMixin(parent, options = {}) {
  const { childrenKey = 'children' } = options

  return {
    provide() {
      return {
        [parent]: this,
      }
    },

    data() {
      return {
        [childrenKey]: [],
      }
    },
  }
}

export function createChildrenMixin(parent, options = {}) {
  const { indexKey = 'index', childrenKey = 'children', parentKey = 'parent' } = options

  return {
    inject: {
      [parent]: {
        default: null,
      },
    },

    computed: {
      [parentKey]() {
        return this[parent]
      },

      [indexKey]() {
        this[`bind${parentKey}${childrenKey}Relation`]()

        if (this[parentKey]) {
          return this[parentKey][childrenKey].indexOf(this)
        }

        return null
      },
    },

    mounted() {
      this[`bind${parentKey}${childrenKey}Relation`]()
    },

    beforeDestroy() {
      if (this[parentKey]) {
        this[parentKey][childrenKey] = this[parentKey][childrenKey].filter((item) => item !== this)
      }
    },

    methods: {
      [`bind${parentKey}${childrenKey}Relation`]() {
        if (!this[parentKey] || this[parentKey][childrenKey].includes(this)) {
          return
        }

        const children = [...this[parentKey][childrenKey], this]

        sortChildren(children, this[parentKey])

        this[parentKey][childrenKey] = children
      },
    },
  }
}
