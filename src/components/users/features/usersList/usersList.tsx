import { Grid } from '@mui/material'
import { memo } from 'react'
import { useScroll, useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { GetUsersResponse } from '../../api/types.ts'
import { User } from '../../entities/user'
import { Paginator } from '../paginator'
import s from './users.module.css'

type PropsType = {
	usersData: GetUsersResponse | undefined
}

export const UsersList = memo(({ usersData }: PropsType) => {
	const { ref } = useSmoothAppearance()
	const scroll = useScroll()

	return (
		<Grid container className={s.usersList + ' scroll'} {...scroll} ref={ref}>
			{usersData?.items && usersData?.items.length > 0 ? (
				usersData?.items.map(user => <User {...user} key={user.id} />)
			) : (
				<Div>Users not found</Div>
			)}
			<Paginator />
		</Grid>
	)
})
