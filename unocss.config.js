import {
  defineConfig,
  presetAttributify,
  // presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

import UnocssIcons from '@unocss/preset-icons';
import icons from './src/assets/js/icons.js';

const safeIcons = [];
icons.map((icon) => {
  safeIcons.push(...icon.value);
});

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'w:',
      prefixedOnly: true, // <--
    }),
    UnocssIcons({
      // cdn: 'https://esm.sh/', // 存在网络问题可以尝试国内其他cdn
      collections: {
        'icon-park-outline': () => import('@iconify-json/icon-park-outline').then((i) => i.icons),
        'icon-park-solid': () => import('@iconify-json/icon-park-solid').then((i) => i.icons),
      },
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    ...safeIcons.map((item) => `i-icon-park-solid-${item}`),
    ...safeIcons.map((item) => `i-icon-park-outline-${item}`),
    'i-icon-park-outline-home',
    'i-icon-park-outline-page',
    'i-icon-park-outline-filter',
    'i-icon-park-outline-waterfalls-v',
  ],
});
