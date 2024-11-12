export interface INews {
    status: string,
    totalResults: number,
    articles: IArticles[]
}

export interface IArticles {
    source: ISource[],
    author: string | undefined,
    title: string,
    description: string,
    url: string,
    urlToImage: string | undefined,
    publishedAt: string,
    content: string,
}

export interface ISource {
    id: string | undefined,
    name: string
}