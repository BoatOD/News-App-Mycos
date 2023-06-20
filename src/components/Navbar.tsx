import {
    createStyles,
    Container,
    Group,
    Text,
    Tabs,
    Burger,
    rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.colors.gray[0] }).background,
        borderBottom: `${rem(1)} solid ${theme.fn.variant({ variant: 'filled', color: theme.colors.gray[0] }).background}`,
    },

    mainSection: {
        paddingBottom: theme.spacing.sm,
    },

    burger: {
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },

    tabs: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    tabsList: {
        borderBottom: '0 !important',
    },

    tab: {
        fontWeight: 500,
        height: rem(38),
        color: theme.white,
        backgroundColor: 'transparent',
        borderColor: theme.fn.variant({ variant: 'filled', color: theme.colors.gray[0] }).background,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.colors.gray[0] }).background!,
                0.1
            ),
        },

        '&[data-active]': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.colors.gray[0] }).background!,
                0.1
            ),
            borderColor: theme.fn.variant({ variant: 'filled', color: theme.colors.gray[0] }).background,
        },
    },
}));

interface HeaderTabsProps {
    tabs: string[];
}
const Navbar = ({ tabs }: HeaderTabsProps) => {
    const { classes, theme } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));
    return (
        <div className={classes.header}>
            <Container className={classes.mainSection} pb={0}>
                <Group position="center">
                    <Text size={25}>Paper News</Text>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                        color={theme.white}
                    />
                </Group>
            </Container>
            <Container>
                <Tabs
                    defaultValue="Home"
                    variant="outline"
                    classNames={{
                        root: classes.tabs,
                        tabsList: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Container>
        </div>
    );
}

export default Navbar