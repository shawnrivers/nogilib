module.exports = {
  ci: {
    collect: {
      staticDistDir: 'public',
      url: 'http://localhost/discography/index.html',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['warn', { minScore: 1 }],
        'categories:best-practices': ['warn', { minScore: 1 }],
        'categories:seo': ['warn', { minScore: 1 }],
      },
    },
  },
};
