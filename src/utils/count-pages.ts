export const countPages = (totalCount: number, count: number) => {
    const pages: number[] = []

    const pagesAmount = Math.ceil(totalCount / count);

    for (let i = 1; i <= pagesAmount && i <= 20; i++) pages.push(i);

    return pages
}