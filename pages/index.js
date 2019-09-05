import React, { Component } from 'react';

import Link from 'next/link';
import axios from 'axios';
import content from '../content/home.md';

export default class Home extends Component {
  static async getInitialProps({}) {
    const postsList = await axios.get('http://localhost:3000/api/posts');
    return { postsList: postsList.data };
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
