import { Box, Loader } from "@mantine/core"
import NewsSection from "./NewsSection";
import { tabs } from "../utils/navbarUtils";

const HeadlineNews = () => {
  return (
    <Box>
      <NewsSection category={tabs[0].value} />
      <NewsSection category={tabs[3].value} />
      <NewsSection category={tabs[1].value} />
      <NewsSection category={tabs[4].value} />
    </Box>
  )
}

export default HeadlineNews