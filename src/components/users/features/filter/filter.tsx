import { FilterList } from '@mui/icons-material'
import { Button, Dialog, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { FilterTitle } from '@/components/users/entities/filterTitle'
import { FilterUsersCount } from '@/components/users/entities/filterUsersCount'
import { SearchFilterByFriend } from '@/components/users/entities/searchFilterByFriend'

export const Filter = () => {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<Button onClick={handleClickOpen} sx={{ height: '100%' }}>
				<FilterList />
				<Typography>Filter</Typography>
			</Button>
			<Dialog onClose={handleClose} open={open}>
				<Stack sx={{ m: '20px', textAlign: 'center' }} spacing={2}>
					<FilterTitle />
					<SearchFilterByFriend />
					<FilterUsersCount />
				</Stack>
			</Dialog>
		</div>
	)
}
