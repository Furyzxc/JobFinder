import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { WithError } from '@/shared/hoc/withError.tsx'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { useAppDispatch } from '@/shared/model/hooks.ts'
import { Div } from '@/shared/ui/div/div.tsx'
import { Message } from '@/entities/message'
import { useLazyRequestMessagesQuery } from '@/slices/dialogs'
import s from './messages.module.css'

export const Messages = () => {
	const ref = useRef(null) as any

	const dispatch = useAppDispatch()

	const { userId } = useParams()

	const id = Number(userId)

	const [requestMessages, { data, isFetching, isError }] =
		useLazyRequestMessagesQuery()

	useEffect(() => {
		if (id) requestMessages({ id })
	}, [dispatch, id, requestMessages])

	useEffect(() => {
		ref.current?.scrollIntoView()
	}, [data?.items])

	return (
		<WithLoading isLoading={isFetching}>
			<WithError isError={isError}>
				<div className={s.flexbox}>
					{!data?.items[0] && <Div>Enter your first message</Div>}
					{data?.items.map(message => (
						<Message
							{...message}
							key={message.id}
							me={message.senderId !== id}
						/>
					))}
					<div ref={ref} />
				</div>
			</WithError>
		</WithLoading>
	)
}
