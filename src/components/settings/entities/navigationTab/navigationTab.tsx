import { Tab } from '@mui/material'
import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

type PropsType = {
	icon: ReactElement<any, any>
	label: string
	onClick?: () => void
	disabled?: boolean
	path?: string
}

export const NavigationTab = ({
	disabled,
	path,
	onClick,
	...props
}: PropsType & any) => {
	const navigate = useNavigate()

	const { selected } = props

	const handleClick = () => {
		if (!disabled) {
			path && !selected && navigate(path)
		}
		onClick && onClick()
	}

	return (
		<Tab
			{...props}
			component={'div'}
			onClick={handleClick}
			iconPosition='start'
			textColor={'transparent'}
			sx={{
				fontSize: '13px',
				fontWeight: 400,
				mb: '3px',
				letterSpacing: 0.8,
				textTransform: 'none',
				textAlign: 'start',
				minHeight: '32px',
				p: '4px 0 0 10px',
				opacity: 1,
				display: 'block',
				textWrap: 'nowrap',
				minWidth: '100%',
				borderRadius: selected ? '6px 0 0 6px' : '6px',
				bgcolor: selected ? 'secondary.main' : 'inherit',
				'&:hover': {
					borderRadius: '6px',
					bgcolor: 'success.light',
				},
				'&:focus': {
					bgcolor: 'secondary.main',
				},
			}}
		/>
	)
}
