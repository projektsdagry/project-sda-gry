import { Game } from "../types/game";
import { Genres, GenresList } from "../types/gamegenres";

const apiGamesDef = () => {
  const getGames = async (
    page: number,
    pageSize: number,
    genres?: string
  ): Promise<Game[] | undefined> => {
    try {
      const url = `https://api.rawg.io/api/games?page=${page}&page_size=${pageSize}&metacritic=70,100&key=47df0f4ea0b14eb3b3beaeba99f4e03d${
        genres ? "&genres=" + genres : ""
      }`;
      const response = await fetch(url);
      const game = await response.json();
      return game.results as Game[];
    } catch (error) {}
  };

  const getRankingList = async (page: number): Promise<Game[] | undefined> => {
    try {
      const url = `https://api.rawg.io/api/games?key=5a117cd0e4cf4ef3b7f080f243bc1017&page_size=20&page=${page}&ordering=-metacritic&metacritic=88,100&platforms=4&dates=2010-12-01,2022-12-31`;
      const response = await fetch(url);
      const game = await response.json();
      return game.results as Game[];
    } catch (error) {
      console.log();
    }
  };

  const getGameInfo = async (moreinfoId: string): Promise<Game | undefined> => {
    try {
      const url = `https://api.rawg.io/api/games/${moreinfoId}?key=5a117cd0e4cf4ef3b7f080f243bc1017`;
      const response = await fetch(url);
      const game = await response.json();
      return game as Game;
    } catch (error) {
      console.log();
    }
  };

  const getGenreList = async (): Promise<Genres[] | undefined> => {
    try {
      const url = `https://api.rawg.io/api/genres?key=5a117cd0e4cf4ef3b7f080f243bc1017`;
      const response = await fetch(url);
      const game = await response.json();
      return game.results as Genres[];
    } catch (error) {
      console.log();
    }
  };

  const getGamesListByGenre = async (
    genre: string
  ): Promise<GenresList[] | undefined> => {
    try {
      const url = `https://api.rawg.io/api/games?genres=${genre}&ordering=popularity&page_size=40&key=5a117cd0e4cf4ef3b7f080f243bc1017`;
      const response = await fetch(url);
      const game = await response.json();
      return game.results as GenresList[];
    } catch (error) {
      console.log();
    }
  };
  return {
    storeMethods: { getGames },
    getRankingList,
    getGenreList,
    getGamesListByGenre,
    getGameInfo,
  };
};

export const apiGames = apiGamesDef();
