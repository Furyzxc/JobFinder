import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc'
import { Div } from '@/shared/ui/div/div.tsx'
import { useRequestDialogsQuery } from '../api/api.ts'
import { Chat } from '../features/chat'
import { DialogsList } from '../features/dialogsList'

export const Dialogs = () => {
	const { userId } = useParams()
	const { isError } = useRequestDialogsQuery()

	return (
		<WithError isError={isError}>
			<Grid container>
				<Grid
					item
					xs={4}
					sm={3}
					sx={{ position: 'relative' }}
					className={'noNavigationHeight'}
				>
					<DialogsList />
				</Grid>
				<Grid sx={{ position: 'relative' }} item xs={8} sm={9}>
					{userId ? <Chat id={+userId} /> : <Div>Start Chatting</Div>}
				</Grid>
			</Grid>
		</WithError>
	)
}
