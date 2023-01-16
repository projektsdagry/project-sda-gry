import { News } from "../../types/news";

const MainNews = (props: { news: News }) => {
  return (
    <div>
      {" "}
      {props.news.title}
      <img src={props.news.main_image} alt="" />
      <div
        dangerouslySetInnerHTML={{ __html: props.news.article_content }}
      ></div>
    </div>
  );
};

export default MainNews;
