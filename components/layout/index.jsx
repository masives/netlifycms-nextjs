import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <nav>
        <Link href={'/'}>
          <a>home</a>
        </Link>
        <Link href={'/blog'}>
          <a>blog</a>
        </Link>
        <Link href={'/about'}>
          <a>about</a>
        </Link>
      </nav>
      <main>{children}</main>
      <footer>
        Example by <a href="https://www.github.com/masives">Józef Piecyk</a> for{' '}
        <a href="https://www.10clouds.com">10Clouds</a>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
