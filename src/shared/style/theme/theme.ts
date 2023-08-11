import { createTheme } from '@mui/material'

export const appTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#2F80F6',
		},
	},

	components: {
		MuiPaginationItem: {
			styleOverrides: {
				ellipsis: {
					color: 'white',
				},
			},
		},

		MuiSvgIcon: {
			styleOverrides: {
				root: {
					color: '#7D8590',
				},
			},
		},

		MuiTypography: {
			styleOverrides: {
				root: {
					color: '#E6EDF3',
					fontSize: '16px',
				},
			},
		},
	},
})
