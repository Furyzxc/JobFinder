import { FilterList } from '@mui/icons-material'
import { Box, Dialog, Stack } from '@mui/material'
import { memo } from 'react'
import { WithSlide } from '@/shared/hoc'
import { useMuiDialog } from '@/shared/model/hooks'
import { ContainedButton } from '@/shared/ui/containedButton'
import { FilterTitle } from '../filterTitle'
import { FilterUsersCount } from '../filterUsersCount'
import { SearchFilterByFriend } from '../searchFilterByFriend'

export const FilterBody = memo(() => {
	const { open, setOpen, onClose } = useMuiDialog(false)

	const openDialog = () => setOpen(true)

	return (
		<>
			<div style={{ paddingTop: '10px' }}>
				<ContainedButton startIcon={<FilterList />} onClick={openDialog}>
					Filter
				</ContainedButton>
			</div>
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
