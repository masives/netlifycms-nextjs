import React, { Component } from 'react';

import Link from 'next/link';
import content from '../content/home.md';

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context('../content/blogPosts', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(markdownFiles.map(path => import(`../content/blogPosts/${path}`)));
};

export default class Home extends Component {
  static async getInitialProps() {
    const postsList = await importBlogPosts();

    return { postsList };
  }
  render() {
    const { postsList } = this.props;
    return (
      <React.Fragment>
        {postsList.map(post => {
          console.log({ post });
          return (
            <Link href={`/posts/${post.slug}`}>
              <a>{post.attributes.title}</a>
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}
