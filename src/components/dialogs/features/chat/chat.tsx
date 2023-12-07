import { Grid } from '@mui/material'
import { memo } from 'react'
import { WithError } from '@/shared/hoc'
import { useChat } from '../../model/hooks'
import { ChatHeader } from '../../entities/chatHeader'
import { DialogsForm } from '../dialogsForm'
import { Messages } from '../messages'

export const Chat = memo(() => {
	const { isError, profileLoading, messagesLoading, messages } = useChat()
	return (
		<WithError isError={isError}>
			<Grid direction={'column'} container className={'noNavigationHeight'}>
				<Grid item xs={1} sx={{ bgcolor: 'primary.light', minHeight: '50px' }}>
					<ChatHeader isLoading={profileLoading} />
				</Grid>
				<Grid
					item
					xs
					sx={{
						width: '100%',
						position: 'relative',
						bgcolor: 'primary.light',
					}}
					className={'scroll'}
				>
					<Messages isLoading={messagesLoading} messages={messages} />
				</Grid>
				<Grid item xs={0.6}>
					<DialogsForm />
				</Grid>
			</Grid>
		</WithError>
	)
})
