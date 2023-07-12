import {Users} from "./users.tsx";
import {useGetUsersQuery} from "../../api/users-api.ts";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {setUsers} from "../../features/users";
import {getPaginator, setPages } from "../../features/paginator/paginator-slice.ts";

export const UsersContainer = () => {
    const dispatch = useAppDispatch()

    const {page, term, count} = useAppSelector(getPaginator)

    const [isLoading, setIsLoading] = useState(false);

    const {data, status} = useGetUsersQuery({page, count, term})

    useEffect(() => {
        setIsLoading(status === "pending")
        const pages: number[] = [];

        if (status === 'fulfilled' && data) {
            dispatch(setUsers(data.items))

            const pagesAmount = Math.ceil(data.totalCount / count);

            for (let i = 1; i <= pagesAmount && i <= 10; i++) {
                pages.push(i);
            }
        }

        dispatch(setPages(pages));
    }, [count, data, data?.items, dispatch, status]);

    return <Users isLoading={isLoading}/>
};