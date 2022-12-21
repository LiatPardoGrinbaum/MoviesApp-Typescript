import React from "react";
import { InputBase, styled } from "@mui/material";

type SearchBarProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "5px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
  border: "solid 1px rgba(100, 100, 111, 0.2)",
  margin: "1rem",
}));

const SearchBar = (props: SearchBarProps) => {
  return (
    <Search>
      <InputBase
        placeholder="Search..."
        value={props.input}
        onChange={(e) => {
          props.setInput(e.target.value);
        }}
        fullWidth={true}
      />
    </Search>
  );
};

export default SearchBar;
