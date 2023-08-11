import { Box, Button, Stack, Typography } from '@mui/material'
import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useIcons } from '@/components/navigation/model/hooks/useIcons.tsx'

type PropsType = {
	setIsShow: (value: boolean) => void
	navRef: any
}

export const Navigation = ({ setIsShow, navRef }: PropsType) => {
	const icons = useIcons()

	const handleClick = () => setIsShow(false)

	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		if (isInView) {
			animate(scope.current, { left: 0 })
		}
	}, [animate, isInView, scope])

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
				{icons.map(({ name, path, icon }) => (
					<Link to={path} key={name}>
						<Button
							sx={{
								textAlign: 'none',
								minWidth: '100%',
								justifyContent: 'flex-start',
								height: '32px',
								color: '#7D8590',
							}}
							onClick={handleClick}
							startIcon={icon}
						>
							<Typography
								variant={'h1'}
								sx={{ color: '#E6EDF3', fontSize: '13px', pt: '5px' }}
							>
								{name}
							</Typography>
						</Button>
					</Link>
				))}
			</Box>
		</Stack>
	)
}
