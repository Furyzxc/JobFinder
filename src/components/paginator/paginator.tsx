import s from "../../pages/users/users.module.css";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {getPages, setPage} from "../../features/paginator";
import {Button} from "@mui/material";

export const Paginator = () => {
    const dispatch = useAppDispatch()

    const pages = useAppSelector(getPages)
    const handlePageClick = (pageNumber: number) => dispatch(setPage(pageNumber))

    return (
        <div className={s.pages}>
            {pages.length > 1 &&
                    pages.map(page => (
                        <Button key={page} variant='outlined'
                                onClick={() => handlePageClick(page)}
                        > {page} </Button>
                    ))
            }
        </div>
    );
};