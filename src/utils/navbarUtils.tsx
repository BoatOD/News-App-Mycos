interface tabsInterface {
    label: string,
    value: string
}

export interface HeaderTabsProps {
    tabs: tabsInterface[];
}

export const tabs = [
    {
        label: "General",
        value: "general"
    },
    {
        label: "Science",
        value: "science"
    },
    {
        label: "Technology",
        value: "technology"
    },
    {
        label: "Business",
        value: "business"
    },
    {
        label: "Entertainment",
        value: "entertainment"
    },
    {
        label: "Health",
        value: "health"
    },
    {
        label: "Sports",
        value: "sports"
    }
]