export const config = {
	MAIN_API_BASE_URL: import.meta.env.VITE_MAIN_BASE_URL,
	MAIN_API_KEY: import.meta.env.VITE_API_KEY,
	MUSIC_API_BASE_URL: import.meta.env.VITE_MUSIC_BASE_URL,
	MUSIC_TOKEN_API_BASE_URL: import.meta.env.VITE_MUSIC_TOKEN_API_BASE_URL,
	MUSIC_API_CLIENT_ID: import.meta.env.VITE_MUSIC_CLIENT_ID,
	MUSIC_API_CLIENT_SECRET: import.meta.env.VITE_MUSIC_CLIENT_SECRET,
	NEWS_API_BASE_URL: import.meta.env.VITE_NEWS_BASE_URL,
	NEWS_API_KEY: import.meta.env.VITE_NEWS_API_KEY,
} as const
