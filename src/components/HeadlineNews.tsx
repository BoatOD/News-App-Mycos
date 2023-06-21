import { Box, Center, Divider, Flex, Space, Text } from "@mantine/core"
import { headlineNewsStyles } from "../styles/headlineNews"
import NewsSection from "./NewsSection";

const HeadlineNews = () => {
  const { classes } = headlineNewsStyles();
  return (
    <Box>
      <Divider
        color="gray"
        size="sm"
        my="xs"
        label={
          <>
            <Text className={classes.headlineText} color="black" tt="uppercase">Latest News</Text>
            <Space w="sm" />
          </>
        }
      />
      <NewsSection />
    </Box>
  )
}

export default HeadlineNews