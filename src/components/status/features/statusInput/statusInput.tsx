import { SentimentSatisfiedOutlined } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
import { Input } from '@/shared/ui/input'

type PropsType = {
	bind: {
		value: string
		onChange: (value: any) => void
	}
	emoji: string
}

export const StatusInput = ({ emoji, bind }: PropsType) => {
	return (
		<Stack direction={'row'}>
			<Box
				sx={{
					userSelect: 'none',
					bgcolor: 'error.dark',
					width: '40px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					borderRadius: '4px 0 0 4px',
				}}
			>
				<label htmlFor={'status'}>
					{emoji || <SentimentSatisfiedOutlined />}
				</label>
			</Box>
			<Input
				autoComplete={'off'}
				id={'status'}
				{...bind}
				placeholder={"What's happening?"}
			/>
		</Stack>
	)
}
