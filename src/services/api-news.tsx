import { News } from "../types/news";

const apiNewsDef = () => {
  const url = `https://mmo-games.p.rapidapi.com/latestnews`;

  const getNews = async (): Promise<News[] | undefined> => {
    try {
      const response = await fetch(url, {
        headers: {
          "X-RapidAPI-Key":
            "d1de6b559emshf05bb40bdef5eeap13bed5jsnf35944932b7f",
          "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
        },
      });
      const news = await response.json();
      return news as News[];
    } catch (error) {
      console.log();
    }
  };

  return {
    getNews,
  };
};

export const apiNews = apiNewsDef();
