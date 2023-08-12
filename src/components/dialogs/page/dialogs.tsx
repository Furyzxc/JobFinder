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
				<Grid item xs={4} sm={3} className={s.dialogsList}>
					<DialogsList />
				</Grid>
				<Grid item xs={8} sm={9}>
					{userId ? <Chat id={+userId} /> : <Div>Start Chatting</Div>}
				</Grid>
			</Grid>
		</WithError>
	)
}
