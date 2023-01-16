export interface Genres {
    id:number;
    name:string;
    slug:string;
    games_count:number;
    image_background:string;

        
    
}


export interface GenresResponse {
    results: Genres[];
  }