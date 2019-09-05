module.exports = {
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    const fs = require('fs');
    const blogPostsFolder = './content/blogPosts';

    const blogList = fs
      .readdirSync(blogPostsFolder)
      .map(blogName => {
        const trimmedName = blogName.substring(0, blogName.length - 3);
        return {
          [`/posts/${trimmedName}`]: {
            page: '/posts',
            query: {
              slug: trimmedName,
            },
          },
        };
      })
      .reduce((acc, curr) => {
        console.log({ acc, curr });
        return { ...acc, ...curr };
      }, {});
    // .forEach(dups => console.log({ dups }));
    console.log({ blogList });
    console.log({ ...defaultPathMap, ...blogList });
    return {
      '/index': { page: '/index' },
      // '/posts/[slug]': { page: '/posts/[slug]' },
      '/': { page: '/' },
      ...blogList,
    };
  },
};
