import { Slide } from '@mui/material'
import { ReactElement } from 'react'

type Direction = 'right' | 'left' | 'up' | 'down'

type PropsType = {
	direction: Direction
	open: boolean
	children: ReactElement<any, any>
}

export const WithSlide = ({ direction, open, children }: PropsType) => {
	// add keepMounted prop to component to use it
	return (
		<Slide in={open} direction={direction} mountOnEnter unmountOnExit>
			{children}
		</Slide>
	)
}
