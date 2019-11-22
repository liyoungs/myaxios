module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/my-project/'
  //   : './'
  publicPath: "./", //相对路径 ('./')这样打出来的包可以被部署在任意路径
  // // 公共代码抽离
  // configureWebpack: () => ({
  //   optimization: {
  //     splitChunks: {
  //       cacheGroups: {
  //         vendor: {
  //           chunks: "all",
  //           test: /node_modules/,
  //           name: "vendor",
  //           minChunks: 1,
  //           maxInitialRequests: 5,
  //           minSize: 0,
  //           priority: 100,
  //         },
  //         common: {
  //           chunks: "all",
  //           test: /[\\/]src[\\/]js[\\/]/,
  //           name: "common",
  //           minChunks: 2,
  //           maxInitialRequests: 5,
  //           minSize: 0,
  //           priority: 60
  //         },
  //         styles: {
  //           name: 'styles',
  //           test: /\.(sa|sc|c)ss$/,
  //           chunks: 'all',
  //           enforce: true,
  //         },
  //         runtimeChunk: {
  //           name: 'manifest'
  //         }
  //       }
  //     }
  //   }
  // }),
  // // CSS分离
  // css: {
  //   // 是否使用css分离插件 ExtractTextPlugin
  //   extract: true,
  //   // 开启 CSS source maps?
  //   sourceMap: false,
  //   // css预设器配置项
  //   loaderOptions: {},
  //   // 启用 CSS modules for all css / pre-processor files.
  //   requireModuleExtension: false
  // },
  // productionSourceMap: false // 去除map文件
  outputDir: "docs"
};
