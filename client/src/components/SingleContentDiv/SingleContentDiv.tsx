import { FavoriteBorder } from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { img_300 } from "../../config/config";
import { unavailable } from "../../config/config";
import "./SingleContentDiv.css";

type SingleContentProps = {
  title: string;
  id: string;
  poster: string;
  date: string;
  vote: number;
  media_type: string;
};
const SingleContentDiv = (props: SingleContentProps) => {
  console.log(typeof props.date);
  return (
    <div className="contentDivContainer">
      <IconButton aria-label="add to favorites" className="favoriteButton">
        <Checkbox
          icon={<FavoriteBorder sx={{ color: "white" }} fontSize="large" />}
          checkedIcon={<Favorite sx={{ color: "#f04d83" }} fontSize="large" />}
        />
      </IconButton>
      <div className="linkTo">
        <p>More details</p>
      </div>
      <div className="transparentBg"></div>

      <img className="image" src={props.poster ? `${img_300}${props.poster}` : unavailable} alt={props.title} />

      <p className="title">{props.title}</p>

      <div className="subTitleFlex">
        <span className="subTitle">{props.media_type === "tv" ? "TV serias" : "Movie"}</span>
        <span
          className={props.vote > 8 ? "subTitle votePos" : props.vote < 6 ? "subTitle voteNeg" : "subTitle votePos2"}>
          {props.vote.toString().slice(0, 3)}
        </span>
        <span className="subTitle">{props.date.split("-")[0]}</span>
      </div>
    </div>
  );
};

export default SingleContentDiv;
