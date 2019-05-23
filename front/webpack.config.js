const webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const  MiniCssExtractPlugin  =  require ( 'mini-css-extract-plugin' );
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       // you can specify a publicPath here
        //       // by default it uses publicPath in webpackOptions.output
        //       publicPath: '../',
        //       hmr: process.env.NODE_ENV === 'development',
        //     },
        //   },
        //   'css-loader',
        // ],
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: "css-loader"
        // })
        use: ['style-loader', 'css-loader'],
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        // loader: 'css-loader',
        // options: {
        //   modules: true,
        // },
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    // path: __dirname + '/dist',
    path: __dirname + '/../src/main/webapp',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
     // new ExtractTextPlugin("bundle.css"),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: 'bundle.css',
    //
    // }),
  ],

  devServer: {
    historyApiFallback: true,
    // contentBase: './dist',
    contentBase:'../src/main/webapp',
    hot: true
  }
};
