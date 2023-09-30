export interface MovieRaw {
  name: any;
  Title: string; // 🟩
  Year: string; // 🟩
  Rated: string; // 🟩
  Released: string; // 🟩
  Runtime: string; // 🟩
  Genre: string; // 🟩
  Director: string; // 🟩
  Writer: string; // 🟩
  Actors: string; // 🟩
  Plot: string; // 🟩
  Language: string;
  Country: string;
  Awards: string;
  Poster: string; // 🟩
  Ratings: Rating[];
  Metascore: string; // 🟩
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  add?: boolean;
}

// export interface MovieList {
//     data: MovieRaw[]
// }

export interface MovieCard {
    Title: string; // 🟩
    Year: string; // 🟩
    Genre: string; // 🟩
    Poster: string; // 🟩
    Metascore: string;
}

export interface Rating {
  Source: string;
  Value: string;
}
