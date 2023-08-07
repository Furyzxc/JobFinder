import s from "@/pages/users/users.module.css";
import { useActions, useAppSelector } from "@/shared/model/hooks.ts";
import { getPages } from "@/slices/paginator";
import { Button } from "@mui/material";

export const Paginator = () => {
  const { setPage } = useActions();

  const pages = useAppSelector(getPages);
  const handlePageClick = (pageNumber: number) => setPage(pageNumber);

  return (
    <div className={s.pages}>
      {pages.length > 1 &&
        pages.map((page) => (
          <Button
            key={page}
            variant="outlined"
            sx={{ width: "100%", maxWidth: "70px" }}
            onClick={() => handlePageClick(page)}
          >
            {" "}
            {page}{" "}
          </Button>
        ))}
    </div>
  );
};
