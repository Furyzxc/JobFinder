import { Box, Slider, Stack, Typography, styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useInput } from '@/shared/model/hooks'

const TinyText = styled(Typography)({
	fontSize: '0.75rem',
	opacity: 0.7,
	fontWeight: 500,
	letterSpacing: 0.2,
	color: 'white',
})

const TextContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	mt: '-5px',
})

export const FilterUsersCount = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { bind } = useInput(Number(searchParams.get('count')) || 10)

	const handleBlur = () => {
		// go back on first page after changing count
		searchParams.set('count', bind.value)
		searchParams.delete('page')

		setSearchParams(searchParams)
	}
	return (
		<Stack>
			<StyledSlider {...bind} onBlur={handleBlur} />
			<TextContainer>
				<TinyText>{bind.value}</TinyText>
				<TinyText>100</TinyText>
			</TextContainer>
		</Stack>
	)
}

type Props = {
	onBlur: () => void
	value: number
	onChange: (e: any) => void
}

function StyledSlider(props: Props) {
	return (
		<Slider
			{...props}
			min={10}
			max={100}
			valueLabelDisplay='off'
			sx={{
				'&:hover, &:active': {
					'& .MuiSlider-track': {
						color: 'warning.dark',
					},
					'& .MuiSlider-thumb': {
						opacity: 1,
					},
				},
				'& .MuiSlider-thumb': {
					opacity: 0,
					width: 10,
					color: 'secondary.light',
					boxShadow: 'none !important',
					height: 10,
					transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
					'&:hover, &.Mui-focusVisible': {
						opacity: 1,
					},
					'&.Mui-active': {
						opacity: 1,
						width: 15,
						height: 15,
					},
				},
				'& .MuiSlider-rail': {
					color: 'secondary.light',
				},
				'& .MuiSlider-track': {
					color: 'secondary.light',
				},
			}}
		/>
	)
}
