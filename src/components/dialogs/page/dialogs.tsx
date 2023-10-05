import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { Chat } from '../features/chat'
import { DialogsList } from '../features/dialogsList'
import { useRequestDialogsQuery } from '../api/api.ts'
import s from './dialogs.module.css'

export const Dialogs = () => {
	const { userId } = useParams()
	const id = Number(userId) // possible NaN

	const { isError } = useRequestDialogsQuery()

	const { ref } = useSmoothAppearance(0.1)

	// we show dialogs list on mobile if we don't have user id in url params
	const style = !id ? { display: 'block' } : { display: 'none' }

	return (
		<Grid container ref={ref}>
			<WithError isError={isError}>
				<Grid
					item
					container
					xs={12}
					md={3}
					sm={12}
					className={s.list + ' noNavigationHeight'}
					style={style}
				>
					<DialogsList />
				</Grid>
				<Grid
					sx={{ position: 'relative' }}
					className={'noNavigationHeight'}
					item
					xs={12}
					md={9}
					sm={12}
				>
					{id ? <Chat /> : <Div>Start Chatting</Div>}
				</Grid>
			</WithError>
		</Grid>
	)
}
