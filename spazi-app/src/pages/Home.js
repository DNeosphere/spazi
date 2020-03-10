import React from "react";
import "./../styles/base.css";
import "./../styles/flexbox.css";

import { Navbar, Banner, Footer, Comments } from "../components";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Comments />
      <Footer />
    </div>
  );
}

export default Home;
