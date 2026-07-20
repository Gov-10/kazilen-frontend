/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/_next/precache.NEM1UspP0aSiVDArD3SIo.e64ca39ce6341fd7433a7095df7acf3a.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/categories/Electrician-service.webp",
    "revision": "cceb998fa4c8832ce7c932ddc8617de3"
  },
  {
    "url": "/icons/icon-128x128.png",
    "revision": "6f92773a849163aab4b32b90c71b85a6"
  },
  {
    "url": "/icons/icon-144x144.png",
    "revision": "02a7e6d67d616600a6191f1e290538a1"
  },
  {
    "url": "/icons/icon-152x152.png",
    "revision": "543513b2918d00577508b146c5e63e3c"
  },
  {
    "url": "/icons/icon-192x192.png",
    "revision": "cd78e60d33e8821a5f62e89070aa6829"
  },
  {
    "url": "/icons/icon-384x384.png",
    "revision": "1f77f1a081de719409df545f9a127472"
  },
  {
    "url": "/icons/icon-512x512.png",
    "revision": "0bd8eb5effaa19b4966fc85c120c04bb"
  },
  {
    "url": "/icons/icon-72x72.png",
    "revision": "c445f8b0e56c11d2554df5348cc46f07"
  },
  {
    "url": "/icons/icon-96x96.png",
    "revision": "883c02fcec27c64213e5504234c8d7d9"
  },
  {
    "url": "/manifest.json",
    "revision": "f7b516b21c035caaa6e684c227aaa4d3"
  },
  {
    "url": "/offline.html",
    "revision": "a932615e7d6905f80bab9f923e132b79"
  },
  {
    "url": "/subcategories/book-by-hour.webp",
    "revision": "1a9f246ba3add53a0bbd84873d450e26"
  },
  {
    "url": "/subcategories/consultation.webp",
    "revision": "50fdaade69b9150cae5db4cca678c2c8"
  },
  {
    "url": "/subcategories/cooler-repair.webp",
    "revision": "36b9bfa68bd1a48e823ea748dd1c7517"
  },
  {
    "url": "/subcategories/fan-installation.webp",
    "revision": "845c7a5127d0fe507489739dd5733249"
  },
  {
    "url": "/subcategories/fan-repair.webp",
    "revision": "8e9f4bcc71e745c84009da63f3a4264a"
  },
  {
    "url": "/subcategories/home-wiring.webp",
    "revision": "71b3527b045daaa248894cb30ba3aa3e"
  },
  {
    "url": "/subcategories/inverter-installation.webp",
    "revision": "9c9f7d12c87bca731f4d3308d5a24c9e"
  },
  {
    "url": "/subcategories/inverter-maintainance.webp",
    "revision": "c174d9724f16a860b7c58cd467f7ede0"
  },
  {
    "url": "/subcategories/light.webp",
    "revision": "551bb73a43a5b005930f9058d732da94"
  },
  {
    "url": "/subcategories/mcb.webp",
    "revision": "72109336c5e8607911ff20627257d205"
  },
  {
    "url": "/subcategories/motor-rewinding.webp",
    "revision": "e7623084f14d45811107811397896575"
  },
  {
    "url": "/subcategories/switch-box-installation.webp",
    "revision": "c0b9654d3343cbe854a6371e40db0bb1"
  },
  {
    "url": "/subcategories/switch-box-repair.webp",
    "revision": "261b5ee9d5d0ae58e4334c6bcaf15cbf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/\/(?:api|workers)\/.*$/i, new workbox.strategies.NetworkOnly({ plugins: [new workbox.backgroundSync.Plugin("api-post-syncQueue", { maxRetentionTime: 1440 })] }), 'POST');
workbox.routing.registerRoute(/^https?.*\.(?:js|css)$/, new workbox.strategies.CacheFirst({ "cacheName":"kazilen-static-assets-v1", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, maxAgeSeconds: 2592000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https?.*\.(?:png|jpg|jpeg|svg|gif|webp|avif|ico)$/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"kazilen-images-v1", plugins: [new workbox.expiration.Plugin({ maxEntries: 80, maxAgeSeconds: 2592000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https?.*\.(?:woff|woff2|ttf|eot)$/, new workbox.strategies.CacheFirst({ "cacheName":"kazilen-fonts-v1", plugins: [new workbox.expiration.Plugin({ maxEntries: 50, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https?:\/\/(?:api\.mapbox\.com|fonts\.googleapis\.com|fonts\.gstatic\.com).*/i, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"kazilen-external-apis-v1", plugins: [new workbox.expiration.Plugin({ maxEntries: 50, maxAgeSeconds: 604800, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"kazilen-pages-v1", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
