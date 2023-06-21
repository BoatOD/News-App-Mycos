export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export const footerLinks = [
  {
    title: "All category",
    links: [
      {
        label: "General",
        link: "general",
      },
      {
        label: "Science",
        link: "science",
      },
      {
        label: "Technology",
        link: "technology",
      },
      {
        label: "Business",
        link: "business",
      },
      {
        label: "Entertainment",
        link: "entertainment",
      },
      {
        label: "Health",
        link: "health",
      },
      {
        label: "Sports",
        link: "sports",
      },
    ],
  },
  {
    title: "Join us",
    links: [
      {
        label: "Renew Subscription",
        link: "",
      },
      {
        label: "Manage Your Subscription",
        link: "",
      },
      {
        label: "Sign in",
        link: "",
      },
      {
        label: "Jobs",
        link: "",
      },
      {
        label: "Help Manager",
        link: "",
      },

    ],
  }
];
