import { Box, Card, Center, Image, Text } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews";
import { IconMinusVertical } from "@tabler/icons-react";
import * as dayjs from 'dayjs'
import { NewsProps } from "../utils/newsUtils";

const News = ({ category, news }: NewsProps) => {
    const noImage = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
    const { classes } = headlineNewsStyles();
    return (
        <Card className={classes.card} shadow="md" padding="lg" radius="md" component="a" href={news.url ?? noImage} target="_blank" withBorder>
            <Card.Section>
                <Image
                    src={news.imageUrl ?? noImage}
                />
            </Card.Section>
            <Box>
                <Card.Section mt="xs">
                    <Center ml="xs" inline>
                        <IconMinusVertical color="gray" />
                        <Text weight={500} size="md" color="dimmed" tt="capitalize">{category}</Text>
                    </Center>
                </Card.Section>
                <Box>
                    <Text weight={500} size="xl">{news.title}</Text>
                    <Text lineClamp={4} size="sm" weight={300} color="dimmed">
                        {news.description}
                    </Text>
                </Box>
                <Text mt="sm" size="sm" weight={300} color="dimmed">
                    {dayjs(news.date).format('D MMMM YYYY')} | {news.author}
                </Text>
            </Box>
        </Card>
    )
}

export default News