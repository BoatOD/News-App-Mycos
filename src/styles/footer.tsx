import { createStyles, rem } from "@mantine/core";

export const footerStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `${theme.spacing.xl}`,
    paddingBottom: `${theme.spacing.xl}`,
    backgroundColor: "#393939",
    borderTop: `${rem(1)} solid #393939`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color: "white",
    fontSize: theme.fontSizes.sm,
    fontWeight: 300,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 600,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.white,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: `${rem(1)} solid #393939`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));