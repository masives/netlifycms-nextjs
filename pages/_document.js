import Document, { Html, Head, Main, NextScript } from 'next/document';
import Layout from '../components/layout';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Layout>
            <Main />
            <NextScript />
            <style jsx global>{`
              nav {
                text-align: center;
              }
              nav a {
                margin-right: 2px;

                padding: 4px;
              }

              footer {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                text-align: center;
              }
            `}</style>
          </Layout>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
