export const countPages = (totalCount: number, count: number, max: number) => {
    const pages: number[] = []

    const pagesAmount = Math.ceil(totalCount / count);

    for (let i = 1; i <= pagesAmount && i <= max; i++) pages.push(i);

    return pages
}