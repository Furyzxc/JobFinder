import { FilterList } from '@mui/icons-material'
import { Box, Dialog, DialogTitle, Stack } from '@mui/material'
import { WithSlide } from '@/shared/hoc'
import { useMuiDialog } from '@/shared/model/hooks'
import { ContainedButton } from '@/shared/ui/containedButton'
import { Input } from '@/shared/ui/input'
import { NewsInput } from '@/components/news/entities/newsInput'

export const NewsFilter = () => {
	const { open, setOpen, onClose } = useMuiDialog(false)

	const openFilter = () => setOpen(true)
	return (
		<Stack direction={'row'} sx={{ p: '10px 10px 0 10px' }}>
			<NewsInput />
			<ContainedButton onClick={openFilter} startIcon={<FilterList />}>
				Filter
			</ContainedButton>
			<Dialog open={open} onClose={onClose} keepMounted>
				<WithSlide direction={'up'} open={open}>
					<Stack>
						<Box sx={{ bgcolor: 'primary.light' }}>
							<Stack
								sx={{
									textAlign: 'center',
									p: '10px',
									bgcolor: 'primary.light',
								}}
								spacing={2}
							>
								<DialogTitle sx={{ fontSize: 20 }}>News Filter</DialogTitle>
								<Stack direction={'row'} width={'900px'}>
									<Stack>
										<Input
											placeholder={'Type sites you want to see in response'}
										/>
										<Input
											placeholder={
												'Type sites you do not want to see in response'
											}
										/>
										<Input placeholder={'Language'} />
									</Stack>
									<Stack>
										<Stack direction={'row'}>
											<Input placeholder={'Sort by'} />
										</Stack>
									</Stack>
								</Stack>
							</Stack>
						</Box>
					</Stack>
				</WithSlide>
			</Dialog>
		</Stack>
	)
}
