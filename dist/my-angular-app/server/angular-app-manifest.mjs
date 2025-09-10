
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
    'contact/index.html': {size: 30931, hash: 'fda478af97ab0e2664ca9c7f0d3527bd79f9b04d26febb350928fdbafefa8b05', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'edit-product/index.html': {size: 31319, hash: 'f848685da0656cd93292e8c7a9ddae572649f1a0ea370a0abb92e36caa0ada72', text: () => import('./assets-chunks/edit-product_index_html.mjs').then(m => m.default)},
    'index.html': {size: 33286, hash: 'f4d018fdef64e8ebf87ea218fff25c334a0c52b1faeee04012db60fb1b2a7e7e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'view-product/index.html': {size: 31179, hash: 'd31a5a450bd1f250f8c156b19d5389a61579cbbdede251529f445f6424ebfdb4', text: () => import('./assets-chunks/view-product_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 33143, hash: 'e9dfa80afc4891afdab56abbaafa7fbacc83f9463b81e5b1ebc3113eab504fcf', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
