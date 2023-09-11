import { Grid } from '@mui/material'
import { memo } from 'react'
import { WithError } from '@/shared/hoc'
import { useChat, useMessagesRequest } from '../../model/hooks'
import { ChatHeader } from '../../entities/chatHeader'
import { DialogsForm } from '../dialogsForm'
import { Messages } from '../messages'

export const Chat = memo(() => {
	const { messagesData, isFetching, isError, urlId } = useMessagesRequest()
	const { name, avatar, isLoading } = useChat()
	return (
		<WithError isError={isError}>
			<Grid direction={'column'} container className={'noNavigationHeight'}>
				<Grid item xs={1} sx={{ bgcolor: 'primary.light', minHeight: '50px' }}>
					<ChatHeader dialogName={name} avatar={avatar} isLoading={isLoading} />
				</Grid>
				<Grid
					item
					xs
					sx={{ width: '100%', position: 'relative', bgcolor: 'primary.light' }}
					className={' scroll'}
				>
					<Messages
						isLoading={isFetching}
						messages={messagesData?.items}
						urlId={urlId}
					/>
				</Grid>
				<Grid item xs={0.6}>
					<DialogsForm />
				</Grid>
			</Grid>
		</WithError>
	)
})
