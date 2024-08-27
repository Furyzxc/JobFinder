import { Link, Stack } from '@mui/material'
import { Link as RouteLink } from 'react-router-dom'

const sx = { fontSize: 12 }

type PropsType = {
	onClick: any
}
export const Footer = (props: PropsType) => {
	return (
		<Stack sx={{ pb: '6px' }} spacing={1}>
			<RouteLink
				to={'/about'}
				style={{ textDecoration: 'none', textAlign: 'center' }}
				{...props}
			>
				<Link
					sx={{
						fontSize: 13,
						outline: 'none',
					}}
					color={'warning.main'}
				>
					Jobfinder - Social Network
				</Link>
			</RouteLink>
			<Stack direction={'row'} spacing={1}>
				<Link href={'https://github.com/Furyzxc/jobfinder'} sx={sx}>
					GitHub
				</Link>
				{/*<Link href={'https://sergey-ananyev.netlify.app/'} sx={sx}>*/}
				{/*	Developer*/}
				{/*</Link>*/}
			</Stack>
		</Stack>
	)
}
