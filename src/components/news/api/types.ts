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
	status: 'ok' | 'error'
	news: ArticleType[]
	page: number
}
