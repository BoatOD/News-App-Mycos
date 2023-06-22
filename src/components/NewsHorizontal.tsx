import { Box, Card, Center, Container, Grid, Image, Text, rem } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews"
import { IconMinusVertical } from "@tabler/icons-react";
import { NewsProps } from "../utils/newsUtils";

const NewsHorizontal = ({ category, news }: NewsProps) => {
    const noImage = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
    const { classes } = headlineNewsStyles();
    return (
        <Card className={classes.card} shadow="md" p={0} radius="md" component="a" href={news?.url} target="_blank" withBorder>
            <Grid grow>
                <Grid.Col sm={6} md={7}>
                    <Card.Section py="sm" px="md">
                        <Center inline>
                            <IconMinusVertical color="gray" />
                            <Text weight={500} size="md" color="dimmed" tt="capitalize">{category}</Text>
                        </Center>
                        <Text px="xs" size="xs" weight={300} color="dimmed">{news.description ?? news.title}</Text>
                    </Card.Section>
                </Grid.Col>
                <Grid.Col sm={6} md={5} p={0}>
                    <Card.Section>
                        <Image
                            src={news?.imageUrl}
                        />
                    </Card.Section>
                </Grid.Col>
            </Grid>
        </Card>
    )
}

export default NewsHorizontal