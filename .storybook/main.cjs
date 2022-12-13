const { resolve } = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: false,
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: import.meta.VITE_GH_PAGES_URL || config.base,
      resolve: {
        alias: [
          { find: '@', replacement: resolve(__dirname, '../src') },
          { find: 'src', replacement: resolve(__dirname, '../src') },
        ],
      },
    });
  },
};
