import { Users } from "./users.tsx";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks.ts";
import { setUsers, useGetUsersQuery } from "@/slices/users";
import { getPaginator, setPages } from "@/slices/paginator";
import { countPages } from "@/shared/utils/count-pages.ts";

export const UsersContainer = () => {
    const dispatch = useAppDispatch()

    const {page, term, count, friend} = useAppSelector(getPaginator)

    const [isLoading, setIsLoading] = useState(false);

    const {data, status} = useGetUsersQuery({page, count, term, friend})

    useEffect(() => {
        setIsLoading(status === "pending")

        if (status === 'fulfilled' && data) {
            const pages = countPages(data.totalCount, count, 18)

            dispatch(setUsers(data.items))
            dispatch(setPages(pages));
        }
    }, [count, data, data?.items, dispatch, status]);

    return <Users isLoading={isLoading}/>
};