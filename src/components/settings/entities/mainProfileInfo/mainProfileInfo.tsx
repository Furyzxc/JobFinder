import { Grid, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import { UserAvatar } from '@/shared/ui/avatar'
import { Input } from '@/shared/ui/input'
import { Section } from '@/components/settings/entities/profileSection'
import { useEntities, useOwnerInfo } from '@/components/settings/model/hooks'

export const MainProfileInfo = memo(() => {
	const entities = useEntities()

	const { info } = useOwnerInfo()

	const name = info?.name
	const avatar = info?.photos.avatar

	if (name !== undefined) {
		return (
			<Grid container wrap={'wrap-reverse'} spacing={2}>
				<Grid item xs={12} sm={7}>
					<Stack spacing={1}>
						{entities.map(({ name, description, ...inputProps }) => (
							<Section name={name} description={description} key={name}>
								<Input {...inputProps} />
							</Section>
						))}
					</Stack>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Stack>
						<Typography>Public picture</Typography>
						<UserAvatar avatar={avatar} name={name || ''} size={'150px'} />
					</Stack>
				</Grid>
			</Grid>
		)
	}
})
