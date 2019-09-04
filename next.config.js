module.exports = {
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return cfg;
  },
};
