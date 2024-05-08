// let CACHE_NAME = "codePwa";
// var urlCache = [
//   "/",
//   "/operationsDashboard",
//   "/transporterDashboard",
//   "/invoice-dashboard",
//   "/indent-planning",
//   "/Route-Optimization",
//   "/trips",
//   "/drivers",
//   "/roles",
//   "/user",
//   "/vehicles",
//   "/vehicle-type",
//   "/Reports",
//   "/indentReport-analysis",
//   "/statusIndent",
//   "/transporterIndent",
//   "/BillingIndex",
//   "/Billing/InvoiceList",
//   "/ControlTower",
//   "/tripBills",
//   "/static/js/bundle.js",
//   "/static/js/3.chunk.js",
//   "/static/js/main.chunk.js",
//   "/main.d997b7f24f0a17af70c9.hot-update.js",
//   "/static/js/0.chunk.js",
//   "/main.a7eac1870ede4d1f69c5.hot-update.js",
//   "fonts.googleapis.com",
//   "/static/media/logo-conagra1.a07838a6.png",
//   "/Cloudetrack-Thumbnail.png",
//   "/static/media/control%20tower%20icon.218d288c.svg",
//   "/static/media/materialdesignicons-webfont.7fb0e378.woff2",
//   "/static/media/inter-medium.f6cf0a0b.woff2",
//   "/static/media/fa-solid-900.b15db15f.woff2",
  
// ];

// this.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlCache);
//     })
//   );
// });
// this.addEventListener("fetch", (event) => {
//   if (!navigator.onLine) {
//     event.respondWith(
//       caches.match(event.request).then((response) => {
//         if (response) {
//           return response;
//         }
//         let fUrl = event.request.clone();
//         fetch(fUrl);
//       })
//     );
//   }
// });
