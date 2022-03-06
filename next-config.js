// const withOffline = require('next-offline') //  eslint-disable-line

// const nextConfig = {
//   target: 'server',
//   typescript: {
//     ignoreDevErrors: true
//   },
//   transformManifest: (manifest) => ['/'].concat(manifest),
//   generateInDevMode: false,
//   workboxOpts: {
//     swDest: 'public/service-worker.js',
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/,
//         handler: 'NetworkFirst',
//         options: {
//           cacheName: 'https-calls',
//           networkTimeoutSeconds: 15,
//           expiration: {
//             maxEntries: 150,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//           },
//           cacheableResponse: {
//             statuses: [0, 200]
//           }
//         }
//       }
//     ]
//   }
// }

// module.exports = withOffline(nextConfig)

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
