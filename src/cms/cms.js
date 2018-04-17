import CMS from 'netlify-cms'; // eslint-disable-line import/no-extraneous-dependencies

import SobrePagePreview from './preview-templates/SobrePagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PortfolioPagePreview from './preview-templates/PortfolioPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('sobre', SobrePagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('portfolio', PortfolioPagePreview);
CMS.registerPreviewTemplate('index', IndexPagePreview);
