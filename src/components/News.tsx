import { Box, Card, Center, MediaQuery, Text } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews";
import { IconMinusVertical } from "@tabler/icons-react";
import * as dayjs from 'dayjs'
import { NewsProps } from "../utils/newsUtils";

const News = ({ category, news }: NewsProps) => {
    const noImage = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
    const { classes } = headlineNewsStyles();
    return (
        <Card className={classes.card} shadow="md" radius="md" component="a" href={news.url ?? "/404"} target="_blank" withBorder>
            <Card.Section className={classes.imageCard} >
                <img
                    className={classes.image}
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
                <MediaQuery className={classes.text} smallerThan="xs" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={2} weight={500} size="lg">{news.title}</Text>
                        <Text mt="xs" lineClamp={2} size="sm" weight={300} color="dimmed">
                            {news.description}
                        </Text>
                    </Box>
                </MediaQuery>
                <MediaQuery className={classes.text} largerThan="xs" smallerThan="sm" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={3} weight={500} size="xl">{news.title}</Text>
                        <Text mt="xs" lineClamp={4} size="md" weight={300} color="dimmed">
                            {news.description}
                        </Text>
                        <Text mt="xs" size="md" weight={300} color="dimmed">
                            {dayjs(news.date).format('D MMMM YYYY')} | {news.author ?? "N/A"}
                        </Text>
                    </Box>
                </MediaQuery>
                <MediaQuery className={classes.text} largerThan="sm" smallerThan="md" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={2} weight={500} size="lg">{news.title}</Text>
                        <Text mt="xs" lineClamp={2} size="sm" weight={300} color="dimmed">
                            {news.description}
                        </Text>
                        <Text mt="xs" size="sm" weight={300} color="dimmed">
                            {dayjs(news.date).format('D MMMM YYYY')} | {news.author ?? "N/A"}
                        </Text>
                    </Box>
                </MediaQuery>
                <MediaQuery className={classes.text} smallerThan="lg" largerThan="md" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={3} weight={500} size="lg">{news.title}</Text>
                        <Text mt="xs" lineClamp={2} size="sm" weight={300} color="dimmed">
                            {news.description}
                        </Text>
                        <Text mt="xs" size="sm" weight={300} color="dimmed">
                            {dayjs(news.date).format('D MMMM YYYY')} | {news.author ?? "N/A"}
                        </Text>
                    </Box>
                </MediaQuery>
                <MediaQuery className={classes.text} largerThan="lg" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={3} weight={500} size="xl">{news.title}</Text>
                        <Text mt="xs" lineClamp={3} size="sm" weight={300} color="dimmed">
                            {news.description}
                        </Text>
                        <Text mt="xs" size="sm" weight={300} color="dimmed">
                            {dayjs(news.date).format('D MMMM YYYY')} | {news.author ?? "N/A"}
                        </Text>
                    </Box>
                </MediaQuery>

            </Box>
        </Card>
    )
}

export default News