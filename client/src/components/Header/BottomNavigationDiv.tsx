import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

const BottomNavigationDiv = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      sx={{ backgroundColor: theme.palette.primary.main }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}>
      <BottomNavigationAction
        style={value === 0 ? { color: theme.palette.secondary.main } : { color: "white" }}
        component={NavLink}
        to="/movies"
        label="Movies"
        icon={<LocalMoviesIcon />}
      />
      <BottomNavigationAction
        style={value === 1 ? { color: theme.palette.secondary.main } : { color: "white" }}
        component={NavLink}
        to="/tv"
        label="TV"
        icon={<LiveTvIcon />}
      />
      <BottomNavigationAction
        style={value === 2 ? { color: theme.palette.secondary.main } : { color: "white" }}
        component={NavLink}
        to="/search"
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationDiv;
