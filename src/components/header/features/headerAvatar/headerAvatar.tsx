import {
	Logout,
	ManageAccountsOutlined,
	MoreVert,
	PermIdentityOutlined,
	Settings,
} from '@mui/icons-material'
import {
	Divider,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Stack,
	Tooltip,
	Typography,
	useMediaQuery,
} from '@mui/material'
import { MouseEvent, ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAvatar } from '@/shared/ui/userAvatar'
import { useLogoutMutation } from '@/components/authorization'

type PropsType = {
	name: string
	avatar: string | null
}

export function HeaderAvatar({ avatar, name }: PropsType) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const navigate = useNavigate()

	const navigateToPage = (page: string) => () => {
		handleClose()
		navigate(page)
	}
	const matches = useMediaQuery('(min-width: 780px)')
	const [logout] = useLogoutMutation()
	const signout = () => {
		handleClose()
		logout()
	}
	return (
		<>
			<Stack
				spacing={2}
				direction={'row'}
				sx={{ alignItems: 'center', textAlign: 'center' }}
			>
				<span
					onClick={navigateToPage('/profile')}
					style={{ cursor: 'pointer' }}
				>
					<UserAvatar avatar={avatar} name={name} />
				</span>
				{matches && <Typography noWrap>{name}</Typography>}
				<Tooltip title='Account settings'>
					<IconButton
						onClick={handleClick}
						size='small'
						sx={{ ml: 2 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
					>
						<MoreVert />
					</IconButton>
				</Tooltip>
			</Stack>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						bgcolor: 'primary.light',
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&::before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<StyledMenuItem
					onClick={navigateToPage('/profile')}
					body={'Profile'}
					icon={<PermIdentityOutlined fontSize='small' />}
				/>
				<StyledMenuItem
					onClick={navigateToPage('/settings/profile')}
					body={'My account'}
					icon={<ManageAccountsOutlined fontSize='small' />}
				/>
				<Divider />
				<StyledMenuItem
					onClick={navigateToPage('/settings')}
					body={'Settings'}
					icon={<Settings fontSize='small' />}
				/>
				<StyledMenuItem
					onClick={signout}
					body={'Logout'}
					icon={<Logout fontSize='small' />}
				/>
			</Menu>
		</>
	)
}

type Props = {
	onClick: () => void
	body: string
	icon: ReactElement<any, any>
}

function StyledMenuItem({ body, icon, onClick }: Props) {
	return (
		<MenuItem onClick={onClick}>
			<ListItemIcon>{icon}</ListItemIcon>
			{body}
		</MenuItem>
	)
}
