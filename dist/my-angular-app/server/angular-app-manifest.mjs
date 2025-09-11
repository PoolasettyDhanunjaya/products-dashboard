
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/products-dashboard/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/products-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/products-dashboard/contact"
  },
  {
    "renderMode": 2,
    "route": "/products-dashboard/products"
  },
  {
    "renderMode": 2,
    "route": "/products-dashboard/view-product"
  },
  {
    "renderMode": 2,
    "route": "/products-dashboard/edit-product"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23481, hash: '26b1fad5ad81c04ac2a7929fa53dd4e7242bb3624981ebb72145cf7dddf8e124', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17100, hash: '550d807819ccadbc3fe90a068a47a03cfcd2b49c6685fec33304c913c45430ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30930, hash: 'f8d52ea81bd9b3361f33b208eeff92ce647ff3bb42c691a89248466d9a28e2e3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'edit-product/index.html': {size: 31318, hash: '2c5ec574a2d3777e9e45d9bad1c0c4616c2b3fb7d38dcebf91859e71ce841c86', text: () => import('./assets-chunks/edit-product_index_html.mjs').then(m => m.default)},
    'index.html': {size: 33285, hash: '4aa9af70c7d181b1e4f6a073d8a0131d359129288157a7395ad69d4c56b7c51a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'view-product/index.html': {size: 31178, hash: 'cc37404b26be8dc75cf1894b1656efb9aec641ec0774a9c11fdf3eb545f6a4fb', text: () => import('./assets-chunks/view-product_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 34120, hash: '891afbb178cba1b48c864f6d3a22406f88e580d444803b6f6076b37f96b2a04c', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
