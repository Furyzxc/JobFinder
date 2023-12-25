import { Snackbar } from '@mui/material'
import { ReactNode } from 'react'
import { useBoolean } from 'usehooks-ts'

type PropsType = {
	children: ReactNode
	isError: boolean
}

export const WithError = ({ children, isError }: PropsType) => {
	// if (isError) {
	// 	return <Div>Some error occurred...</Div>
	// }

	const { value, setFalse } = useBoolean(isError)

	return (
		<>
			{children}
			<Snackbar
				message='Some error occured...'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={value}
				onClose={setFalse}
			/>
		</>
	)
}
