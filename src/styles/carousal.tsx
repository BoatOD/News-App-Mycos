import { createStyles, getStylesRef, rem } from "@mantine/core";

export const carousalStyles = createStyles((theme) => ({
    imageContainer: {
        position: "relative",
        [`&:hover .${getStylesRef('image')}`]: {
            filter: "brightness(65%)",
            transitionDuration: "0.75s",
        },
    },
    image: {
        ref: getStylesRef('image'),
        filter: "brightness(80%)",
        transitionDuration: "0.75s"
    },
    detailImage: {
        position: "absolute",
        top: "15%",
        left: "40%",
        marginRight: "9%",
        [theme.fn.smallerThan("md")]: {
            top: "15%",
            left: "5%",
            right: "5%",
            marginRight: "4%",
        },
        [theme.fn.smallerThan("sm")]: {
            top: "10%",
            left: "0%",
            right: "0%",
            marginRight: "0%",
            [`.${getStylesRef('headlineText')}`]: {
                fontSize: `${rem(44)}`,
            },
            [`.${getStylesRef('subheadlineText')}`]: {
                fontSize: `${rem(20)}`,
            },
            [`.${getStylesRef('buttonRead')}`]: {
                fontSize: `${rem(16)}`,
            },
        },
        [theme.fn.smallerThan("xs")]: {
            top: "10%",
            left: "0%",
            right: "0%",
            marginRight: "0%",
            [`.${getStylesRef('headlineText')}`]: {
                fontSize: `${rem(24)}`,
            },
            [`.${getStylesRef('subheadlineText')}`]: {
                fontSize: `${rem(14)}`,
            },
            [`.${getStylesRef('buttonRead')}`]: {
                fontSize: `${rem(10)}`,
            },
        },
    },
    headlineText: {
        ref: getStylesRef('headlineText'),
        fontWeight: 500,
        color: theme.white,
        fontSize: `${rem(54)}`,
        lineHeight: 1.2
    },
    subheadlineText: {
        ref: getStylesRef('subheadlineText'),
        color: "#E0E0E0",
        fontWeight: 300,
        fontSize: `${rem(20)}`
    },
    buttonRead: {
        ref: getStylesRef('buttonRead'),
        backgroundColor: "rgba(85, 85, 85, 0.55)",
        color: "white",
        borderColor: "rgba(70, 70, 70, 0.75)",
        fontWeight: 300,
        fontSize: `${rem(18)}`,
        transitionDuration: "0.25s",
        '&:hover': {
            transitionDuration: "0.25s",
            backgroundColor: "rgba(70, 70, 70, 0.75)",
        }
    }
}));