import { Typography } from '@mui/material'
import { FocusEvent, useEffect, useState } from 'react'
import { Input } from '@/shared/ui/input/input.tsx'
import { useGetUserStatusQuery, useSetStatusMutation } from '@/slices/profile'
import s from './status.module.css'

interface StatusProps {
	isOwner: boolean
	userId: number
}

export const Status = ({ isOwner, userId }: StatusProps) => {
	const { data: statusValueResponse, isSuccess } = useGetUserStatusQuery(userId)
	const [setStatus] = useSetStatusMutation()

	const [statusValue, setStatusValue] = useState('')

	useEffect(() => {
		if (isSuccess && statusValueResponse) setStatusValue(statusValueResponse)
	}, [isSuccess, statusValueResponse])

	const handleBlur = (e: FocusEvent<HTMLInputElement>) =>
		setStatus({ status: e.target.value })

	if (!isOwner)
		return (
			<div className={s.userStatus}>
				<Typography
					sx={{
						fontSize: 18,
						color: 'white',
						borderBottom: '2px solid #42A5F5',
						mb: '20px',
					}}
				>
					{' '}
					Status{' '}
				</Typography>
				<Typography variant='h6'>
					{statusValue || (
						<span style={{ color: 'grey' }}>User did not enter status</span>
					)}
				</Typography>
			</div>
		)

	return <Input name='Status' onBlur={handleBlur} key={1} value={statusValue} />
}
