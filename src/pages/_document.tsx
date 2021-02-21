import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="/theme.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
