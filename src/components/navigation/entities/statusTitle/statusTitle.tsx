import { Stack, Typography } from '@mui/material'
import { Children } from '@/shared/types'
import { Cross } from '@/shared/ui/cross'

type PropsType = {
	close: () => void
} & Children

export const StatusTitle = ({ children, close }: PropsType) => {
	return (
		<Stack direction={'row'}>
			<Typography flexGrow={1}>{children}</Typography>
			<Cross onClick={close} />
		</Stack>
	)
}
