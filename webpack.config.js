const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                "presets": [
                  ["@babel/preset-env", {
                    "targets": {
                      "safari": "10",
                      "ie":"10",
                      "chrome":"65"
                      
                    },
                    "useBuiltIns": "usage"
                  }]
                ],
                plugins: [
                  '@babel/plugin-proposal-class-properties'
                ]
              }
            }
          }
        ]
      },
      mode: 'development'
    };