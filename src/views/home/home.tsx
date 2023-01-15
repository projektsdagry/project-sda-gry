import React, { useEffect, useState } from "react";
import NewsCard from "../../components/news-card/news-card";
import { News } from "../../types/news";
import { apiNews } from "../../services/api-news";
import MainNews from "../../components/main-news/main-news";

export const HomeView: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(2);
  const [firstNews, ...nextNews] =news

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = nextNews.slice(indexOfFirstNews, indexOfLastNews);
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
        
      </div>
      <div>
        {firstNews && <MainNews news={firstNews}/>}
        {/* <NewsCard news={currentNews} /> */}
      </div>
    </>
  );
};
