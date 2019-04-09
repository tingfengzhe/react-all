const path = require('path');

module.exports = {
    entry:  __dirname + '/src/app.js',
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1',
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    }
};