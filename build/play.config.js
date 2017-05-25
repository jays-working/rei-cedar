
module.exports = {
  entry: {
    app: './play/app.js',
    preview: './play/preview.js',
  },
  dist: 'dist-play',
  webpack: {
    output: {
      publicPath: '',
    },
    module: {
      rules: [
        {
          test: /\.postcss$/,
          use: [
            'style-loader',
            'css-loader?importLoaders=1',
            'postcss-loader',
          ],
        },
        {
          test: /\.md$/,
          use: [
            'html-loader',
            'markdown-loader',
          ],
        },
      ],
    },
  },
  port: 5000,
  // compile Vue template
  templateCompiler: true,
  hmrEntry: ['preview'],
  // no code split for 3rd party libraries
  vendor: false,
  copy: false,
  copy: true,
  html: [{
    chunks: ['app'],
    filename: 'index.html',
  }, {
    chunks: ['preview'],
    filename: 'preview.html',
  }],
};
