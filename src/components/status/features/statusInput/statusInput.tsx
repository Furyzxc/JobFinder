import { SentimentSatisfiedOutlined } from '@mui/icons-material'
import { Box, Stack, TextField } from '@mui/material'

type PropsType = {
	bind: {
		value: string
		onChange: (value: any) => void
	}
	emoji: string
}

export const StatusInput = ({ emoji, bind }: PropsType) => {
	return (
		<Stack direction={'row'} spacing={2}>
			<Box
				sx={{
					userSelect: 'none',
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
			<TextField
				sx={{ pb: '20px' }}
				autoComplete={'off'}
				id={'status'}
				{...bind}
				variant={'standard'}
				label={"What's happening?"}
			/>
		</Stack>
	)
}
