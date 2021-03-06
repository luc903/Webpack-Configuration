const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
   mode: 'development',
   devtool: 'cheap-source-map',
   resolve: {
    alias: {
        vue: 'vue/dist/vue.js'
    }
},
 });
