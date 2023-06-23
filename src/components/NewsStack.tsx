import { Box, Card, Center, Grid, Group, Image, SimpleGrid, Text } from "@mantine/core"
import { BackgroundImage } from '@mantine/core';
import * as dayjs from 'dayjs'
import { IconMinusVertical } from "@tabler/icons-react";
import { NewsProps, color } from "../utils/newsUtils";
import { headlineNewsStyles } from "../styles/headlineNews";

const NewsStack = ({ category, news }: NewsProps) => {
    const noImage = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
    const { classes } = headlineNewsStyles();
    return (
        <Card className={classes.card} component="a" href={news.url ?? "/404"} target="_blank" shadow="sm" padding="lg" radius="md" withBorder>
            <Box>
                <Card.Section>
                    <Center ml="xs" inline>
                        <IconMinusVertical color={color[category ?? "general"]} />
                        <Text weight={500} size="md" color="dimmed" tt="capitalize">{category}</Text>
                    </Center>
                </Card.Section>
                <Box>
                    <Text lineClamp={3} weight={500} size="xl">{news.title}</Text>
                    <Text lineClamp={3} weight={300} size="sm" color="dimmed">{news.description}</Text>
                </Box>
                <Text mt="sm" size="sm" weight={300} color="dimmed">
                    {dayjs(news.date).format('D MMMM YYYY')} | {news.author ?? "By N/A"}
                </Text>
            </Box>
        </Card>
    )
}

export default NewsStack