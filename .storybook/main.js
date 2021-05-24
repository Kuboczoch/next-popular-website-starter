module.exports = {
  stories: [
    '../stories/**/*.stories.tsx',
    '../stories/**/*.stories.ts',
    '../stories/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-essentials',
    'storybook-addon-emotion-theme/dist/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ]
}
