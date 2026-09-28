import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss(), {
      name: 'academic-font-preload',
      transformIndexHtml(html) {
        if (mode !== 'academic') return html;
        return html.replace(/    <link rel="preload"[^\n]+\n/g, '')
          .replace('</head>', '  <link rel="preload" href="/fonts/roboto-latin.woff2" as="font" type="font/woff2" crossorigin>\n  </head>');
      },
    }],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
