import { Avatar, Dialog, Grid, Slide, Stack } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { Ref, forwardRef } from 'react'
import siteIcon from '@/assets/melon.png'
import { Cross } from '@/shared/ui/cross'
import { Navigates } from '../features/navigates'

type TransitionProp = TransitionProps & {
	children: React.ReactElement<any, any>
}

const Transition = forwardRef((props: TransitionProp, ref: Ref<unknown>) => (
	<Slide direction='right' ref={ref} {...props} />
))

type PropsType = {
	closeNavigation: () => void
	open: boolean
}

export const Navigation = ({ closeNavigation, open }: PropsType) => {
	return (
		<Dialog
			TransitionComponent={Transition}
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
		</Dialog>
	)
}
