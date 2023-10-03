import { Grid, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import { AvatarChooser } from '../avatarChooser'
import { MainInfoEntity } from '../mainInfoEntity'

type PropsType = {
	name: string
	bio: string
	avatar: string | null
}

export const MainProfileInfo = memo(({ name, bio, avatar }: PropsType) => {
	return (
		<Grid container wrap={'wrap-reverse'} spacing={2}>
			<Grid item xs={12} sm={7}>
				<Stack spacing={1}>
					<MainInfoEntity
						name={'name'}
						autoComplete={'nickname'}
						fieldName={'name'}
						initialValue={name}
						description={'Your name will appear around JobFinder.'}
					/>
					<MainInfoEntity
						name={'Bio'}
						autoComplete={'off'}
						fieldName={'bio'}
						initialValue={bio}
						multiline
					/>
				</Stack>
			</Grid>

			<Grid item xs={12} sm={4}>
				<Stack>
					<Typography>Public picture</Typography>
					{/*<UserAvatar avatar={avatar} name={name} size={'150px'} />*/}
					<AvatarChooser img={avatar} name={name} />
				</Stack>
			</Grid>
		</Grid>
	)
})
