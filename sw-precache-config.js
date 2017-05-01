module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  runtimeCaching: [{
    urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
    handler: "cacheFirst"
  }],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js'
};
