import { Grid, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import { UserAvatar } from '@/shared/ui/avatar'
import { MainInfoEntity } from '../mainInfoEntity'

type PropsType = {
	name: string
	bio: string
	avatar: string | null
}

export const MainProfileInfo = memo(({ name, bio, avatar }: PropsType) => {
	console.log(name)
	return (
		<Grid container wrap={'wrap-reverse'} spacing={2}>
			<Grid item xs={12} sm={7}>
				<Stack spacing={1}>
					<MainInfoEntity
						name={'Name'}
						fieldName={'name'}
						initialValue={name}
						description={'Your name will appear around JobFinder.'}
					/>
					<MainInfoEntity
						name={'Bio'}
						fieldName={'bio'}
						initialValue={bio}
						multiline
					/>
				</Stack>
			</Grid>

			<Grid item xs={12} sm={4}>
				<Stack>
					<Typography>Public picture</Typography>
					<UserAvatar avatar={avatar} name={name} size={'150px'} />
				</Stack>
			</Grid>
		</Grid>
	)
})
