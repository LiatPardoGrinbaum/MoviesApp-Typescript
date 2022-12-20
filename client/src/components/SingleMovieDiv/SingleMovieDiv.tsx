import React from "react";

type SingleMovieProps = {
  title: string;
  id: string;
  poster: string;
};
const SingleMovieDiv = (props: SingleMovieProps) => {
  return (
    <div>
      <img
        src={
          !props.poster || props.poster === "N/A"
            ? "https://www.movienewz.com/img/films/poster-holder.jpg"
            : props.poster
        }
        alt={props.title}
      />
    </div>
  );
};

export default SingleMovieDiv;
