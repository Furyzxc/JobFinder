import { CloseSharp } from '@mui/icons-material'
import { Avatar, Box, Grid, Stack } from '@mui/material'
import siteIcon from '@/assets/melon.png'
import { FocusedButton } from '@/shared/ui/focusedButton'
import { useNavigation } from '../model/hooks'

type PropsType = {
	setIsShow: (value: boolean) => void
	navRef: any
}

export const Navigation = ({ setIsShow, navRef }: PropsType) => {
	const { animationRef, icons, closeNavigation, handleNavElementClick } =
		useNavigation(setIsShow)

	return (
		<Box
			ref={animationRef}
			className={'height'}
			sx={{
				overflow: 'hidden',
				position: 'absolute',
				width: '100%',
				top: 0,
				left: -300,
				zIndex: 2,
				backgroundColor: '#343942BD',
			}}
		>
			<Stack
				className={'height'}
				sx={{
					bgcolor: 'primary.light',
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
					<FocusedButton
						key={name}
						startIcon={icon}
						endIcon={endIcon}
						onClick={isClickAccepted && handleNavElementClick(path)}
					>
						{name}
					</FocusedButton>
				))}
			</Stack>
		</Box>
	)
}
