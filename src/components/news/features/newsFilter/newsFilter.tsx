import { FilterList } from '@mui/icons-material'
import { Box, Dialog, DialogTitle, Stack } from '@mui/material'
import { WithSlide } from '@/shared/hoc'
import { useMuiDialog } from '@/shared/model/hooks'
import { ContainedButton } from '@/shared/ui/containedButton'
import { NewsInput } from '@/components/news/entities/newsInput'

export const NewsFilter = () => {
	const { open, setOpen, onClose } = useMuiDialog(false)

	const openFilter = () => setOpen(true)
	return (
		<Stack direction={'row'} spacing={3}>
			<NewsInput />
			<div style={{ padding: '7px 10px 0 0' }}>
				<ContainedButton onClick={openFilter} startIcon={<FilterList />}>
					Filter
				</ContainedButton>
			</div>
			<Dialog open={open} onClose={onClose} keepMounted>
				<WithSlide direction={'up'} open={open}>
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
