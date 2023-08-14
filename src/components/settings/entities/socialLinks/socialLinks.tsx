import { Box, Grid, Stack, TextField } from '@mui/material'
import { ChangeEvent, FocusEvent, memo, useEffect, useMemo } from 'react'
import { useActions } from '@/shared/model/hooks'
import { Link, useSocialAccounts, useSocialLinks } from '../../model/hooks'
import { Section } from '../profileSection'

const SocialAccount = memo(({ icon, defaultValue, name }: Link) => {
	const socialAccounts = useSocialAccounts()
	const value = socialAccounts[name]
	const { setAccountValue } = useActions()

	useEffect(() => {
		setAccountValue({ fieldName: name, value: defaultValue })
	}, [defaultValue, name, setAccountValue])

	const setValue = useMemo(
		() => (value: string) => {
			setAccountValue({ fieldName: name, value })
		},
		[name, setAccountValue]
	)

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setValue(target.value)
	}

	const handleBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) => {
		if (value) {
			if (!value.startsWith('https://')) {
				setValue('https://' + value)
			} else {
				setValue(value)
			}
		}
	}

	return (
		<Grid container>
			<Grid item xs={1.5} md={0.6} sm={0.6}>
				<Box sx={{ pt: '5px' }}>{icon}</Box>
			</Grid>
			<Grid item xs={10} md={7} sm={8}>
				<TextField
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
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
	)
})

export const SocialLinks = () => {
	const links = useSocialLinks()

	return (
		<Section name={'Social Accounts'}>
			<Stack direction={'column'} spacing={1}>
				{links.map(linkProps => (
					<SocialAccount {...linkProps} />
				))}
			</Stack>
		</Section>
	)
}
