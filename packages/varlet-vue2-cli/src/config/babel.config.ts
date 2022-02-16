import type { ConfigAPI } from '@babel/core'

module.exports = (api?: ConfigAPI) => {
  if (api) {
    api.cache.never()
  }

  const isCommonJS = process.env.NODE_ENV === 'test' || process.env.BABEL_MODULE === 'commonjs'

  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          loose: true,
          modules: isCommonJS ? 'commonjs' : false,
        },
      ],
      [
        require.resolve('@vue/babel-preset-jsx'),
        {
          functional: false,
        },
      ],
      require.resolve('@babel/preset-typescript'),
      require('./babel.sfc.transform'),
    ],
    plugins: [require.resolve('babel-plugin-jsx-v-model'), require.resolve('babel-plugin-jsx-event-modifiers')],
  }
}
