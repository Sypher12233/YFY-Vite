import React from "react";
import styles from "./styles.module.css";
import Background from "../../components/Background/index";
import SubNav from "../../components/SubNav/index";
import Quote from "../../components/Quote/index";
import Categories from "../../components/Categories/index";
import Clubs from "../../components/Clubs/index";
import Feedback from "../../components/Feedback/index";
import BestMoments from "../../components/BestMoments/index";
import News from "../../components/News/index";

function Home() {
  return (
    <main>
      <Background />
      <SubNav />
      <Quote />
      <Categories />
      <Clubs />
      <Feedback />
      <BestMoments />
      <News />
    </main>
  );
}

export default Home;
