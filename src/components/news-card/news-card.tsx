import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { New } from "../../types/news";
import StyledNewsCard from "../../styled/news-card";



const NewsCard = (props: { news: New[] }) => {
  return (
    <>
    <p style
    ={{textAlign:"center", fontWeight:'bold', fontSize:'3rem', margin:0, padding:0, color:'Gray'}} >
      Latest News</p>
      {props.news.map((news) => (
        <Card style={StyledNewsCard.container} sx={{ maxWidth: 345,}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={news.main_image}
          />

          <CardContent style={StyledNewsCard.card}>
            <Typography gutterBottom variant="h5" component="div">
              {news.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.short_description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" >Share</Button>
            <Button size="small" sx={{textDecoration:'none'}}><a href={news.article_url}>Learn More</a></Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default NewsCard;
