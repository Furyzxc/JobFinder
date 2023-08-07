import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: 3000,
	},
	css: {
		modules: {
			generateScopedName: '[name]__[local]__[hash:8]',
			localsConvention: null,
		},
	},
	plugins: [react()],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
})
