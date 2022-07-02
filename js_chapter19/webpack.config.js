const path = require('path'); // built in module in nodejs

module.exports = {
    entry: './src/index.js', // input point
    output: { 
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    watchOptions: {
        poll: true
    },
    devServer: {
        static: { 
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true
    },
    // allows you to run babel to convert to older version of js prior to building with webpack and minifying
    module: { 
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: { 
                loader: 'babel-loader',
                options: { 
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};

