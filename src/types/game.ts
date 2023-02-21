export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  developers: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  twitch_count: string;
  genres: {
    id: string;
    name: string;
  }[];
  platforms: [
    {
      platform: {
        name: string;
      }
    }
  ]
    
  description: string;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  stores: [
    {
      id:number;
      url:string;
      store: {
        id:number
        name:string;
        slug:string;
        domain:string;
        games_count:number;
        image_background:string;
      }
    }
  ]
}

export interface GetGamesListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Game[];
}
