// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://puls-fitness-landing.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  },

  // Шрифты скачиваются при сборке и раздаются с нашего сайта -
  // браузеру не нужно ждать Google Fonts, страница появляется быстрее
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: [400, 500, 600, 700],
      subsets: ['cyrillic', 'latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Unbounded',
      cssVariable: '--font-unbounded',
      weights: [600, 700],
      subsets: ['cyrillic', 'latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
