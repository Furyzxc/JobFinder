import { Box, Stack, Typography, styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useInput } from '@/shared/model/hooks'
import { StyledSlider } from '@/shared/ui/slider'

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
