import "bootstrap/scss/bootstrap.scss";
import "./scss/app.scss";
import React from "react";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
