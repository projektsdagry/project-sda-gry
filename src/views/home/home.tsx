import React,{useEffect,useState} from 'react'
const MainView: React.FC = () => {

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd1de6b559emshf05bb40bdef5eeap13bed5jsnf35944932b7f',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    };
    
    fetch('https://mmo-games.p.rapidapi.com/latestnews', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err))
  },[])

  return <>MainView</>
};

export default MainView;
