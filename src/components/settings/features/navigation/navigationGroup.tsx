import { Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IEntity } from '@/components/settings/features/navigation/objects.tsx'

type PropsType = {
	entities: IEntity[]
}

export const NavigationGroup = ({ entities }: PropsType) => {
	const [selected, setSelected] = useState(0)

	return (
		<Stack>
			{entities.map(({ name, icon, path }, id) => (
				<Link to={path} style={{ marginRight: '10px' }} key={name}>
					<Button
						sx={{
							textAlign: 'none',
							minWidth: '100%',
							justifyContent: 'flex-start',
							height: '32px',
							color: '#7D8590',
							backgroundColor: selected === id ? '#1A1F24' : 'inherit',
						}}
						onClick={() => setSelected(id)}
						startIcon={icon}
					>
						<Typography
							variant={'h1'}
							sx={{ color: '#E6EDF3', fontSize: '13px', pt: '5px' }}
						>
							{name}
						</Typography>
					</Button>
				</Link>
			))}
		</Stack>
	)
}
