
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
    'contact/index.html': {size: 30930, hash: 'eaefc40853503bcd7e15c9979c990bfb9a37bf9dae8436e5f289650572a5f353', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'edit-product/index.html': {size: 31318, hash: 'ff31a89d5244c9022785e5489536c83f9406be063903bb0ae639ec3af0fd6dff', text: () => import('./assets-chunks/edit-product_index_html.mjs').then(m => m.default)},
    'view-product/index.html': {size: 31178, hash: 'be3f837b581abcf3d1587dab863a8cc76489905e491b55d47c25e883157515a0', text: () => import('./assets-chunks/view-product_index_html.mjs').then(m => m.default)},
    'index.html': {size: 33285, hash: '5617a160a0a42ade5808d6c929785f1ba80241f74209f9f84aebdaeb4c5a0cca', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 33142, hash: 'a8330ef9b5c55ab5b027bab5604f7eaa0eeece26313262d222c21f85bd4a136b', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
