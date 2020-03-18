import React from "react";
import "./../styles/base.css";
import "./../styles/flexbox.css";

import { Navbar, Banner, Footer, Comments, Authors } from "../components";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Comments />
      <Authors />
      <Footer />
    </div>
  );
}

export default Home;
