module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustURLsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js'
}