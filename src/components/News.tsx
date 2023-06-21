import { Box, Card, Center, Image, Text } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews";
import { IconMinusVertical } from "@tabler/icons-react";

const News = () => {
    const { classes } = headlineNewsStyles();
    return (
        <Card className={classes.card} shadow="md" padding="lg" radius="md" component="a" href="https://www.cnn.com/2023/06/19/europe/titanic-shipwreck-vessel-missing-intl/index.html" target="_blank" withBorder>
            <Card.Section>
                <Image
                    src="https://media.cnn.com/api/v1/images/stellar/prod/230619160119-hp-card-04-oceangate-titan-sub-file.jpg?c=16x9&q=w_800,c_fill"
                />
            </Card.Section>
            <Card.Section mt="xs">
                <Center ml="xs" inline>
                    <IconMinusVertical color="gray" />
                    <Text weight={500} size="md" color="dimmed">General</Text>
                </Center>
            </Card.Section>
            <Box>
                <Text weight={500} size="xl">A search and rescue operation is underway for a submersible touring the wreckage of the Titanic - CNN</Text>
                <Text lineClamp={4} size="sm" weight={300} color="dimmed">
                    Officials are in a race against time to find a civilian submersible that had five people aboard after it went missing Sunday in the North Atlantic while voyaging to the wreckage of the Titanic.
                </Text>
            </Box>
            <Text mt="sm" size="sm" weight={300} color="dimmed">
                20 July 2023 | Michel K.
            </Text>
        </Card>
    )
}

export default News