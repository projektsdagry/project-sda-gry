import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "./../../index";
import { collection, query, getDocs, limit, orderBy } from "firebase/firestore";
import { Article } from "../../types/news";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Card, CardContent } from "@mui/material";
import forgbg from "../../assets/forgbg.mp4";
import "../main-news/main-news.css";
import { wrap } from "module";
import logo from "./../../assets/logo.png";

export const MainNews = ({}) => {
  const [article, setArticle] = useState<Article[]>([]);
  const [mainArticle, ...setArticles] = article;

  useEffect(() => {
    (async () => {
      const q = query(collection(firestore, "articles"), limit(11));
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
    <>
      <div className="newsCont">
        <div
          style={{
            minHeight: "599px",
            margin: "0px 45px 50px 45px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "66%" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                margin: "0 0 40px 100px ",
              }}
            >
              Welcome to the ultimate destination for all things gaming!
            </p>

            <p style={{ fontSize: "25px", marginLeft: "100px" }}>
              Stay up to date with the latest news, trends and releases in the
              gaming world. With our constantly updated database, you'll never
              miss a beat. 🔥
              <br /> Browse our extensive game list sorted by category,
              platform, and popularity among users to find the perfect game for
              you. 🔍 <br /> Want to know the best games on the market? Check
              out our rankings based on Metacritic scores! 💯 <br /> Bored of
              playing the same games over and over? Let our game randomizer be
              your guide, showing you new and exciting games to try based on
              your selection. 🎲 <br /> <br />
              So come join us and immerse yourself in the world of gaming like
              never before! 🎉
            </p>
          </div>
          <div>
            <img
              src={logo}
              alt="img"
              style={{ width: "650px", height: "650px" }}
            />
          </div>
        </div>
        <h1 style={{ marginLeft: "45px" }}>LATEST NEWS</h1>
        {setArticles.slice(0, 2).map((article) => {
          return (
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
          );
        })}
        <Grid container spacing={0} columns={10}>
          {setArticles.map((article) => {
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
    </>
  );
};
export default MainNews;
