import React, { Component } from 'react';

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const blogpost = await import(`../../../content/blogPosts/${slug}.md`).catch(error => null);

    return { blogpost };
  }
  render() {
    if (!this.props.blogpost) return <div>not found</div>;

    const {
      html,
      title,
      attributes: { thumbnail },
    } = this.props.blogpost.default;

    return (
      <article>
        <h1>{title}</h1>
        <img src={thumbnail} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    );
  }
}

export default Post;
