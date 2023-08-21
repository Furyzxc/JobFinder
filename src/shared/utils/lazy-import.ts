import { lazy } from 'react'

type ComponentPath = 'authorization' | 'users' | 'settings'

type ComponentName = 'Login' | 'Users' | 'Settings'

// lazy import for named export
export const lazyPageImport = (
	path: ComponentPath,
	componentName: ComponentName
) =>
	lazy(() =>
		import(`./src/components/${path}/page`).then(module => ({
			default: module[componentName],
		}))
	)
