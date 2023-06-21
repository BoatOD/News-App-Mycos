import { Carousel } from "@mantine/carousel"
import { Box, Button, Group, Image, MediaQuery, Text, rem } from "@mantine/core"
import { carousalStyles } from "../styles/carousal"
import { IconArrowRight } from "@tabler/icons-react";
import Autoplay from 'embla-carousel-autoplay';

const CarousalSlider = () => {
    const { classes } = carousalStyles();
    // const autoplay = Autoplay({ delay: 5000 })
    return (
        <>
            <MediaQuery query="(max-width: 768px)" styles={{ display: "none" }}>
                <Text>max-width: 768px</Text>
            </MediaQuery>
            <MediaQuery query="(max-width: 992px) and (min-width: 768px)" styles={{ display: "none" }}>
                <Text>(max-width: 992px) and (min-width: 768px)</Text>
            </MediaQuery>
            <MediaQuery query="(min-width: 992px)" styles={{ display: "none" }}>
                <Text>(min-width: 992px)</Text>
            </MediaQuery>
        </>
        // <Carousel
        //     withControls={false}
        //     withIndicators
        //     height={rem(512)}
        //     slideGap={0}
        //     loop
        //     plugins={[autoplay]}
        //     onMouseEnter={autoplay.stop}
        //     onMouseLeave={autoplay.reset}
        // >
        //     <Carousel.Slide>
        //         <a href="https://www.nytimes.com/2023/06/20/world/americas/honduras-womens-prison-riot.html" target="_blank">
        //             <Box className={classes.imageContainer}>
        //                 <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        //                     <Box>
        //                         <Image className={classes.image} src="https://static01.nyt.com/images/2023/06/20/multimedia/20ukraine-briefing-header-kvzg/20ukraine-briefing-header-kvzg-superJumbo.jpg" />
        //                         <Group className={classes.detailImage} position="right">
        //                             <Box>
        //                                 <Text align="end" className={classes.headlineText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
        //                                 <Text mt={10} align="end" className={classes.subheadlineText}>20 July 2023 | Michel K.</Text>
        //                             </Box>
        //                             <Button className={classes.buttonRead} mt={25} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
        //                         </Group>
        //                     </Box>
        //                 </MediaQuery>
        //                 <MediaQuery largerThan="md" styles={{ display: "none" }}>
        //                     <Box>
        //                         <Image className={classes.image} src="https://static01.nyt.com/images/2023/06/20/multimedia/20ukraine-briefing-header-kvzg/20ukraine-briefing-header-kvzg-superJumbo.jpg" />
        //                         <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        //                             <Group className={classes.detailImage} position="right">
        //                                 <Box>
        //                                     <Text align="end" className={classes.headlineText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
        //                                     <Text mt={10} align="end" className={classes.subheadlineText}>20 July 2023 | Michel K.</Text>
        //                                 </Box>
        //                                 <Button className={classes.buttonRead} mt={25} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
        //                             </Group>
        //                         </MediaQuery>
        //                         <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        //                             <Group className={classes.detailImage} position="center">
        //                                 <Box>
        //                                     <Text align="center" className={classes.headlineText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
        //                                     <Text mt={5} align="center" className={classes.subheadlineText}>20 July 2023 | Michel K.</Text>
        //                                 </Box>
        //                                 <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
        //                                     <Button className={classes.buttonRead} mt={5} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
        //                                 </MediaQuery>
        //                                 <MediaQuery largerThan="xs" styles={{ display: "none" }}>
        //                                     <Button className={classes.buttonRead} variant="outline" radius="xl" rightIcon={<IconArrowRight />} uppercase>Read On</Button>
        //                                 </MediaQuery>
        //                             </Group>
        //                         </MediaQuery>
        //                     </Box>
        //                 </MediaQuery>
        //             </Box>
        //         </a>
        //     </Carousel.Slide>
        // </Carousel>
    )
}

export default CarousalSlider