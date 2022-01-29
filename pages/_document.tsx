import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                    {/* Inject MUI styles first to match with the prepend: true configuration. */}
                    {(this.props as any).emotionStyleTags}
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

// TODO https://nextjs.org/docs/advanced-features/custom-app
// TODO https://nextjs.org/docs/advanced-features/custom-document
// TODO and in general move everything that doesn't have to do with the document in _app.tsx
