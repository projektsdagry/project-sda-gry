import { useEffect, useState } from "react";
import { firestore } from "../../services/api-firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { Article } from "../../types/news";
import Grid from "@mui/material/Grid";

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
    <Grid container spacing={2} columns={{ xs: 1, md: 5 }}>
      <Grid item>
        <h1>{mainArticle && mainArticle.title}</h1>
        <p>{mainArticle && mainArticle.description}</p>
        <img src={mainArticle && mainArticle.image}></img>
        <p>{mainArticle && mainArticle.content}</p>
      </Grid>
      {secArticles.map((article) => {
        return (
          <Grid item xs={1} md={1} key={article.title}>
            <div>
              <img src={article.image}></img>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MainNews;
