import CMS from 'netlify-cms'; // eslint-disable-line import/no-extraneous-dependencies

import SobrePagePreview from './preview-templates/SobrePagePreview';
import ClientesPagePreview from './preview-templates/ClientesPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('sobre', SobrePagePreview);
CMS.registerPreviewTemplate('clientes', ClientesPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('index', IndexPagePreview);
