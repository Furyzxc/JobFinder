import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc'
import { Div } from '@/shared/ui/div/div.tsx'
import { useRequestDialogsQuery } from '../api/api.ts'
import s from './dialogs.module.css'
import { Chat } from '@/components/dialogs/features/chat'
import { DialogsList } from '@/components/dialogs/features/dialogsList'

export const Dialogs = () => {
	const { userId } = useParams()
	const { isError } = useRequestDialogsQuery()

	return (
		<WithError isError={isError}>
			<Grid container>
				<Grid item xs={3} className={s.dialogsList}>
					<DialogsList />
				</Grid>
				<Grid
					item
					container
					xs={9}
					direction={'column'}
					className={s.chatContainer}
				>
					{userId ? <Chat id={+userId} /> : <Div>Start Chatting</Div>}
				</Grid>
			</Grid>
		</WithError>
	)
}