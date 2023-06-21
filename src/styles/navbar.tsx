import { createStyles, rem } from "@mantine/core";

export const navbarStyles = createStyles((theme) => ({
    header: {
        backgroundColor: "#393939",
        borderBottom: `${rem(1)} solid #393939`,
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    tabs: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    tabsList: {
        borderBottom: '0 !important',
    },

    tab: {
        fontWeight: 300,
        height: rem(38),
        color: theme.white,
        backgroundColor: 'transparent',
        borderColor: "#393939",

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                "#393939"!,
                0.1
            ),
        },

        '&[data-active]': {
            backgroundColor: theme.fn.lighten(
                "#393939"!,
                0.1
            ),
            borderColor: "#393939",
        },
    },

    dropdown: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        padding: `${rem(3)}`,
        fontWeight: 300,
        textDecoration: 'none',
        color: theme.white,
        '&:hover': {
            backgroundColor: theme.fn.lighten(
                "#393939"!,
                0.1
            ),
        },
        '&.active': {
            backgroundColor: theme.fn.lighten(
                "#393939"!,
                0.1
            ),
            borderRadius: "0.15rem 0.15rem 0.15rem 0.15rem"
        }
    },

    search: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    }
}));