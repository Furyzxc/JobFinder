import { Tab } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FocusedButton } from '@/shared/ui/focusedButton'

type PropsType = {
	startIcon: ReactNode
	name: string
	path: string
	endIcon?: ReactNode
	onClick?: () => void
	disabled?: boolean
}

export const NavigationElement = ({
	name,
	path,
	startIcon,
	endIcon,
	disabled,
	onClick,
}: PropsType) => {
	const navigate = useNavigate()

	const urlParams = useParams()
	const urlPath = urlParams['*']

	const handleClick = () => {
		if (urlPath !== path) {
			onClick && onClick()
			!disabled && navigate(path)
		}
	}

	return (
		<FocusedButton
			startIcon={startIcon}
			endIcon={endIcon}
			selected={urlPath === path}
			onClick={handleClick}
		>
			{name}
		</FocusedButton>
	)
}

type Props = {
	icon: ReactElement<any, any>
	label: string
	onClick?: () => void
	disabled?: boolean
	path?: string
}

export const NavigationTab = ({ disabled, path, onClick, ...props }: Props) => {
	const urlParams = useParams()
	const urlPath = urlParams['*']

	const selected = path && path === urlPath
	console.log(selected)

	const navigate = useNavigate()

	const handleClick = () => {
		if (!disabled) {
			path && navigate(path)
		}
		onClick && onClick()
	}

	return (
		<Tab
			{...props}
			component={'div'}
			onClick={handleClick}
			iconPosition='start'
			sx={{
				fontSize: '13px',
				fontWeight: 400,
				mb: '3px',
				letterSpacing: 0.8,
				textTransform: 'none',
				textAlign: 'start',
				minHeight: '32px',
				p: '4px 0 0 15px',
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
