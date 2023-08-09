import { Search } from '@/entities/search'
import { Paginator } from '@/features/paginator'
import { UsersList } from '@/features/usersList'
import s from './users.module.css'

export const Users = () => {
	return (
		<div className={s.users + ' height'}>
			<Search />
			<div>
				<UsersList />
			</div>
			<Paginator />
		</div>
	)
}
