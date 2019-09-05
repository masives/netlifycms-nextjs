import React, { Component } from 'react';

import Link from 'next/link';
import axios from 'axios';
import content from '../content/home.md';
// console.log(process.env);
export default class Home extends Component {
  static async getInitialProps({}) {
    const isDev = process.env.NODE_ENV === 'development';
    const apiHref = isDev ? 'http://localhost:3000/api/posts' : `/api/posts`;

    const postsList = await axios.get(apiHref);
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
