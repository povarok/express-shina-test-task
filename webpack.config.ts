import * as path from 'path'
import * as webpack from 'webpack'
import 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
require('dotenv').config({ path: './.env' })

const appDirectory = path.resolve(__dirname, '')
const packageVersion = require('./package.json').version
const isDevelopment = process.env.NODE_ENV !== 'production'

const tsLoaderConfiguration = {
  test: /\.(tsx?|jsx?)$/,
  include: [path.resolve(appDirectory, 'src')],
  exclude: /node_modules/,
  loader: 'babel-loader',
}

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg|mp3|ogg|eot|ttf|woff2?)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[path][name]-[hash:8].[ext]',
      esModule: false,
    },
  },
}

const cssLoaderConfiguration = {
  test: /\.css$/i,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 0,
        modules: {
          localIdentName: '[name]__[local]___[hash:base64:5]',
          auto: (resourcePath: string) =>
            !resourcePath.endsWith('.global.css') && !resourcePath.includes('node_modules'),
        },
      },
    },
  ],
}

const sassLoaderConfiguration = {
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: '[name]__[local]___[hash:base64:5]',
          auto: (resourcePath: string) =>
            !resourcePath.endsWith('.global.scss') && !resourcePath.includes('node_modules'),
        },
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
}

const fileLoaderConfiguration = {
  test: /\.webmanifest$/,
  exclude: /node_modules/,
  use: 'file-loader',
}

const config: webpack.Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  optimization: {
    minimize: true,
  },
  devServer: {
    host: process.env.WEBPACK_DEV_SERVER_HOST ?? '0.0.0.0',
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'eval-source-map',
  entry: [path.resolve(appDirectory, 'src/index.js')],
  output: {
    clean: true,
    filename: '[name].bundle-[fullhash:16].js',
    path: path.resolve(appDirectory, 'build'),
    publicPath: '',
  },
  module: {
    rules: [
      tsLoaderConfiguration,
      imageLoaderConfiguration,
      cssLoaderConfiguration,
      sassLoaderConfiguration,
      fileLoaderConfiguration,
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './web/index.html'),
    }) as unknown as webpack.WebpackPluginInstance,
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.EnvironmentPlugin({
      API_URL: process.env.API_URL,
      NODE_ENV: process.env.NODE_ENV,
      VERSION: packageVersion,
    }),
  ],
}

export default config
