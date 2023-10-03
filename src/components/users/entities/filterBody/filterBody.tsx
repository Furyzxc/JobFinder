import { FilterList } from '@mui/icons-material'
import { Box, Button, Dialog, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import { WithSlide } from '@/shared/hoc'
import { useMuiDialog } from '@/shared/model/hooks'
import { FilterTitle } from '../filterTitle'
import { FilterUsersCount } from '../filterUsersCount'
import { SearchFilterByFriend } from '../searchFilterByFriend'

export const FilterBody = memo(() => {
	const { open, setOpen, onClose } = useMuiDialog(false)

	const openDialog = () => setOpen(true)

	return (
		<>
			<Button onClick={openDialog} sx={{ height: '100%' }}>
				<FilterList />
				<Typography>Filter</Typography>
			</Button>
			<Dialog onClose={onClose} open={open} sx={{ p: '20px' }}>
				<WithSlide direction={'up'} open={open}>
					<Box sx={{ bgcolor: 'primary.light' }}>
						<Stack
							sx={{
								m: '20px',
								textAlign: 'center',
								p: '10px',
								bgcolor: 'primary.light',
							}}
							spacing={2}
						>
							<FilterTitle />
							<FilterUsersCount />
							<SearchFilterByFriend />
						</Stack>
					</Box>
				</WithSlide>
			</Dialog>
		</>
	)
})
