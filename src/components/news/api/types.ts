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

export interface GetNewsRequestParams {
	q: string //Keywords or phrases to search for in the article title and body. max length 500 chars.
	searchIn?: string // The fields to restrict your q search to: (title, content, description)
	// Multiple options can be specified by separating them with a comma, for example: title,content.
	//  Default: all fields are searched.

	sources: string // A comma-seperated string of identifiers (maximum 20)
	// for the news sources or blogs you want headlines from. Use the
	// /sources endpoint to locate these programmatically or look at the sources index.

	domains: string // A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.

	excludeDomains: string // A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.

	from: string // A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2023-10-05 or 2023-10-05T19:39:30)
	// Default: the oldest according to your plan.
	to: string // A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2023-10-05 or 2023-10-05T19:39:30)
	// Default: the newest according to your plan.
	language:
		| 'ar'
		| 'de'
		| 'en'
		| 'es'
		| 'fr'
		| 'he'
		| 'it' //	Default: all languages returned.
		| 'nl'
		| 'no'
		| 'pt'
		| 'ru'
		| 'sv'
		| 'ud'
		| 'zh'

	sortBy: 'relevancy' | 'popularity' | 'publishedAt' // The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
	// Default: publishedAt
	pageSize: number // The number of results to return per page.
	// Default: 100. Maximum: 100.
	page: number // Use this to page through the results.
	// Default: 1.
}
