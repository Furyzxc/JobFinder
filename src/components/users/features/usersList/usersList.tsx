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
		<Grid
			container
			className={'scroll'}
			{...scroll}
			ref={ref}
			sx={{ textAlign: 'center', height: '100%' }}
		>
			<Grid xs item container className={s.usersList}>
				{usersData?.items && usersData?.items.length > 0 ? (
					usersData?.items.map(user => <User {...user} key={user.id} />)
				) : (
					<Div>Users not found</Div>
				)}
			</Grid>
			<Grid xs={12} sx={{ flexGrow: 1, alignSelf: 'end' }}>
				<Paginator />
			</Grid>
		</Grid>
	)
})
