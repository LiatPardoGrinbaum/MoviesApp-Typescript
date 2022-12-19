import React from "react";
import { AppBar, Toolbar, styled, Typography, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";

const Header = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgb(42, 42, 154)",
    padding: "1.2rem",
  });

  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" }, fontFamily: " 'Righteous', cursive" }}>
          Movies Finder
        </Typography>
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
