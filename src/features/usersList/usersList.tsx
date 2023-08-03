import { Div } from "@/shared/ui/div";
import s from "@/pages/users/users.module.css";
import { User } from "@/entities/user";
import { useAppSelector } from "@/app/hooks.ts";
import { useGetUsersQuery } from "@/slices/users/users-api.ts";
import { getPaginator } from "@/slices/paginator";
import { WithLoading } from "@/shared/hoc/withLoading.tsx";

export const UsersList = () => {

    const {page, term, count, friend} = useAppSelector(getPaginator)

    const { isLoading, data } = useGetUsersQuery({count, page, term, friend})

    return (
        <WithLoading isLoading={isLoading}>
            {!data?.items[0] && <Div>Users not found</Div>}
            <ul className={s.usersList + ' scroll'}>
                {data?.items.map(user => (
                    <li key={user.id}>
                        <User {...user} />
                    </li>
                ))}
            </ul>
        </WithLoading>
    );
}
