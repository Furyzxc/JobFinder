import { FilterList } from '@mui/icons-material'
import { Box, Dialog, Stack } from '@mui/material'
import { memo } from 'react'
import { useBoolean } from 'usehooks-ts'
import { WithSlide } from '@/shared/hoc'
import { ContainedButton } from '@/shared/ui/containedButton'
import { FilterTitle } from '../filterTitle'
import { FilterUsersCount } from '../filterUsersCount'
import { SearchFilterByFriend } from '../searchFilterByFriend'

export const FilterBody = memo(() => {
	const { value, setTrue, setFalse } = useBoolean(false)

	return (
		<>
			<div style={{ paddingTop: '10px' }}>
				<ContainedButton startIcon={<FilterList />} onClick={setTrue}>
					Filter
				</ContainedButton>
			</div>
			<Dialog onClose={setFalse} open={value} sx={{ p: '20px' }}>
				<WithSlide direction={'up'} open={value}>
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
