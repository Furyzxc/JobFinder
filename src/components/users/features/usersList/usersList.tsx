import { Grid } from '@mui/material'
import { memo } from 'react'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { User } from '../../entities/user'
import { UserResData } from '../../api/types.ts'
import { Paginator } from '../paginator'
import s from './users.module.css'

type PropsType = {
	users: UserResData[]
	pagesCount: number
}

export const UsersList = memo(({ users, pagesCount }: PropsType) => {
	const { ref } = useSmoothAppearance()

	return (
		<Grid
			container
			className={'scroll'}
			ref={ref}
			sx={{ textAlign: 'center', height: '100%' }}
		>
			<Grid xs item container className={s.usersList}>
				{users.length > 0 ? (
					users.map(user => <User {...user} key={user.id} />)
				) : (
					<Div>Users not found</Div>
				)}
			</Grid>
			<Grid xs={12} item sx={{ flexGrow: 1, alignSelf: 'end' }}>
				<Paginator pagesCount={pagesCount} />
			</Grid>
		</Grid>
	)
})
