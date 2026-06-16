import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://melhorfone.vlog.br',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
