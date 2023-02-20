import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "./../../index";
import { collection, query, getDocs, limit, orderBy } from "firebase/firestore";
import { Article } from "../../types/news";
import Grid from "@mui/material/Grid";
import "../main-news/main-news.css";
import logo from "./../../assets/logo2.png";
import sheep from "./../../assets/sheep.png";
import hubs from "./../../assets/hubs.png";
import raccoon from "./../../assets/raccoon.png";
import Button from "@mui/material/Button";

export const MainNews = ({}) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      const q = query(collection(firestore, "articles"), limit(12));
      // const articles: any = [];
      const querySnapshot = await getDocs(q);
      const articles: Article[] = querySnapshot.docs.map((doc) =>
        doc.data()
      ) as Article[];
      // querySnapshot.forEach((doc) => {
      //   articles.push(doc.data());
      // });
      setArticles(articles);
    })();
  }, []);
  const handleScrollToSection = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="newsCont">
       
        <section id="sectionNews" style={{paddingTop: '50px'}}>
          <h1 style={{ margin: "0 0 0 45px" }}>LATEST NEWS</h1>
          {articles.slice(0, 2).map((article) => {
            return (
              <div className="content-wrapper">
                <div className="news-card">
                  <img
                    alt="."
                    title=""
                    src={article.image}
                    className="news-card__image"
                  ></img>
                  <div className="news-card__text-wrapper">
                    <h2 className="news-card__title">{article.title}</h2>
                    <div className="news-card__description">
                      {article.description}
                    </div>
                    <div className="news-card__details-wrapper">
                      {article.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <Grid container spacing={0} columns={10}>
          {articles.slice(2).map((article) => {
            return (
              <Grid item xs={10} md={5} lg={2} key={article.title}>
                <figure className="newsCard">
                  <div className="image">
                    <img src={article.image} alt="" />
                  </div>
                  <figcaption>
                    <div className="date">
                      <span className="day">11</span>
                      <span className="month">FEB</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </figcaption>
                </figure>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default MainNews;
