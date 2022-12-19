// import React, { createContext } from "react";

import { createContext, useState } from "react";
// import axios from "axios";

type ContextProviderProps = {
  children: React.ReactNode;
};

//*maybe use it in single movie component
export type MovieType = {
  Title: string;
  description: string;
  published: Date;
  image: string;
  stars: number;
  imdbID: string;
};

type Movies = {
  movies: MovieType[]; //| or null ?
};

type MoviesContextType = {
  movies: Movies | null;
  setMovies: React.Dispatch<React.SetStateAction<Movies | null>>;
};

export const MyContext = createContext({} as MoviesContextType);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [movies, setMovies] = useState<Movies | null>(null);

  // const getMovies = async () => {};
  return <MyContext.Provider value={{ movies, setMovies }}>{children}</MyContext.Provider>;
};
