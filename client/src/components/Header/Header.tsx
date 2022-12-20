import React from "react";
import { AppBar, Toolbar, styled, Typography, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import MovieImg from "../../assets/movies.png";

const Header = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    padding: "1.2rem",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box display="flex" alignItems="center" gap="20px">
          <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" }, fontFamily: " 'Righteous', cursive" }}>
            WatchIt.
          </Typography>
          <img src={MovieImg} alt="movie-logo" height={60} />
        </Box>
        <Icons>
          <Badge badgeContent={4} color="secondary">
            <FavoriteIcon fontSize="large" />
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
