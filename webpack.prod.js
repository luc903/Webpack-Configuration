const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.min.js'
        }
    },
});
