import { News } from "../../types/news";
import "./main-news.css"

const MainNews = (props: {news: News}) =>{

return  (

<div> {props.news.title}
     <img src={props.news.main_image} alt="" />
     {props.news.short_description}

</div>


)


}

export default MainNews