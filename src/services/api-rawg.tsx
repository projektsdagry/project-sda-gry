import { Game } from "../types/game";

const apiGamesDef = () => {
  const getGames = async (page: number): Promise<Game[] | undefined> => {
    try {
      const url = `https://api.rawg.io/api/games?page=${page}&page_size=50&key=47df0f4ea0b14eb3b3beaeba99f4e03d`;
      const response = await fetch(url);
      const game = await response.json();
      return game.results as Game[];
    } catch (error) {
      console.log();
    }
  };

  const getRankingList = async (page: number): Promise<Game[] | undefined> => {
    try {
      const url = `https://api.rawg.io/api/games?key=5a117cd0e4cf4ef3b7f080f243bc1017&page_size=20&page=${page}&ordering=-metacritic&metacritic=88,100&platforms=4&dates=2014-12-01,2022-12-31`;
      const response = await fetch(url);
      const game = await response.json();
      return game.results as Game[];
    } catch (error) {
      console.log();
    }
  };

  return {
    getGames,
    getRankingList,
  };
};



export const apiGames = apiGamesDef();

