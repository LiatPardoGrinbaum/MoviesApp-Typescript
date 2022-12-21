import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
// import Container from "@mui/material/Container";

import "./App.css";
// import MoviesPage from "./components/MoviesPage/MoviesPage";
import SingleContentPage from "./components/SingleContentPage/SingleContentPage";
import HomePage from "./components/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <Box className="appContainer">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/content" component={SingleContentPage} />
        </Switch>
      </BrowserRouter>
    </Box>
  );
};

export default App;
