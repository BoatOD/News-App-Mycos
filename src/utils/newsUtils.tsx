import { tabsInterface } from "./navbarUtils"

export interface NewsInterface {
    title: string | null,
    description: string | null,
    date: Date,
    author: string | null,
    url: string | null,
    imageUrl: string | null
}

export interface NewsSectionProps {
    category: tabsInterface
}

export interface NewsProps {
    category: tabsInterface,
    news: NewsInterface
}