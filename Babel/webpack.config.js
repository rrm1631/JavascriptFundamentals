const path = require('path');

module.exports = {
    entry : './src/index.js', //where to get src code
    output : { //where to save output
        path : path.resolve(__dirname, 'dist/assets'),
        filename : 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/, //looks for file that end with .js 
            exclude: /node_modules/, //excludes files from the node_modules
            use: {
                loader: 'babel-loader',
                options: {
                    presets : ["@babel/preset-env"]
                }
            }
        }]
    }

};