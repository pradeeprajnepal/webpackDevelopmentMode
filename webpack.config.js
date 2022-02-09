const path = require('path');
const HtmlWebpackPlugin= require ('html-webpack-plugin');


// js loader
module.exports = {
  mode: 'development',
  entry: {
    index:'./src/index.js',
    print:'./src/print.js',
  },
  devtool: 'inline-source-map', //1 
  devServer: {
    static: './dist', //webpack-dev-server
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
    publicPath:'/',
  },


};
