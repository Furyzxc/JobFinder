import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc'
import { useAppSelector } from '@/shared/model/hooks.ts'
import { Div } from '@/shared/ui/div/div.tsx'
import { DialogsForm } from '@/features/dialogsForm'
import { DialogsList } from '@/features/dialogsList'
import { Messages } from '@/features/messages'
import { getDialogName, selectDialogsError } from '@/slices/dialogs'
import s from './dialogs.module.css'

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
				<Grid item xs={9} className={s.chatContainer + ' height'}>
					{userId ? (
						<>
							<div className={s.title}>{dialogName}</div>
							<div className={s.messages + ' scroll'}>
								<Messages />
							</div>
							<DialogsForm />{' '}
						</>
					) : (
						<Div>Start Chatting</Div>
					)}
				</Grid>
			</Grid>
		</WithError>
	)
}
