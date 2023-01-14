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

  return {
    getGames,
  };
};

export const apiGames = apiGamesDef();