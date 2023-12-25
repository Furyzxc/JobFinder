import { FilterList } from '@mui/icons-material'
import { Box, Dialog, DialogTitle, Stack } from '@mui/material'
import { useBoolean } from 'usehooks-ts'
import { WithSlide } from '@/shared/hoc'
import { ContainedButton } from '@/shared/ui/containedButton'
import { SearchUI } from '@/shared/ui/search'

export const NewsFilter = () => {
	const { value, setTrue, setFalse } = useBoolean(false)

	return (
		<Stack direction={'row'} spacing={3}>
			<SearchUI param={'q'} recentSearchStorage={'recent-news'} />
			<div style={{ padding: '7px 10px 0 0' }}>
				<ContainedButton onClick={setTrue} startIcon={<FilterList />}>
					Filter
				</ContainedButton>
			</div>
			<Dialog open={value} onClose={setFalse} keepMounted>
				<WithSlide direction={'up'} open={value}>
					<Stack>
						<Box sx={{ bgcolor: 'primary.light' }}>
							<Stack
								sx={{
									minWidth: '300px',
									height: '400px',
									textAlign: 'center',
									p: '10px',
									bgcolor: 'primary.light',
								}}
							>
								<DialogTitle sx={{ fontSize: 20 }}>News Filter</DialogTitle>
							</Stack>
						</Box>
					</Stack>
				</WithSlide>
			</Dialog>
		</Stack>
	)
}
