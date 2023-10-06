export interface ArticleType {
	author: string // The author of the article
	content: string // The unformatted content of the article, where available. This is truncated to 200 chars.
	description: string // A description or snippet from the article.
	publishedAt: string // "2023-09-13T07:39:53Z" The date and time that the article was published, in UTC (+000)
	source: {
		id: null | unknown // The identifier id
		name: string // name for the source this article came from ('Faz.net')
	}
	title: string // The headline or title of the article.
	url: string // The direct URL to the article.
	urlToImage: string // The URL to a relevant image for the article.
}

export interface GetNewsResponse {
	articles: ArticleType[] // The results of the request.
	status: 'ok' | 'error' // If the request was successful or not.
	// In the case of error a code and message property will be populated.

	totalResults: number // The total number of results available for your request.
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
