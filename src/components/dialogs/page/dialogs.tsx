import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc'
import { useAppSelector } from '@/shared/model/hooks.ts'
import { Div } from '@/shared/ui/div/div.tsx'
import { DialogsForm } from '../features/dialogsForm'
import { DialogsList } from '../features/dialogsList'
import { Messages } from '../features/messages'
import { getDialogName, selectDialogsError } from '../model/slice.ts'
import s from '@/components/dialogs/page/dialogs.module.css'

export const Dialogs = () => {
	const isError = useAppSelector(selectDialogsError)
	const dialogName = useAppSelector(getDialogName)
	const { userId } = useParams()

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
					{userId ? (
						<>
							<Grid item xs={1} className={s.title}>
								{dialogName}
							</Grid>
							<Grid item xs={10} className={s.messages + ' scroll'}>
								<Messages />
							</Grid>
							<Grid item xs={1}>
								<DialogsForm />
							</Grid>
						</>
					) : (
						<Div>Start Chatting</Div>
					)}
				</Grid>
			</Grid>
		</WithError>
	)
}
