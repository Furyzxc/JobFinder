export const defaultLazyImport = (module: any, componentName: string) => ({
	default: module[componentName],
})
