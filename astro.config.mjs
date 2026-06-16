import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 🔧 TROQUE pelo seu domínio quando tiver:
  site: 'https://melhorfone.vlog.br',

  integrations: [
    sitemap(),
  ],

  // Compressão de HTML para melhor performance
  compressHTML: true,

  build: {
    // Garante URLs limpas sem .html
    format: 'directory',
  },
});
