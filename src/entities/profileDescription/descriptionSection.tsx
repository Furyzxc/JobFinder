import { Button, Grid, Typography } from '@mui/material'
import s from './description.module.css'
import {
	DescriptionSectionProps,
	contactImages,
	contactNames,
} from './objects.tsx'

export const DescriptionSection = ({
	contacts,
	lookingForAJobDescription,
	lookingForAJob,
}: DescriptionSectionProps) => {
	return (
		<Grid container>
			<Grid item xs={6} sx={{ mb: '40px' }}>
				<Grid container sx={{ color: 'white', fontSize: '18px' }}>
					<Grid item container sx={{ mb: '30px' }} spacing={2}>
						<Grid item xs={'auto'}>
							<Typography>Looking for a job:</Typography>
						</Grid>
						<Grid item xs={1}>
							<Button variant='text' sx={{ width: '140px' }}>
								{JSON.stringify(lookingForAJob)}
							</Button>
						</Grid>
					</Grid>
					<Grid item container spacing={2}>
						<Grid item>
							<Typography>Description:</Typography>
						</Grid>
						<Grid item>
							<Typography variant={'h6'} color={'primary'}>
								{lookingForAJobDescription
									? lookingForAJobDescription
									: 'Currently no description'}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid item container spacing={2} xs={6} sx={{ minWidth: '300px' }}>
				{Object.keys(contacts).map(key => (
					<Grid item xs={3} sx={{ mb: '60px' }} key={key}>
						<a href={contacts[key] || ''} className={s.contact}>
							<Grid container>
								<Grid item xs={12}>
									{contactImages[key]}
								</Grid>
								<Grid item xs={12}>
									{contactNames[key]}
								</Grid>
								<Grid
									className={s.showContact}
									sx={{
										color: '#42a5f5',
										position: 'absolute',
										bottom: '-20px',
									}}
								>
									{contacts[key] ? contacts[key] : 'Not specified'}
								</Grid>
							</Grid>
						</a>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}
