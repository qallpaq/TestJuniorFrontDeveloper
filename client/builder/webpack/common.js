const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIR = path.resolve(__dirname, '../../..');

module.exports = {
  entry: {
    main: [path.resolve(DIR, 'client/src/index.tsx')],
  },

  output: {
    path: path.join(DIR, 'build'),
    publicPath: '/',
    filename: '[name].[contenthash:8].js',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        include: [path.join(DIR, 'client/src'), path.join(DIR, '__tests__')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: Infinity,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(DIR, 'client/src/index.html'),
      minify: false,
    }),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      api: path.resolve(DIR, 'client/src/api'),
      components: path.resolve(DIR, 'client/src/components'),
      constants: path.resolve(DIR, 'client/src/constants'),
      hocs: path.resolve(DIR, 'client/src/hocs'),
      hoocs: path.resolve(DIR, 'client/src/hoocs'),
      pages: path.resolve(DIR, 'client/src/pages'),
      reducers: path.resolve(DIR, 'client/src/reducers'),
      routes: path.resolve(DIR, 'client/src/routes'),
      service: path.resolve(DIR, 'client/src/service'),
      store: path.resolve(DIR, 'client/src/store'),
      thunk: path.resolve(DIR, 'client/src/thunk'),
      types: path.resolve(DIR, 'client/src/types'),
      utils: path.resolve(DIR, 'client/src/utils'),
    },
  },
};
