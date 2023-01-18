import React, { useEffect, useState } from "react";
import MainNews from "../../components/main-news/main-news";

export const HomeView: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          top: 0,
        }}
      ></div>
      <div>
        <MainNews />
      </div>
    </>
  );
};
