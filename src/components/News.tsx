import { Box, Card, Center, Loader, MediaQuery, Text, rem } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews";
import { IconMinusVertical } from "@tabler/icons-react";
import * as dayjs from 'dayjs'
import { NewsProps } from "../utils/newsUtils";
import { color } from "../utils/newsUtils";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/lazyload.css'

const News = ({ category, news }: NewsProps) => {
    const noImage = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
    const { classes } = headlineNewsStyles();
    return (
        <Card className={classes.card} shadow="md" radius="md" component="a" href={news.url ?? "/404"} target="_blank" withBorder>
            <Card.Section className={classes.imageCard} >
                <LazyLoadImage
                    effect="blur"
                    placeholderSrc="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
                    className={classes.image}
                    src={news.imageUrl ?? noImage}
                />
            </Card.Section>
            <Box>
                <Card.Section mt="xs">
                    { category && <Center ml={rem(6)} inline>
                        <IconMinusVertical color={color[category]} />
                        <Text weight={500} size="md" color="dimmed" tt="capitalize">{category}</Text>
                    </Center>
                    }
                </Card.Section>
                <MediaQuery className={classes.text} smallerThan="xs" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={2} weight={500} size="lg">{news.title}</Text>
                        <Text className={classes.textDescription} dangerouslySetInnerHTML={{ __html: news.description ?? '' }} mt="xs" lineClamp={3} size="sm" weight={300} color="dimmed"></Text>
                    </Box>
                </MediaQuery>
                <MediaQuery className={classes.text} largerThan="xs" smallerThan="sm" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={3} weight={500} size="xl">{news.title}</Text>
                        <Text className={classes.textDescription} dangerouslySetInnerHTML={{ __html: news.description ?? '' }} mt="xs" lineClamp={3} size="sm" weight={300} color="dimmed"></Text>
                        <Text mt="xs" size="md" weight={300} color="dimmed">
                            {dayjs(news.date).format('D MMMM YYYY')} | {news.author ?? "N/A"}
                        </Text>
                    </Box>
                </MediaQuery>
                <MediaQuery className={classes.text} largerThan="sm" smallerThan="md" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={2} weight={500} size="lg">{news.title}</Text>
                        <Text className={classes.textDescription} dangerouslySetInnerHTML={{ __html: news.description ?? '' }} mt="xs" lineClamp={3} size="sm" weight={300} color="dimmed"></Text>
                        <Text mt="xs" size="sm" weight={300} color="dimmed">
                            {dayjs(news.date).format('D MMMM YYYY')} | {news.author ?? "N/A"}
                        </Text>
                    </Box>
                </MediaQuery>
                <MediaQuery className={classes.text} smallerThan="lg" largerThan="md" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={3} weight={500} size="lg">{news.title}</Text>
                        <Text className={classes.textDescription} dangerouslySetInnerHTML={{ __html: news.description ?? '' }} mt="xs" lineClamp={3} size="sm" weight={300} color="dimmed"></Text>
                        <Text mt="xs" size="sm" weight={300} color="dimmed">
                            {dayjs(news.date).format('D MMMM YYYY')} | {news.author ?? "N/A"}
                        </Text>
                    </Box>
                </MediaQuery>
                <MediaQuery className={classes.text} largerThan="lg" styles={{ display: "block" }}>
                    <Box>
                        <Text lineClamp={3} weight={500} size="xl">{news.title}</Text>
                        <Text className={classes.textDescription} dangerouslySetInnerHTML={{ __html: news.description ?? '' }} mt="xs" lineClamp={3} size="sm" weight={300} color="dimmed"></Text>
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