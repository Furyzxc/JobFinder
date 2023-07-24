import s from "@/pages/users/users.module.css";
import { useAppDispatch, useAppSelector } from "@/app/hooks.ts";
import { getPages, setPage } from "@/slices/paginator";
import { Button } from "@mui/material";

export const Paginator = () => {
    const dispatch = useAppDispatch()

    const pages = useAppSelector(getPages)
    const handlePageClick = (pageNumber: number) => dispatch(setPage(pageNumber))

    return (
        <div className={s.pages}>
            {pages.length > 1 &&
                pages.map(page => (
                    <Button key={page} variant='outlined' sx={{width: '100%', maxWidth: '70px'}}
                            onClick={() => handlePageClick(page)}
                    > {page} </Button>
                ))
            }
        </div>
    );
};