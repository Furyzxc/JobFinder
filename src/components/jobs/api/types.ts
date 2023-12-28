export interface ResponseJobsSearch {
	count: number
	next: null | string // "https://findwork.dev/api/jobs/?page=2"
	previous: null | string // "https://findwork.dev/api/jobs/?page=2"
	results: {
		id: string // "MLrAb2n",
		role: string // "Communications Lead, Product & Ecosystem",
		company_name: string // "Stellar",
		company_num_employees: null | string //  "251-500"
		employment_type: string // "full time",
		location: string //"San Francisco, United States",
		logo: string // "https://findwork-dev-images.s3.amazonaws.com/full/e375d6b902c0272f55b55ae7554c3f3d7a00589e.jpg",
		url: string // "https://findwork.dev/MLrAb2n/communications-lead-product-ecosystem-at-stellar",
		text: string // "Stellar is looking to hire a Communications Lead, Product & Ecosystem to join their team. This is a full-time position that is based in San Francisco CA.",
		date_posted: string // "2023-12-26T05:00:00Z",
		keywords: string[] // [ "sql", "cryptocurrency", "blockchain" ]
		source: string // "Cryptocurrencyjobs"
	}[]
}
