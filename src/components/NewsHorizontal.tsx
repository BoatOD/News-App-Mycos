import { Box, Card, Center, Flex, Grid, Group, Image, SimpleGrid, Text, rem } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews"
import { IconMinusVertical } from "@tabler/icons-react";

const NewsHorizontal = () => {
    const { classes } = headlineNewsStyles();
    return (
        <Card className={classes.card} shadow="md" padding="xs" radius="md" component="a" href="https://www.cnn.com/2023/06/19/europe/titanic-shipwreck-vessel-missing-intl/index.html" target="_blank" withBorder>
            <Card.Section>
                <Grid grow>
                    <Grid.Col span={7} p="xs">
                        <Center inline>
                            <IconMinusVertical color="gray" />
                            <Text weight={500} size="md" color="dimmed">General</Text>
                        </Center>
                        <Text px="xs" size="xs" weight={300} color="dimmed" lineClamp={3}>A search and rescue operation is underway for a submersible touring the wreckage of the Titanic - CNN A search and rescue operation is underway for a submersible touring the wreckage of the Titanic - CNN</Text>
                    </Grid.Col>
                    <Grid.Col span={5} p={0}>
                        <Image
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230619160119-hp-card-04-oceangate-titan-sub-file.jpg?c=16x9&q=w_800,c_fill"
                        />
                    </Grid.Col>
                    
                </Grid>
            </Card.Section>
        </Card>
    )
}

export default NewsHorizontal