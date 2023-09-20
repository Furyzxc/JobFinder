import { Avatar, Dialog, Grid, Stack } from '@mui/material'
import siteIcon from '@/assets/melon.png'
import { WithSlide } from '@/shared/hoc'
import { Cross } from '@/shared/ui/cross'
import { Navigates } from '../features/navigates'

type PropsType = {
	closeNavigation: () => void
	open: boolean
}

export const Navigation = ({ closeNavigation, open }: PropsType) => {
	return (
		<Dialog
			keepMounted
			open={open}
			onClose={closeNavigation}
			className={'height'}
			PaperProps={{
				sx: {
					m: 0,
					position: 'absolute',
					left: 0,
					top: 0,
					minHeight: '100vh',
				},
			}}
		>
			<WithSlide open={open} direction={'right'}>
				<Stack
					className={'height'}
					sx={{
						alignSelf: 'start',
						bgcolor: 'primary.light',
						width: '300px',
						p: '10px 10px 0 10px',
						overflow: 'hidden',
					}}
				>
					<Grid container>
						<Grid item xs>
							<Avatar
								src={siteIcon}
								sx={{ height: '31px', width: '31px', mb: '10px' }}
							/>
						</Grid>
						<Grid item sx={{ cursor: 'pointer' }} onClick={closeNavigation}>
							<Cross onClick={closeNavigation} />
						</Grid>
					</Grid>
					<Navigates close={closeNavigation} />
				</Stack>
			</WithSlide>
		</Dialog>
	)
}
