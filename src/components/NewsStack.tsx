import { Box, Card, Center, Grid, Group, Image, SimpleGrid, Text } from "@mantine/core"
import { BackgroundImage } from '@mantine/core';
import * as dayjs from 'dayjs'
import { IconMinusVertical } from "@tabler/icons-react";
import { NewsProps } from "../utils/newsUtils";

const NewsStack = ({ category, news }: NewsProps) => {
    const noImage = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"

    return (
        <Card component="a" href={news.url ?? "/404"} target="_blank" shadow="sm" padding="lg" py={0} radius="md" withBorder>
            <Card.Section mt="xs">
                <Center ml="xs" inline>
                    <IconMinusVertical color="gray" />
                    <Text weight={500} size="sm" color="dimmed" tt="capitalize">{category}</Text>
                </Center>
            </Card.Section>
            <Box>
                <Text weight={500} size="xl">{news.title}</Text>
                <Text weight={300} size="sm" color="dimmed">{news.description}</Text>
            </Box>
            <Text mt="sm" size="sm" weight={300} color="dimmed">
                {dayjs(news.date).format('D MMMM YYYY')} | {news.author}
            </Text>
        </Card>
    )
}

export default NewsStack