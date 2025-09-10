
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
    'index.csr.html': {size: 23481, hash: '28a67ff5608ff9a0911cad5ce521107944682faa999596223f8b3ee0858f9fa5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17100, hash: '040e0bd03c656df7ec1638a41385397d9c63a592b2f34e77ca0dbf2c0e35e887', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30930, hash: '6ccfd38ac532c43aecf0c03a7f637dffc4d39cb4ec38a477089e2401b7628ae9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'edit-product/index.html': {size: 31318, hash: '2d08829b0acd14cb1f9835f218f98ce14d719bc8f331cc04edc37747ad428d8c', text: () => import('./assets-chunks/edit-product_index_html.mjs').then(m => m.default)},
    'index.html': {size: 33285, hash: 'e39bb9d63f516c84284b0a27557067a0e3caab10f4d785eddd62b68633a8184a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'view-product/index.html': {size: 31178, hash: '617feca4a669acf6cad9eea1a730d2bf60e7e9588510b8d2fb04807a3bddfd36', text: () => import('./assets-chunks/view-product_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 33142, hash: '1a3e8502fb4a729dce3d9227dd784e1f03f392991d37566932ab50a34fb17cef', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
