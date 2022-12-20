// import React, { createContext } from "react";

import { createContext, useState } from "react";
// import axios from "axios";

type ContextProviderProps = {
  children: React.ReactNode;
};

//contents:   movie or a tv show. title for movie, name for tv

//*maybe use it in single movie component
export type ContentType = {
  title: string;
  name: string;
  poster_path: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  media_type: string;
  id: string;
};

type Contents = {
  movies: ContentType[]; //| or null ?
};

type ContentsContextType = {
  contents: Contents | null;
  setContents: React.Dispatch<React.SetStateAction<Contents | null>>;
};

export const MyContext = createContext({} as ContentsContextType);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [contents, setContents] = useState<Contents | null>(null);

  // const getMovies = async () => {};
  return <MyContext.Provider value={{ contents, setContents }}>{children}</MyContext.Provider>;
};
