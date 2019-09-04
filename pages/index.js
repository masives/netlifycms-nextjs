import React, { Component } from 'react';
import content from '../content/home.md';

export default class Home extends Component {
  render() {
    let {
      html,
      attributes: { title, cats },
    } = content;
    return (
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}
