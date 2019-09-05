import React, { Component } from 'react';
// import { useRouter } from 'next/router';

class Post extends Component {
  static async getInitialProps({ query }) {
    // pid = 'hello-nextjs'
    const { slug } = query;
    const blogpost = await import(`../../content/blogPosts/${slug}.md`).catch(error => null);

    return { blogpost };
  }
  render() {
    //   empty post
    if (!this.props.blogpost) return <div>not found</div>;
    // const router = useRouter();
    const { html, title } = this.props.blogpost.default;
    return (
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    );
  }
}

export default Post;
