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
    }
};

