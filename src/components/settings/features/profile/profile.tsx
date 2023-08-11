import { Button, Grid, Stack, Typography } from '@mui/material'
import { UserAvatar } from '@/shared/ui/avatar'
import { Input } from '@/shared/ui/input'
import { useEntities, useOwnerInfo } from '../../model/hooks'
import s from './style.module.css'
import { Section } from '@/components/settings/entities/profileSection/profileSection.tsx'
import { SocialLinks } from '@/components/settings/entities/socialLinks'

export const Profile = () => {
	const entities = useEntities()
	const {
		info: {
			fullName: name,
			photos: { small: avatar },
		},
	} = useOwnerInfo()

	return (
		<Stack direction={'column'} spacing={2}>
			<div>
				<Typography
					variant={'h6'}
					className={s.title}
					sx={{ fontSize: '25px' }}
				>
					Public Profile
				</Typography>
			</div>
			<Grid container>
				<Grid item xs={7} sm={7}>
					{entities.map(({ name, description, ...inputProps }) => (
						<Section name={name} description={description} key={name}>
							<Input {...inputProps} />
						</Section>
					))}
				</Grid>
				<Grid item xs={4} sm={4}>
					<Stack>
						<Typography>Public picture</Typography>
						<UserAvatar avatar={avatar} name={name} size={'150px'} />
					</Stack>
				</Grid>
			</Grid>
			<Section name={'Social Accounts'}>
				<SocialLinks />
			</Section>
			<Button
				variant={'contained'}
				sx={{ background: '#238636', maxWidth: '130px' }}
				size={'small'}
			>
				Update profile
			</Button>
		</Stack>
	)
}
