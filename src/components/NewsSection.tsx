import { Box, SimpleGrid, Stack } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews"
import News from "./News"
import NewsHorizontal from "./NewsHorizontal"

const NewsSection = () => {
    return (
        <Box>
            <SimpleGrid breakpoints={[
                { minWidth: 'xs', cols: 2 },
            ]}
                cols={1}>
                <News />
                <Stack >
                    <NewsHorizontal />
                    <NewsHorizontal />
                    <NewsHorizontal />
                    <NewsHorizontal />
                </Stack>
            </SimpleGrid>
        </Box>
    )
}

export default NewsSection