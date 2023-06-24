import {
    Container,
    Group,
    Tabs,
    Burger,
    Image,
    Divider,
    MediaQuery,
    Center,
    Transition,
    NavLink as NavLinkBtn,
    Box,
    rem,
    Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { HeaderTabsProps } from "../utils/navbarUtils";
import { navbarStyles } from "../styles/navbar";
import logo from "../assets/logo.svg";
import { IconSearch } from "@tabler/icons-react";
import SearchBar from "./SearchBar";

const Navbar = ({ tabs }: HeaderTabsProps) => {
    const navigate = useNavigate();
    const { category } = useParams();
    const { classes, theme } = navbarStyles();
    const [opened, { toggle }] = useDisclosure(false);

    const itemsTabs = tabs.map((tab, index) => (
        <Tabs.Tab value={tab.value} key={index}>
            {tab.label}
        </Tabs.Tab>
    ));

    const itemsLinks = tabs.map((link, index) => (
        <NavLinkBtn
            component={NavLink}
            className={classes.link}
            key={index}
            label={link.label}
            to={link.value}
            variant="filled"
            color="gray"
            onClick={toggle}
        />
    ));
    
    return (
        <div className={classes.header}>
            <Container>
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Group position="apart">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            className={classes.burger}
                            size="sm"
                            color={theme.white}
                        />
                        <Link onClick={() => opened && toggle()} to="/">
                            <Image my="xs" src={logo} width={186} />
                        </Link>
                        <div></div>
                    </Group>
                </MediaQuery>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Group position="center">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            className={classes.burger}
                            size="sm"
                            color={theme.white}
                        />
                        <Link onClick={() => opened && toggle()} to="/">
                            <Image my="xs" src={logo} width={226} />
                        </Link>
                    </Group>
                </MediaQuery>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Divider />
                </MediaQuery>
            </Container>
            <Container>
                <Center>
                    <Tabs
                    keepMounted={false}
                        variant="outline"
                        classNames={{
                            root: classes.tabs,
                            tabsList: classes.tabsList,
                            tab: classes.tab,
                        }}
                        value={category ? category : null} 
                        onTabChange={(value) => navigate(`${value}`)}
                    >
                        <Tabs.List>{itemsTabs}</Tabs.List>
                    </Tabs>
                    <Space className={classes.search} w="lg" />
                    <Link to="/search"><IconSearch className={classes.search} color="white" /></Link>
                </Center>
            </Container>
            <Transition transition="scale-y" duration={300} mounted={opened}>
                {(styles) => (
                    <Container pb={12} style={styles}>
                        <Box className={classes.dropdown}>
                            <SearchBar pb={8} />
                            {itemsLinks}
                        </Box>
                    </Container>
                )}
            </Transition>
        </div>
    );
};

export default Navbar;
