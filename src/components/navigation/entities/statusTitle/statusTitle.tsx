import { Stack, Typography } from '@mui/material'
import { Cross } from '@/shared/ui/cross'

type PropsType = {
	close: () => void
	children: string
}

export const StatusTitle = ({ children, close }: PropsType) => {
	return (
		<Stack direction={'row'}>
			<Typography flexGrow={1}>{children}</Typography>
			<Cross onClick={close} />
		</Stack>
	)
}
