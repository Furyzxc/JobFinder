import { Grid, Stack, Typography } from '@mui/material'
import s from './description.module.css'
import {
	DescriptionSectionProps,
	contactImages,
	contactNames,
} from './objects.tsx'

export const DescriptionSection = ({
	socialAccounts,
	lookingForAJobDescription,
	lookingForAJob,
}: DescriptionSectionProps) => {
	return (
		<Grid container>
			<Grid item xs={12} sm={6} sx={{ mb: '40px' }}>
				<Stack direction={'column'}>
					<Stack direction={'row'} spacing={1} sx={{ mb: '30px' }}>
						<Typography>Looking for a job:</Typography>
						<Typography variant='h6' color={'primary'} sx={{ width: '140px' }}>
							{JSON.stringify(lookingForAJob)}
						</Typography>
					</Stack>
				</Stack>
				<Grid item>
					<Stack direction={'row'} spacing={2}>
						<Typography>Description:</Typography>
						<Typography variant={'h6'} color={'primary'}>
							{lookingForAJobDescription
								? lookingForAJobDescription
								: 'Currently no description'}
						</Typography>
					</Stack>
				</Grid>
			</Grid>

			<Grid item container spacing={2} xs={6} sx={{ minWidth: '300px' }}>
				{Object.keys(socialAccounts).map(key => (
					<Grid item xs={3} sx={{ mb: '60px' }} key={key}>
						<a href={socialAccounts[key] || ''} className={s.contact}>
							<Stack direction={'column'}>
								{contactImages[key]}
								<Typography
									variant={'h3'}
									sx={{
										fontSize: '14px',
										opacity: socialAccounts[key] ? 1 : 0.5,
									}}
								>
									{contactNames[key]}
								</Typography>
								<Typography
									variant={'h4'}
									className={s.showContact}
									sx={{
										fontSize: '12px',
										color: '#42a5f5',
										position: 'absolute',
										bottom: '-20px',
									}}
								>
									{socialAccounts[key] ? socialAccounts[key] : 'Not specified'}
								</Typography>
							</Stack>
						</a>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}
