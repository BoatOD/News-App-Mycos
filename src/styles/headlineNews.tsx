import { createStyles, rem } from "@mantine/core";

export const headlineNewsStyles = createStyles((theme) => ({
    headlineText: {
        fontWeight: 500,
        fontSize: `${rem(36)}`
    },
    card: {
        transitionDuration: "0.5s",
        '&:hover': {
            transform: 'scale(1.01)',
            transitionDuration: "0.5s"
        }
    }
}));