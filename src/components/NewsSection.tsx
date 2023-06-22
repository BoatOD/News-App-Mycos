import { useState, useEffect } from "react"
import { Box, Button, Divider, Group, SimpleGrid, Space, Text, rem } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews"
import News from "./News"
import { IconArrowRight } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { NewsInterface, NewsSectionProps } from "../utils/newsUtils"
import axios from 'axios';

const NewsSection = ({ category }: NewsSectionProps) => {
    const { classes } = headlineNewsStyles();
    const country = "us";
    const [news, setNews] = useState<NewsInterface[]>([])
    const loadNews = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_NEWS_API_URL}?apiKey=${import.meta.env.VITE_NEWS_API_KEY}&country=${country}&category=${category.value}&pageSize=2&sortBy=popularity`);
            data.articles.forEach((item: any) => {
                setNews((prevItem) => [...prevItem, { title: item.title, description: item.description, date: new Date(item.publishedAt), author: item.author, url: item.url, imageUrl: item.urlToImage }])
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadNews();
    }, [])
    return (
        <Box>
            <Divider
                mt={rem(24)}
                color="gray"
                size="sm"
                mb="xs"
                label={
                    <>
                        <Text className={classes.headlineText} color="black" tt="uppercase">{category.label}</Text>
                        <Space w="sm" />
                    </>
                }
            />
            <SimpleGrid
                breakpoints={[
                    { minWidth: 'xs', cols: 1 },
                    { minWidth: 'sm', cols: 2 },
                ]}
            >
                {news.map((item, index) => <News key={index} category={category.label} news={item} />)}
            </SimpleGrid>
            <Group position="right">
                <Button mt={rem(16)} component={Link} to={`/${category.value}`} className={classes.buttonMore} rightIcon={<IconArrowRight className={classes.arrow} />} variant="outline" radius="xl" uppercase>
                    See More
                </Button>
            </Group>
        </Box>
    )
}

export default NewsSection