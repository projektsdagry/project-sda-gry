import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../components/news-card";
import { New } from "../../types/news";

export const NewsView: React.FC = () => {
  const [news, SetNews] = useState([] as New[]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/latestnews",
      headers: {
        "X-RapidAPI-Key": "d1de6b559emshf05bb40bdef5eeap13bed5jsnf35944932b7f",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        SetNews(response?.data || []);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <NewsCard news={news} />
    </>
  );
};