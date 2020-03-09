import React from "react";
import "./../styles/base.css";
import "./../styles/flexbox.css";

import { Header, Banner, Email, Columns, Footer } from "./../components";

function Landing() {
  return (
    <div>
      <Header />
      <Banner />
      <Email />
      <Columns />
      <Footer />
    </div>
  );
}

export default Landing;
