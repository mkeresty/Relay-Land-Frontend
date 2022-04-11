import Document, { Html, Head, Main, NextScript } from 'next/document'
import axios from 'axios';
import https from 'https';

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head >
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
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