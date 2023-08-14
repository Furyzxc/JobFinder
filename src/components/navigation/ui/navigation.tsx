import { CloseSharp } from '@mui/icons-material'
import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import siteIcon from '@/assets/melon.png'
import { useAnimation } from '@/shared/model/hooks'
import { useIcons } from '../model/hooks/useIcons.tsx'

type PropsType = {
	setIsShow: (value: boolean) => void
	navRef: any
}

export const Navigation = ({ setIsShow, navRef }: PropsType) => {
	const icons = useIcons()

	const { ref } = useAnimation({ left: 0 }, { left: -300 }, 0.1)

	const navigate = useNavigate()

	const closeNavigation = useCallback(() => setIsShow(false), [setIsShow])

	const handleNavElementClick = (pathname: string) => () => {
		closeNavigation()
		navigate(pathname)
	}

	return (
		<Box
			ref={ref}
			className={'height'}
			sx={{
				overflow: 'hidden',
				position: 'absolute',
				width: '100%',
				top: 0,
				left: -300,
				zIndex: 1,
				backgroundColor: '#343942BD',
			}}
		>
			<Stack
				className={'height'}
				sx={{
					background: '#161B22',
					width: '300px',
					p: '10px 10px 0 10px',
					overflow: 'hidden',
				}}
				ref={navRef}
			>
				<Grid container>
					<Grid item xs>
						<Avatar
							src={siteIcon}
							sx={{ height: '31px', width: '31px', mb: '10px' }}
						/>
					</Grid>
					<Grid item sx={{ cursor: 'pointer' }} onClick={closeNavigation}>
						<CloseSharp fontSize={'small'} />
					</Grid>
				</Grid>
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
			</Stack>
		</Box>
	)
}
