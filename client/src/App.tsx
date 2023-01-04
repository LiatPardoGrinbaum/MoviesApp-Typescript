import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
// import Container from "@mui/material/Container";
import { theme } from "./theme";

import "./App.css";
// import MoviesPage from "./components/MoviesPage/MoviesPage";
import SingleContentPage from "./pages/SingleContentPage/SingleContentPage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const App: React.FC = () => {
  return (
    <Box className="appContainer" bgcolor={theme.palette.primary.light}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/content:id" component={SingleContentPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </Box>
  );
};

export default App;
