import { useEffect, useState } from "react";
import { firestore } from "./../../index";
import { collection, query, getDocs } from "firebase/firestore";
import { Article } from "../../types/news";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Card, CardContent } from "@mui/material";
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
    <Container maxWidth={"xl"}>
      <h1>LATEST NEWS</h1>
      <Card>
        <Grid container spacing={2} columns={{ xs: 1, md: 5 }}>
          <Grid item style={{ padding: "0 20px 0 " }}>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              {mainArticle && mainArticle.title}
            </h1>
            <p style={{ display: "flex", justifyContent: "center" }}>
              {mainArticle && mainArticle.description}
            </p>
            <img
              alt=""
              title="elo"
              style={{
                width: "100%",
                height: "500px",
                display: "block",
                borderRadius: "12px",
                margin: "0 0 0 8px",
              }}
              src={mainArticle && mainArticle.image}
            ></img>
            <p style={{ fontSize: "15px", margin: "20px" }}>
              {mainArticle && mainArticle.content}
            </p>
          </Grid>
          {secArticles.map((article) => {
            return (
              <Grid item xs={1} md={1} key={article.title}>
                <CardContent>
                  <img
                    alt=""
                    title="elo"
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: "12px",
                    }}
                    src={article.image}
                  ></img>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {article.title}
                  </p>
                  <p>{article.description}</p>
                </CardContent>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </Container>
  );
};
export default MainNews;
