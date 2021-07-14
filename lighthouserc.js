// If you want to configure Lighthouse check on your own
// please see the docs: https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md

module.exports = {
  ci: {
    collect: {
      startServerReadyPattern: "ready on",
      numberOfRuns: 3,
      startServerCommand: 'yarn start',
      url : ['http://localhost:3000/']
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }]
      },
    },
  },
};
