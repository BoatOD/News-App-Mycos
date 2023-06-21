import { Box, Card, Center, Container, Grid, Image, Text } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews"
import { IconMinusVertical } from "@tabler/icons-react";
import { NewsProps } from "../utils/newsUtils";

const NewsHorizontal = ({ category, news }: NewsProps) => {
    const noImage = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
    const { classes } = headlineNewsStyles();
    return (
        <Box>
            <Card className={classes.card} shadow="md" padding="xs" radius="md" component="a" href={news.url ?? noImage} target="_blank" withBorder>
                <Card.Section>
                    <Grid grow>
                        <Grid.Col sm={6} md={7} p="xs">
                            <Center inline>
                                <IconMinusVertical color="gray" />
                                <Text weight={500} size="md" color="dimmed" tt="capitalize">{category}</Text>
                            </Center>
                            <Text px="xs" size="xs" weight={300} color="dimmed" lineClamp={3}>{news.description ?? news.title}</Text>
                        </Grid.Col>
                        <Grid.Col sm={6} md={5} p={0}>
                            <Image
                                src={news.imageUrl ?? noImage}
                            />
                        </Grid.Col>
                    </Grid>
                </Card.Section>
            </Card>
        </Box>
    )
}

export default NewsHorizontal