import React, { useEffect, useState } from "react";
import axios from "axios";
 export const NewsCard = () =>{
    const [newsTitle, SetNewsTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");
    const [newsShortContent, setNewsShortContent] = useState("");
    const [newsImage, setNewsImage] = useState("");
    const [newsThumbnail, setNewsThumbnail] = useState("");
  
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
          SetNewsTitle(
            response.data.map((article: any) => {
              return article.title;
            })
          );
          setNewsContent(
            response.data.map((article: any) => {
              return article.article_content;
            })
          );
          setNewsShortContent(
            response.data.map((article: any) => {
              return article.short_description;
            })
          );
          setNewsImage(
            response.data.map((article: any) => {
              return article.main_image;
            })
          );
          setNewsThumbnail(
            response.data.map((article: any) => {
              return article.thumbnail;
            })
          );
        })
        .catch(function (error) {
          console.error(error);
        });
    }, []);
  
    return (
      <div className="newsContainer">
          
        <div className="newsWrapper"> 
          <img src={newsImage[0]} alt="" />
          <div className="newsHeader">
            <p>{newsTitle[0]}</p>
          </div>
  
          <p>{newsShortContent[0]}</p>
        </div>
        <div className="newsWrapper">
          <img src={newsImage[1]} alt="" />
          <div className="newsHeader">
            <p>{newsTitle[1]}</p>
          </div>
  
          <p>{newsShortContent[1]}</p>
        </div>
        <div className="newsWrapper">
          <img src={newsImage[2]} alt="" />
          <div className="newsHeader">
            <p>{newsTitle[2]}</p>
          </div>
  
          <p>{newsShortContent[3]}</p>
        </div>
      </div>
    );
}

export default NewsCard;