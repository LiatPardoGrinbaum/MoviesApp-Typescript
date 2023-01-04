import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, makeStyles } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const BottomNavigationDiv = () => {
  // const useStyles = makeStyles({
  //   root: {},
  // });

  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      sx={{}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}>
      <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon />} />
      <BottomNavigationAction label="TV" icon={<LiveTvIcon />} />
      <BottomNavigationAction component={NavLink} to="/search" label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavigationDiv;
