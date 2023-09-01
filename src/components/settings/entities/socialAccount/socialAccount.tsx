import { Box, Grid, Stack, TextField } from '@mui/material'
import { ReactNode, memo } from 'react'
import { useSocialAccount } from '../../model/hooks'
import { SocialAccountType } from '../../model/slice.ts'

type PropsType = {
	icon: ReactNode
	initialValue: string | null
	fieldName: SocialAccountType
}

export const SocialAccount = memo(
	({ icon, initialValue, fieldName }: PropsType) => {
		const bindInput = useSocialAccount(fieldName, initialValue || '')

		return (
			<Stack direction={'row'}>
				<Box sx={{ pt: '5px', mr: '10px' }}>{icon}</Box>
				<Grid container>
					<Grid item xs={10} md={7} sm={8}>
						<TextField
							{...bindInput}
							inputProps={{ style: { fontSize: 12 } }}
							placeholder={'Link to social profile'}
							sx={{
								fontSize: '12px',
								fontWeight: '100',
								width: '100%',
								backgroundColor: '#0D1117',
							}}
							size={'small'}
						/>
					</Grid>
				</Grid>
			</Stack>
		)
	}
)
