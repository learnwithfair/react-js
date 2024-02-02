import React from "react";
import { Helmet } from "react-helmet";
export default function DynamicTitle(props) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>React-App || {props.title}</title>
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
  );
}
