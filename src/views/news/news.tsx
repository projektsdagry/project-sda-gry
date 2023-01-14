import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../components/news-card/news-card";
import { News } from "../../types/news";
import Pagination from "@mui/material/Pagination/Pagination";
import { apiNews } from "../../services/api-news";

export const NewsView: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(8);

  useEffect(() => {
    (async () => {
      const newsData = await apiNews.getNews();
      if (newsData) {
        setNews(newsData);
      }
    })();
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     setNews(response?.data || []);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, []);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          top: 0,
        }}
      >
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
