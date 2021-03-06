import { AppProps } from "next/app";
import Head from "next/head";
import "modern-normalize";
import { FC } from "react";
import Layout from "~/components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core";

const theme = {
  editorBg: "#181a1b",
  scrollbar: "#646464",
  navText: "#ffffff99",
  text: "#e6e6e6"
};

const MyApp: FC<AppProps> = ({ pageProps, Component }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Notioutline</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StylesProvider>
  </>
);

export default MyApp;
