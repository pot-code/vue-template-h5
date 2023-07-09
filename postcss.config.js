module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: ['ignore', 'hairline'],
      minPixelValue: 1,
    },
  },
}
