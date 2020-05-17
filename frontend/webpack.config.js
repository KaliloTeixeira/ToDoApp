module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    query: {
        presets: ['es2015', 'react']
    }
}