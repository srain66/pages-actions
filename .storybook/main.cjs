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
    console.log(config);
    return mergeConfig(config, {
      site: {
        baseUrl: '/pages-actions',
      },
      resolve: {
        alias: [
          { find: '@', replacement: resolve(__dirname, '../src') },
          { find: 'src', replacement: resolve(__dirname, '../src') },
        ],
      },
    });
  },
};
