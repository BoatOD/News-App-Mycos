import { Box, Button, Center, Divider, Group, SimpleGrid, Space, Stack, Text, rem } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews"
import News from "./News"
import NewsHorizontal from "./NewsHorizontal"
import { IconArrowRight } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { NewsSectionProps } from "../utils/newsUtils"

const NewsSection = ({ category, news }: NewsSectionProps) => {
    const { classes } = headlineNewsStyles();
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
                {
                category.value === "general" ? 
                    <>
                        <News category={category.label} news={news[0]} />
                        <SimpleGrid breakpoints={[
                            { minWidth: 'xs', cols: 2 },
                            { minWidth: 'sm', cols: 1 }
                        ]}>
                            {news.slice(1).map((item, index) => <NewsHorizontal key={index} category={category.label} news={item} /> )}
                        </SimpleGrid>
                    </> : category.value === "business" ? <>
                        {news.map((item, index) => <Center><NewsHorizontal key={index} category={category.label} news={item} /></Center> )}
                    </> : category.value === "science" ? <>
                        <News category={category.label} news={news[0]} />
                        <News category={category.label} news={news[1]} />
                    </> : <>
                        <News category={category.label} news={news[0]} />
                        <SimpleGrid breakpoints={[
                            { minWidth: 'xs', cols: 2 },
                            { minWidth: 'sm', cols: 1 }
                        ]}>
                            {news.slice(1).map((item, index) => <NewsHorizontal key={index} category={category.label} news={item} /> )}
                        </SimpleGrid>
                    </>
                }
                
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