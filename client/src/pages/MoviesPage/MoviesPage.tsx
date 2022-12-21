import React from "react";

const MoviesPage = () => {
  return <div></div>;
};

export default MoviesPage;

// import React, { useState } from "react";
// import { Box, InputBase, styled } from "@mui/material";
// import { ApiResponse, useFetch } from "../../hooks/useFetch";
// import { contentType } from "../../context/MyContext";
// import SingleMovie from "../SingleMovieDiv/SingleMovieDiv";
// import { img_300 } from "../../config/config";
// // import axios from "axios";

// const Search = styled("div")(({ theme }) => ({
//   backgroundColor: "white",
//   padding: "5px 10px",
//   borderRadius: theme.shape.borderRadius,
//   width: "40%",
//   boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
//   border: "solid 1px rgba(100, 100, 111, 0.2)",
//   margin: "1rem",
// }));

// const MoviesBoxContainer = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "20px",
// }));

// //*need to get setMovies from context, and set data after using useFetch then review it
// //* need to define in context- title and setTitle and import here

// const MoviesPage = () => {
//   const [title, setTitle] = useState<string>("");

//   const { results, error, loading }: ApiResponse = useFetch(
//     `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_OMDB_API_KEY}`
//   );

//   const insertMovies = () => {
//     return results.map((content: contentType) => {
//       console.log(content);
//       return (
//         <SingleMovie
//           key={content.id}
//           title={content.title || content.name}
//           id={content.id}
//           poster={content.poster_path}
//         />
//       );
//     });
//   };
//   if (!loading) console.log("loading", loading);
//   // console.log(data);
//   return (
//     <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
//       <Search>
//         <InputBase
//           placeholder="Search..."
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//           fullWidth={true}
//         />
//       </Search>
//       <MoviesBoxContainer>
//         {results ? (
//           <div>{insertMovies()}</div>
//         ) : (
//           <div>
//             zssz
//             <p>{error}</p> <p>{error}</p> <p>{error}</p> <p>{error}</p> <p>{error}</p>
//             <br></br>
//             <p>ddddddddddd</p>
//           </div>
//         )}
//       </MoviesBoxContainer>
//     </Box>
//   );
// };

// export default MoviesPage;
