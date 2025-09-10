
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/<products-dashboard>/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/%3Cproducts-dashboard%3E"
  },
  {
    "renderMode": 2,
    "route": "/%3Cproducts-dashboard%3E/contact"
  },
  {
    "renderMode": 2,
    "route": "/%3Cproducts-dashboard%3E/products"
  },
  {
    "renderMode": 2,
    "route": "/%3Cproducts-dashboard%3E/view-product"
  },
  {
    "renderMode": 2,
    "route": "/%3Cproducts-dashboard%3E/edit-product"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23483, hash: '850b327b38232aca5401b349c0c858a3b87e654e1daa23e494e648776085899b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17102, hash: '3d2d4c29f8fcaeba874b40caf1d098d3dc718e34a54b6a4aab6b5e1cb5b6fce1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
