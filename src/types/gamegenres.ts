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


  export interface GenresList {
    id:number;
    slug:string;
    name:string;
    playtime:number;
    released:string;
    tba:boolean;
    background_image:string;
  }