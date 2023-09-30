import axios from "axios";
import { useState } from "react";
import { MovieRaw } from "../types/movies";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "http://www.omdbapi.com/?i=tt3896198&apikey=d89a9be3";

export default function useMovieList() {
  const [movie, setMovie] = useState<MovieRaw[]>([]);
  const [movieList, setMovieList] = useState<MovieRaw[]>([]);

  async function addMovie(movie: MovieRaw) {
    try {
      if (movieList) {
        await AsyncStorage.setItem("movieList", JSON.stringify(movieList));
      }

      setMovieList([...movieList, movie]);
      console.log(movieList);
    } catch (e) {
      console.log(e);
    }
  }

  async function removeMovie() {
    try {
      if (movieList) {
        await AsyncStorage.removeItem("movieList");
      }

      setMovieList([]);
    } catch (e) {
      console.log(e);
    }
  }

  async function getMovie(title: string) {
    const response = await axios.get(baseURL, {
      params: {
        t: title,
      },
    });
    setMovie([response.data]);
    return response.data;
  }

  return {
    movie,
    movieList,
    getMovie,
    addMovie,
    removeMovie,
  };
}
