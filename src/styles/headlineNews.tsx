import { createStyles, rem } from "@mantine/core";

export interface colorInterface {
    general: string,
    science: string,
    technology: string,
    business: string,
    entertainment: string,
    health: string,
    sports: string
}

export const color: colorInterface  = {
    general: "gray",
    science: "red",
    technology: "pink",
    business: "blue",
    entertainment: "violet",
    health: "green",
    sports: "orange"
}

export const headlineNewsStyles = createStyles((theme) => ({
    headlineText: {
        fontWeight: 500,
        fontSize: `${rem(36)}`
    },
    card: {
        transitionDuration: "0.75s",
        '&:hover': {
            transform: 'scale(1.01)',
            transitionDuration: "0.75s"
        }
    },
    buttonMore: {
        border: "0px",
        backgroundColor: "transparent",
        color: "#808080",
        borderColor: "transparent",
        fontWeight: 300,
        fontSize: `${rem(18)}`,
        transitionDuration: "0.25s",
        '&:hover': {
            transitionDuration: "0.25s",
            backgroundColor: "rgba(70, 70, 70, 0.1)",
        }
    },
    arrow: {
        color: "#808080"
    },
    imageCard: {
        height: "auto",
        objectFit: "contain"
    },
    image: {
        height: `${rem(256)}`,
        width: "100%",
        objectFit: "cover"
    },
    text:{
        display: "none",
    },
    textDescription: {
        'a': {
            textDecoration: "none",
            color: "inherit"
        }
    }
}));