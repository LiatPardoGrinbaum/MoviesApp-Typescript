import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ApiResponse, useFetch } from "../../hooks/useFetch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./SingleContentPage.css";
import { Box } from "@mui/material";
import { img_500, original, unavailable } from "../../config/config";

type ParamId = {
  id: string;
};

type singleContentProps = {
  media_type: string;
};

const SingleContentPage = (props: singleContentProps) => {
  const { id } = useParams<ParamId>();

  const { responseData, error, loading }: ApiResponse = useFetch(
    `https://api.themoviedb.org/3/${props.media_type}/${id}?api_key=${process.env.REACT_APP_OMDB_API_KEY}&language=en-US`
  );
  //fetch movie trailer video:
  const { results }: ApiResponse = useFetch(
    `https://api.themoviedb.org/3/${props.media_type}/${id}/videos?api_key=${process.env.REACT_APP_OMDB_API_KEY}&language=en-US`
  );
  console.log("responseData", responseData);
  console.log("results", results);
  console.log("err", error);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%"
      className="singleContentPage">
      {responseData && (
        <img
          src={responseData.backdrop_path ? `${original}/${responseData.backdrop_path}` : unavailable}
          alt=""
          style={{ opacity: "0.15" }}
        />
      )}
      {/*   {responseData && <img src={`${original}/${responseData.backdrop_path}`} alt="" style={{ opacity: "0.15" }} />} */}
      {responseData ? (
        <div className="singleContentPage-inner">
          <div className="content-top">
            <img
              src={responseData.poster_path ? `${img_500}/${responseData.poster_path}` : unavailable}
              alt={responseData.name || responseData.title}
              width="400"
            />
            <p style={{ color: "white" }}>{responseData.original_title || responseData.name}</p>
          </div>

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
