const Bundler = require('parcel-bundler')

module.exports = function(options) {
    const bundler = new Bundler('./tests/index.html', {
        outDir: './dist',
        outFile: 'index.html'
    })
    bundler.addAssetType('riot', require.resolve('./asset')) 
    bundler.serve()
}