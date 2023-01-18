import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ApiResponse, useFetch } from "../../hooks/useFetch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./SingleContentPage.css";
import { Box } from "@mui/material";
import { original } from "../../config/config";

type ParamId = {
  id: string;
};

type singleContentProps = {
  media_type: string;
};

const SingleContentPage = (props: singleContentProps) => {
  const { id } = useParams<ParamId>();

  const { responseData, error }: ApiResponse = useFetch(
    `https://api.themoviedb.org/3/${props.media_type}/${id}?api_key=${process.env.REACT_APP_OMDB_API_KEY}&language=en-US`
  );
  const { results }: ApiResponse = useFetch(
    `https://api.themoviedb.org/3/${props.media_type}/${id}/videos?api_key=08a1dc0b34c256c4888328ae48e28713&language=en-US`
  );
  console.log("responseData", responseData);
  console.log("err", error);

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%"
      className="singleContentPage">
      {responseData ? (
        <div>
          <img src={`${original}/${responseData.backdrop_path}`} alt="" width="500" style={{ opacity: "0.4" }} />
          <p>{responseData.original_title || responseData.name}</p>
          {results && (
            <Button
              variant="contained"
              endIcon={<YouTubeIcon />}
              sx={{
                background: "red",
              }}
              target="_blank"
              href={`https://www.youtube.com/watch?v=${results[0]?.key}`}>
              Watch Trailer
            </Button>
          )}
        </div>
      ) : (
        <p>{error}</p>
      )}
    </Box>
  );
};

export default SingleContentPage;
