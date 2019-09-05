import React, { Component } from 'react';
// import { useRouter } from 'next/router';

class Post extends Component {
  static async getInitialProps({ query }) {
    // pid = 'hello-nextjs'
    const { slug } = query;
    const blogpost = await import(`../../content/blogPosts/${slug}.md`).catch(error => null);

    console.log({ query, blogpost: blogpost.default });
    // const postContent = await fetch(
    //   `https://api.example.com/post/${encodeURIComponent(pid)}`
    // ).then(r => r.text())

    return { blogpost };
  }
  render() {
    // const router = useRouter();
    const {
      blogpost: { html, title },
    } = this.props;
    return (
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    );
  }
}

export default Post;
