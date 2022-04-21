import Document, { Html, Head, Main, NextScript } from "next/document";

const FAVICON_VERSION = 3

function v(href) {
  return `${href}?v=${FAVICON_VERSION}`
}
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;800;900&family=Outfit:wght@300&display=swap"
            rel="stylesheet"
            as="style"
          />
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-title" content="Latin Shine" />
          <meta name="description" content="fun and friendly bachata classes in High Wycombe, every Wednesday. Beginners are welcome; partners are not required. -Latin Shine" />
          <meta name="keywords" content="Bachata,Classes,Salsa,Kizomba,Zouk,Latin Dance,Latin Shine,Dancing,Beginners,Student,High Wycombe,Buckinghamshire,New Course,Oxford,Aylesbury,Friendly,Fun,Wednesday,Evening" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
