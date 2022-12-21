import React from "react";
import Pagination from "@mui/material/Pagination";

type PaginationProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  numOfPages: number;
};

const PaginationDiv = (props: PaginationProps) => {
  const onHandleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    props.setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <Pagination count={props.numOfPages} onChange={onHandleChange} sx={{ marginBottom: "20px" }} color="primary" />
    </div>
  );
};

export default PaginationDiv;
