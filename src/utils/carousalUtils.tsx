export interface CarousalData {
    title: string,
    author: string | null,
    date: Date,
    imageUrl: string | null,
    url: string | null
}

export interface CarousalProps {
    data: CarousalData[]
}