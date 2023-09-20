export const defaultTheme = (
	icons: string,
	typography?: string,
	paginationItem?: string
) => ({
	components: {
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					color: icons,
				},
			},
		},

		MuiTypography: {
			styleOverrides: {
				root: {
					color: typography,
					fontSize: '16px',
				},
			},
		},

		MuiPaginationItem: {
			styleOverrides: {
				ellipsis: {
					color: paginationItem,
				},
			},
		},

		MuiPaper: {
			styleOverrides: {
				root: {
					background: 'none',
				},
			},
		},
	},
})
