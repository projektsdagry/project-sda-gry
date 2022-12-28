import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../components/news-card/news-card";
import { New } from "../../types/news";
import Pagination from "@mui/material/Pagination/Pagination";

export const NewsView: React.FC = () => {
  const [news, SetNews] = useState([] as New[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(8);

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
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <>
      <div style={{ display: "flex", position: "sticky", top: 0 }}>
        <Pagination
          color="primary"
          count={5}
          onChange={(e, currentPage) => setCurrentPage(currentPage)}
          sx={{
            backgroundColor: "#AAADB6",
            maxWidth: "300px",
            borderRadius: "12px",
          }}
        />
      </div>
      <div>
        <NewsCard news={currentNews} />
      </div>
    </>
  );
};
