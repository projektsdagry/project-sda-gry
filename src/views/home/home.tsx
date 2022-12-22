import React,{useEffect,useState} from 'react'
import axios from 'axios';
const MainView: React.FC = () => {
  const [gameNews, SetGameNews] = useState("")
  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://mmo-games.p.rapidapi.com/latestnews',
      headers: {
        'X-RapidAPI-Key': 'd1de6b559emshf05bb40bdef5eeap13bed5jsnf35944932b7f',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      SetGameNews(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  console.log(gameNews);

  return <>MainView</>
};

export default MainView;
