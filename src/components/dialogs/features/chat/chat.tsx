import { Grid } from '@mui/material'
import { memo } from 'react'
import { WithError, WithLoading } from '@/shared/hoc'
import { ChatHeader } from '../../entities/chatHeader'
import { useMessagesRequest } from '../../model/hooks'
import { DialogsForm } from '../dialogsForm'
import { Messages } from '../messages'

export const Chat = memo(() => {
	const { messagesData, isFetching, isError, urlId } = useMessagesRequest()

	return (
		<Grid direction={'column'} container className={'noNavigationHeight'}>
			<Grid item xs={1} sx={{ bgcolor: '#161B22', minHeight: '50px' }}>
				<ChatHeader />
			</Grid>
			<Grid
				item
				xs
				sx={{ width: '100%', position: 'relative', bgcolor: '#0D1117' }}
				className={' scroll'}
			>
				<WithLoading isLoading={isFetching}>
					<WithError isError={isError}>
						<Messages messages={messagesData?.items} urlId={urlId} />
					</WithError>
				</WithLoading>
			</Grid>
			<Grid item xs={0.6}>
				<DialogsForm />
			</Grid>
		</Grid>
	)
})
