import React from "react";
import { AboutUs } from "../../components/about-us-section/about-us-section";
import MainNews from "../../components/main-news/main-news";
import { HomePage } from "../../homepage-content/homepage-content";

export const HomeView: React.FC = () => {
  return (
    <>
   
      <div>
        <HomePage/>
        <AboutUs />
        <MainNews />
      </div>
    </>
  );
};
