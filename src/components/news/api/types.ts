type STATUS = 'ok' | 'error'

export interface ArticleType {
	id: string //  "e1749cf0-8a49-4729-88b2-e5b4d03464ce",
	title: string // "US House speaker Nancy Pelosi backs congressional legislation on Hong Kong",
	description: string // "US House speaker Nancy Pelosi on Wednesday threw her support behind legislation meant to back Hong Kong's anti-government protesters.Speaking at a news conference featuring Hong Kong activists Joshua Wong Chi-fung and Denise Ho, who testified before the Congressional-Executive Commission on China (C...",
	url: string
	author: string // "Robert Delaney",
	image: string // "None",
	language: string // "en",
	category: string[] // ["world", "politics"]
	published: string // "2019-09-18 21:08:58 +0000"
}

export interface GetLatestNewsResponse {
	status: STATUS
	news: ArticleType[]
	page: number
}

export interface SearchNewsResponse {
	status: STATUS
	news: ArticleType[]
	page: number
}

export interface SearchNewsParams {
	language?: string // Language values that need to be considered for filter
	keywords?: string // Keyword values that need to be considered for filter
	country?: string // Country values that need to be considered for filter
	category?: string // Category values that need to be considered for filter
	start_date?: string // format: YYYY-MM-DDTHH:MM:SS+00:00
	end_date?: string // format: YYYY-MM-DDTHH:MM:SS+00:00
}

export interface GetAvailableLanguagesResponse {
	description: string // "available languages followed by query code"
	languages: { [key: string]: string } //{Arabic: 'ar', Chinese: 'zh', Dutch: 'nl', English: 'en', Finnish: 'fi', …}
	status: STATUS
}

export interface GetAvailableCategoriesResponse {
	categories: string[] //['regional', 'technology', 'lifestyle', 'business', 'general', 'programming', 'science', 'entertainment', 'world', 'sports', 'finance', 'academia', 'politics', 'health', 'opinion', 'food', 'game', 'fashion', 'academic', 'crap', 'travel', 'culture', 'economy', 'environment', 'art', 'music', 'notsure', 'CS', 'education', 'redundant', 'television', 'commodity', 'movie', 'entrepreneur', 'review', 'auto', 'energy', 'celebrity', 'medical', 'gadgets', 'design', 'EE', 'security', 'mobile', 'estate', 'funny']
	description: string // "order by source count in descending order"
	status: STATUS
}

export interface GetAvailableRegionseResponse {
	description: string // "available regions followed by query code"
	regions: { [key: string]: string } // {United State: 'US', Taiwan: 'TW', German: 'DE', United Kingdom: 'GB', China: 'CN', …}
	status: STATUS
}
