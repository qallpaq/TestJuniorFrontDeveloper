const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const envFile = require('../env/dev.json');

const common = require('./common');

const DIR = path.resolve(__dirname, '../../..');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    static: {
      directory: path.join(DIR, './public/'),
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    open: true,
    hot: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CONFIG: JSON.stringify(envFile),
      },
    }),
  ],
});
