import { Box, Button, Stack, Typography } from '@mui/material'
import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useIcons } from '../model/hooks/useIcons.tsx'

type PropsType = {
	setIsShow: (value: boolean) => void
	navRef: any
}

export const Navigation = ({ setIsShow, navRef }: PropsType) => {
	const icons = useIcons()

	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		if (isInView) {
			animate(scope.current, { left: 0 })
		}
	}, [animate, isInView, scope])

	const navigate = useNavigate()

	const handleNavElementClick = (pathname: string) => () => {
		setIsShow(false)
		navigate(pathname)
	}

	return (
		<Stack
			ref={scope}
			className={'height'}
			sx={{
				position: 'absolute',
				width: '150%',
				top: 0,
				left: -300,
				zIndex: 1,
				backgroundColor: '#343942BD',
			}}
		>
			<Box
				sx={{
					background: '#161B22',
					height: '100%',
					width: '300px',
					p: '0 10px',
				}}
				ref={navRef}
			>
				{icons.map(({ name, path, icon, isClickAccepted, endIcon }) => (
					<Button
						key={name}
						sx={{
							textAlign: 'none',
							minWidth: '100%',
							justifyContent: 'flex-start',
							height: '32px',
							color: '#7D8590',
						}}
						onClick={isClickAccepted && handleNavElementClick(path)}
						startIcon={icon}
						endIcon={endIcon}
					>
						<Typography
							variant={'h1'}
							sx={{
								color: '#E6EDF3',
								fontSize: '13px',
								textAlign: 'start',
								pt: '5px',
								flexGrow: 1,
							}}
						>
							{name}
						</Typography>
					</Button>
				))}
			</Box>
		</Stack>
	)
}
