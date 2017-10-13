const pxtorem = require('postcss-pxtorem');
const path = require('path');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/icons'),  // 业务代码本地私有 svg 存放目录
];

export default {
  "entry": "src/pages/**.js",
  "disableCSSModules": false,
  "autoprefixer": null,
  "proxy": null,
  "multipage": true,
  "svgSpriteLoaderDirs": svgSpriteDirs,
  "extraBabelPlugins": [
    "transform-runtime",
    ["import", { "libraryName": "antd-mobile", "style": true }]
  ],
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  }
}
