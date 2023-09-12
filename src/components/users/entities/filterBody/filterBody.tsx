import { FilterList } from '@mui/icons-material'
import { Button, Dialog, Stack, Typography } from '@mui/material'
import { memo, useCallback, useState } from 'react'
import { FilterTitle } from '../filterTitle'
import { FilterUsersCount } from '../filterUsersCount'
import { SearchFilterByFriend } from '../searchFilterByFriend'

export const FilterBody = memo(() => {
	const [open, setOpen] = useState(false)

	const handleClickOpen = useCallback(() => setOpen(true), [])

	const handleClose = useCallback(() => setOpen(false), [])

	return (
		<div>
			<Button onClick={handleClickOpen} sx={{ height: '100%' }}>
				<FilterList />
				<Typography>Filter</Typography>
			</Button>
			<Dialog onClose={handleClose} open={open}>
				<Stack
					sx={{
						m: '20px',
						textAlign: 'center',
						p: '10px',
					}}
					spacing={2}
				>
					<FilterTitle />
					<FilterUsersCount />
					<SearchFilterByFriend />
				</Stack>
			</Dialog>
		</div>
	)
})
