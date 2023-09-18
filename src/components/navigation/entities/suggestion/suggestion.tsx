import { Stack, Typography } from '@mui/material'

type PropsType = {
	text: string
	setInputValue: (text: string) => void
	setEmoji: (value: string) => void
	icon: string
}

export const Suggestion = ({
	text,
	setInputValue,
	icon,
	setEmoji,
}: PropsType) => {
	const handleClick = () => {
		setEmoji(icon)
		setInputValue(text)
	}

	return (
		<Stack
			onClick={handleClick}
			direction={'row'}
			sx={{ userSelect: 'none', alignItems: 'center' }}
		>
			{icon}
			<Typography
				variant={'h4'}
				sx={{
					ml: '10px',
					fontSize: '12px',
					color: 'secondary.light',
					cursor: 'pointer',
					'&:hover': {
						color: '#2F81F7',
					},
				}}
			>
				{text}
			</Typography>
		</Stack>
	)
}
