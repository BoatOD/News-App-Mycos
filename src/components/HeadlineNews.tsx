import { Box } from "@mantine/core"
import NewsSection from "./NewsSection";
import { tabs } from "../utils/navbarUtils";

const HeadlineNews = () => {
  return (
    <Box>
      <NewsSection category={tabs[0]} />
      <NewsSection category={tabs[3]} />
      <NewsSection category={tabs[1]} />
      {/* <NewsSection category={tabs[4]} /> */}
    </Box>
  )
}

export default HeadlineNews