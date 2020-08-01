const Bundler = require('parcel-bundler')

module.exports = function(options) {
    const bundler = new Bundler('./src/index.html', {
        outDir: './dist',
        outFile: 'index.html'
    })
    require.resolve('./languages/rust/preprocessor.js')
    bundler.addAssetType('riot', require.resolve('./asset')) 
    bundler.serve()
}