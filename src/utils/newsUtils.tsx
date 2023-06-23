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
    category: string | null
}

export interface NewsProps {
    category: string | null,
    news: NewsInterface
}

export interface colorInterface {
    general: string,
    science: string,
    technology: string,
    business: string,
    entertainment: string,
    health: string,
    sports: string
}

export const categoryMapper : { [key: string]: any } = {
    general: "World",
    science: "Science",
    technology: "Technology",
    business: "Business",
    entertainment: "Entertainment",
    health: "Health",
    sports: "Sports"
}

export const color : { [key: string]: any } = {
    general: "gray",
    science: "red",
    technology: "pink",
    business: "blue",
    entertainment: "violet",
    health: "green",
    sports: "orange"
}
