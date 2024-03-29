module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        // @代表src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
