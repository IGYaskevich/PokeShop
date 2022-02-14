import { Pagination, Stack } from "@mui/material";
import { memo } from "react";

import style from "./styles.module.scss";

export const Paginate = memo(({ currentPage, onPageChange }) => {
  return (
    <div className={style.container}>
      <Stack spacing={2}>
        <Pagination
          count={20}
          page={currentPage}
          onChange={onPageChange}
          color={"secondary"}
          variant={"outlined"}
        />
      </Stack>
    </div>
  );
});
