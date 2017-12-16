const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: path.resolve(__dirname),
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Header: path.resolve(__dirname, 'app/components/Header.jsx'),
      Footer: path.resolve(__dirname, 'app/components/Footer.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      LoginBox: path.resolve(__dirname, 'app/components/LoginBox.jsx'),
      Listing: path.resolve(__dirname, 'app/components/Listing.jsx'),
      ListingReducer: path.resolve(__dirname, 'app/reducers/ListingReducer.jsx'),
      Product: path.resolve(__dirname, 'app/components/Product.jsx'),
      ProductDetailBox: path.resolve(__dirname, 'app/components/ProductDetailBox.jsx'),
      SearchBox: path.resolve(__dirname, 'app/components/SearchBox.jsx'),
      SupportBox: path.resolve(__dirname, 'app/components/SupportBox.jsx'),
      CartCanvas: path.resolve(__dirname, 'app/components/CartCanvas.jsx'),
      configureStore: path.resolve(__dirname, 'app/store/configureStore.jsx'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
