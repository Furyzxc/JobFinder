import { Slider, SliderProps } from '@mui/material'

export function StyledSlider(props: SliderProps) {
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
