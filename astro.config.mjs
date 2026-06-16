import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 🔧 TROQUE pelo seu domínio quando tiver:
  site: 'https://melhorfone.vlog.br',

  integrations: [
    sitemap({
      // O sitemap.xml é gerado automaticamente em /sitemap-index.xml
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  // Compressão de HTML para melhor performance
  compressHTML: true,

  build: {
    // Garante URLs limpas sem .html
    format: 'directory',
  },
});
