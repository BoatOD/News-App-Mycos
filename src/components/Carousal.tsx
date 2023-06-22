import { Carousel } from "@mantine/carousel"
import { Box, Button, Group, Image, MediaQuery, Text, rem } from "@mantine/core"
import { carousalStyles } from "../styles/carousal"
import { IconArrowRight } from "@tabler/icons-react";
import Autoplay from 'embla-carousel-autoplay';
import { CarousalProps } from "../utils/carousalUtils";
import * as dayjs from 'dayjs'

const CarousalSlider = ({ data }: CarousalProps) => {
    const { classes } = carousalStyles();
    const autoplay = Autoplay({ delay: 7500 })
    return (
        <>
            <MediaQuery className={classes.carousal} query="(max-width: 27.5em)" styles={{ display: "block" }}>
                <Carousel
                    withControls={false}
                    height={rem(177)}
                    slideGap={0}
                    loop
                    plugins={[autoplay]}
                    onMouseEnter={autoplay.stop}
                    onMouseLeave={autoplay.reset}
                >
                    {data.map((item, index) => {
                        return (
                            <Carousel.Slide key={index} >
                                <a href={item?.url} target="_blank">
                                    <Box className={classes.imageContainer}>
                                        <Image className={classes.image} src={item?.imageUrl} />
                                        <Group className={classes.detailImage} position="center">
                                            <Box>
                                                <Text align="center" className={classes.headlineText}>{item.title}</Text>
                                                <Text align="center" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                            </Box>
                                            <Button className={classes.buttonRead} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                        </Group>
                                    </Box>
                                </a>
                            </Carousel.Slide>
                        )
                    })}
                </Carousel>
            </MediaQuery>
            <MediaQuery className={classes.carousal} query="(max-width: 36em) and (min-width: 27.5em)" styles={{ display: "block" }}>
                <Carousel
                    withControls={false}
                    withIndicators
                    height={rem(286)}
                    slideGap={0}
                    loop
                    plugins={[autoplay]}
                    onMouseEnter={autoplay.stop}
                    onMouseLeave={autoplay.reset}
                >
                    {data.map((item, index) => {
                        return (
                            <Carousel.Slide key={index} >
                                <a href={item?.url} target="_blank">
                                    <Box className={classes.imageContainer}>
                                        <Image className={classes.image} src={item?.imageUrl} />
                                        <Group className={classes.detailImage} position="center">
                                            <Box>
                                                <Text align="center" className={classes.headlineText}>{item.title}</Text>
                                                <Text align="center" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                            </Box>
                                            <Button className={classes.buttonRead} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                        </Group>
                                    </Box>
                                </a>
                            </Carousel.Slide>
                        )
                    })}
                </Carousel>
            </MediaQuery>
            <MediaQuery className={classes.carousal} largerThan="xs" smallerThan="sm" styles={{ display: "block" }}>
                <Carousel
                    withControls={false}
                    withIndicators
                    height={rem(368)}
                    slideGap={0}
                    loop
                    plugins={[autoplay]}
                    onMouseEnter={autoplay.stop}
                    onMouseLeave={autoplay.reset}
                >
                    {data.map((item, index) => {
                        return (
                            <Carousel.Slide key={index} >
                                <a href={item?.url} target="_blank">
                                    <Box className={classes.imageContainer}>
                                        <Image className={classes.image} src={item?.imageUrl} />
                                        <Group className={classes.detailImage} position="center">
                                            <Box>
                                                <Text align="center" className={classes.headlineText}>{item.title}</Text>
                                                <Text align="center" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                            </Box>
                                            <Button className={classes.buttonRead} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                        </Group>
                                    </Box>
                                </a>
                            </Carousel.Slide>
                        )
                    })}
                </Carousel>
            </MediaQuery>
            <MediaQuery className={classes.carousal} smallerThan="md" largerThan="sm" styles={{ display: "block" }}>
                <Carousel
                    withControls={false}
                    withIndicators
                    height={rem(512)}
                    slideGap={0}
                    loop
                    plugins={[autoplay]}
                    onMouseEnter={autoplay.stop}
                    onMouseLeave={autoplay.reset}
                >
                    {data.map((item, index) => {
                        return (
                            <Carousel.Slide key={index}>
                                <a href={item?.url} target="_blank">
                                    <Box className={classes.imageContainer}>
                                        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                                            <Box>
                                                <Image className={classes.image} src={item?.imageUrl} />
                                                <Group className={classes.detailImage} position="right">
                                                    <Box>
                                                        <Text align="end" className={classes.headlineText}>{item.title}</Text>
                                                        <Text mt={10} align="end" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                                    </Box>
                                                    <Button className={classes.buttonRead} mt={25} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                </Group>
                                            </Box>
                                        </MediaQuery>
                                        <MediaQuery largerThan="md" styles={{ display: "none" }}>
                                            <Box>
                                                <Image className={classes.image} src={item?.imageUrl} />
                                                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                                                    <Group className={classes.detailImage} position="right">
                                                        <Box>
                                                            <Text align="end" className={classes.headlineText}>{item.title}</Text>
                                                            <Text mt={10} align="end" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                                        </Box>
                                                        <Button className={classes.buttonRead} mt={25} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                    </Group>
                                                </MediaQuery>
                                                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                                                    <Group className={classes.detailImage} position="center">
                                                        <Box>
                                                            <Text align="center" className={classes.headlineText}>{item.title}</Text>
                                                            <Text mt={5} align="center" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                                        </Box>
                                                        <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
                                                            <Button className={classes.buttonRead} mt={5} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                        </MediaQuery>
                                                        <MediaQuery largerThan="xs" styles={{ display: "none" }}>
                                                            <Button className={classes.buttonRead} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                        </MediaQuery>
                                                    </Group>
                                                </MediaQuery>
                                            </Box>
                                        </MediaQuery>
                                    </Box>
                                </a>
                            </Carousel.Slide>
                        )
                    })}
                </Carousel>
            </MediaQuery>
            <MediaQuery className={classes.carousal} smallerThan="xl" largerThan="md" styles={{ display: "block" }}>
                <Carousel
                    withControls={false}
                    withIndicators
                    height={rem(550)}
                    slideGap={0}
                    loop
                    plugins={[autoplay]}
                    onMouseEnter={autoplay.stop}
                    onMouseLeave={autoplay.reset}
                >
                    {data.map((item, index) => {
                        return (
                            <Carousel.Slide key={index}>
                                <a href={item?.url} target="_blank">
                                    <Box className={classes.imageContainer}>
                                        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                                            <Box>
                                                <Image className={classes.image} src={item?.imageUrl} />
                                                <Group className={classes.detailImage} position="right">
                                                    <Box>
                                                        <Text align="end" className={classes.headlineText}>{item.title}</Text>
                                                        <Text mt={10} align="end" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                                    </Box>
                                                    <Button className={classes.buttonRead} mt={25} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                </Group>
                                            </Box>
                                        </MediaQuery>
                                        <MediaQuery largerThan="md" styles={{ display: "none" }}>
                                            <Box>
                                                <Image className={classes.image} src={item?.imageUrl} />
                                                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                                                    <Group className={classes.detailImage} position="right">
                                                        <Box>
                                                            <Text align="end" className={classes.headlineText}>{item.title}</Text>
                                                            <Text mt={10} align="end" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                                        </Box>
                                                        <Button className={classes.buttonRead} mt={25} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                    </Group>
                                                </MediaQuery>
                                                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                                                    <Group className={classes.detailImage} position="center">
                                                        <Box>
                                                            <Text align="center" className={classes.headlineText}>{item.title}</Text>
                                                            <Text mt={5} align="center" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                                        </Box>
                                                        <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
                                                            <Button className={classes.buttonRead} mt={5} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                        </MediaQuery>
                                                        <MediaQuery largerThan="xs" styles={{ display: "none" }}>
                                                            <Button className={classes.buttonRead} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                        </MediaQuery>
                                                    </Group>
                                                </MediaQuery>
                                            </Box>
                                        </MediaQuery>
                                    </Box>
                                </a>
                            </Carousel.Slide>
                        )
                    })}
                </Carousel>
            </MediaQuery>
            <MediaQuery className={classes.carousal} largerThan="xl" styles={{ display: "block" }}>
                <Carousel
                    withControls={false}
                    withIndicators
                    height={rem(768)}
                    slideGap={0}
                    loop
                    plugins={[autoplay]}
                    onMouseEnter={autoplay.stop}
                    onMouseLeave={autoplay.reset}
                >
                    {data.map((item, index) => {
                        return (
                            <Carousel.Slide key={index}>
                                <a href={item?.url} target="_blank">
                                    <Box className={classes.imageContainer}>
                                        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                                            <Box>
                                                <Image className={classes.image} src={item?.imageUrl} />
                                                <Group className={classes.detailImage} position="right">
                                                    <Box>
                                                        <Text align="end" className={classes.headlineText}>{item.title}</Text>
                                                        <Text mt={10} align="end" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                                    </Box>
                                                    <Button className={classes.buttonRead} mt={25} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                </Group>
                                            </Box>
                                        </MediaQuery>
                                        <MediaQuery largerThan="md" styles={{ display: "none" }}>
                                            <Box>
                                                <Image className={classes.image} src={item?.imageUrl} />
                                                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                                                    <Group className={classes.detailImage} position="right">
                                                        <Box>
                                                            <Text align="end" className={classes.headlineText}>{item.title}</Text>
                                                            <Text mt={10} align="end" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                                        </Box>
                                                        <Button className={classes.buttonRead} mt={25} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                    </Group>
                                                </MediaQuery>
                                                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                                                    <Group className={classes.detailImage} position="center">
                                                        <Box>
                                                            <Text align="center" className={classes.headlineText}>{item.title}</Text>
                                                            <Text mt={5} align="center" className={classes.subheadlineText}>{dayjs(item.date).format('D MMMM YYYY')} | {item.author}</Text>
                                                        </Box>
                                                        <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
                                                            <Button className={classes.buttonRead} mt={5} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                        </MediaQuery>
                                                        <MediaQuery largerThan="xs" styles={{ display: "none" }}>
                                                            <Button className={classes.buttonRead} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
                                                        </MediaQuery>
                                                    </Group>
                                                </MediaQuery>
                                            </Box>
                                        </MediaQuery>
                                    </Box>
                                </a>
                            </Carousel.Slide>
                        )
                    })}
                </Carousel>
            </MediaQuery>
        </>

    )
}

export default CarousalSlider