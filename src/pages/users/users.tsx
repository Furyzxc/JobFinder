import s from './users.module.css'

// - Components and hoc

import { User } from "@/entities/user"
import { Paginator } from "@/features/paginator";
import { Search } from "@/entities/search";
import { Div } from "@/shared/ui/div/div.tsx";
import { withLoading } from "@/shared/hoc/withLoading.tsx";

// - Actions

import { getUsers } from "@/slices/users";
import { useAppSelector } from "@/app/hooks.ts";

// -----------------------


const WeakUsers = () => {
    const users = useAppSelector(getUsers)

    return (
        <div className={s.users + ' height'}>
            <div>
                <div>
                    <Search/>
                </div>

                <div className={s.wrapper}>
                    {!users[0] && <Div>Users not found</Div>}
                    <ul className={s.usersList + ' scroll'}>
                        {users?.map(user => (
                            <li key={user.id}>
                                <User {...user} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <Paginator/>
            </div>
        </div>
    )
}

export const Users = withLoading(WeakUsers)