const path = require('path');
const fs = require('fs');

const pagesDir = './src/views/pages';
const filenames = fs.readdirSync(pagesDir);

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV == 'production';
const isDev = !isProd;
console.log(process.env.NODE_ENV)

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: process.env.NODE_ENV || 'development',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/js/[name].js',
    assetModuleFilename: (pathData) => {
      const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
      return `${filepath}/[name][ext][query]`;
    },
    clean: true,
  },
  target: 'web',
  devtool: isDev ? 'source-map' : false,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8090,
    hot: false,
    liveReload: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    ...filenames.map((file) => new HTMLWebpackPlugin({
      template: path.resolve(__dirname, pagesDir, file),
      filename: `${path.parse(file).name}.html`,
      minify: false,
    })),
    new MiniCssExtractPlugin(),
    new SpriteLoaderPlugin(),
    new EslintWebpackPlugin({
      extensions: ['js', 'ts'],
      exclude: 'node_modules , tailwind.config.js, postcss.config.js, webpack.config.js',
    })

  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {
              searchPaths: ['src/views/layouts', 'src/views/partials', 'src/views/utils', 'src/views/components'],
              assetsPaths: [
                'src/assets',
              ]
            }
          }
        ]
      },

      {
        test: /\.(png|jpe?g|svg|gif|ico|mp4)$/,
        type: 'asset/resource',
      },



      {
        test: /\.svg$/i,
        include: /.*_sprite\.svg/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'sprite.svg',
              publicPath: '/assets/',
              runtimeCompat: true,
            },
          },
          {
            loader: 'svgo-loader',
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      },


      {
        test: /\.css$/i,

        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ]
  }

}
