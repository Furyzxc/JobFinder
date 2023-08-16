import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { useRequestDialogsQuery } from '../api/api.ts'
import { Chat } from '../features/chat'
import { DialogsList } from '../features/dialogsList'
import s from './dialogs.module.css'

export const Dialogs = () => {
	const { userId } = useParams()
	const { isError } = useRequestDialogsQuery()

	const { ref } = useSmoothAppearance(0.1)

	const documentWidth = document.documentElement.clientWidth

	// we show dialogs list if we dont have user id in url params or device width is larger that 900 px
	const displayDialogsList = !userId || documentWidth >= 900

	return (
		<Grid container ref={ref}>
			<WithError isError={isError}>
				<Grid
					item
					container
					xs={12}
					md={3}
					sm={12}
					style={{ display: displayDialogsList ? undefined : 'none' }}
					className={s.list + ' noNavigationHeight'}
				>
					{displayDialogsList && <DialogsList />}
				</Grid>
				<Grid
					sx={{ position: 'relative' }}
					className={'noNavigationHeight'}
					item
					xs={12}
					md={9}
					sm={12}
				>
					{userId ? <Chat /> : <Div>Start Chatting</Div>}
				</Grid>
			</WithError>
		</Grid>
	)
}
