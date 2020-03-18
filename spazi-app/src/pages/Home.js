import React from "react";
import "./../styles/base.css";
import "./../styles/flexbox.css";

import { Navbar, Banner, Footer, Comments, Authors, FeatureSection } from "../components";
import AboutSection from "../components/AboutSection/AboutSection";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Comments />
      <FeatureSection />
      <AboutSection />
      <Authors />
      <Footer />
    </div>
  );
}

export default Home;
