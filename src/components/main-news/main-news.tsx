import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "./../../index";
import { collection, query, getDocs } from "firebase/firestore";
import { Article } from "../../types/news";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Card, CardContent } from "@mui/material";
import forgbg from "../../assets/forgbg.mp4";
import "../main-news/main-news.css";

export const MainNews = ({}) => {
  const [article, setArticle] = useState<Article[]>([]);
  const [mainArticle, ...secArticles] = article;

  useEffect(() => {
    (async () => {
      const q = query(collection(firestore, "articles"));
      // const articles: any = [];
      const querySnapshot = await getDocs(q);
      const articles: Article[] = querySnapshot.docs.map((doc) =>
        doc.data()
      ) as Article[];
      // querySnapshot.forEach((doc) => {
      //   articles.push(doc.data());
      // });
      setArticle(articles);
    })();
  }, []);
  return (
    <div className="newsCont">
      <h1 style={{marginLeft: "45px"}}>LATEST NEWS</h1>
      <div className="content-wrapper">
        <div className="news-card">
          <img
            alt="."
            title=""
            src={mainArticle && mainArticle.image}
            className="news-card__image"
          ></img>
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">
              {mainArticle && mainArticle.title}
            </h2>
            <div className="news-card__description">
              {mainArticle && mainArticle.description}
            </div>
            <div className="news-card__details-wrapper">
              {mainArticle && mainArticle.content}
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="news-card">
          <img
            alt="."
            title=""
            src={mainArticle && mainArticle.image}
            className="news-card__image"
          ></img>
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">
              {mainArticle && mainArticle.title}
            </h2>
            <div className="news-card__description">
              {mainArticle && mainArticle.description}
            </div>
            <div className="news-card__details-wrapper">
              {mainArticle && mainArticle.content}
            </div>
          </div>
        </div>
      </div>
      <Grid container spacing={0} columns={10} >
        {secArticles.map((article) => {
          return (
            <Grid item xs={10} md={5} lg={2} key={article.title}>
              <figure className="newsCard">
                <div className="image">
                  <img src={article.image} alt="" />
                </div>
                <figcaption>
                  <div className="date">
                    <span className="day">31</span>
                    <span className="month">Jan</span>
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
  );
};
export default MainNews;
