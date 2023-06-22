import { SimpleGrid } from "@mantine/core";
import { Stack, Button } from "@mantine/core";
import { Container } from "@mantine/core";
import Newscard from "../components/News";
import { useParams } from "react-router-dom";
import NewsStack from "../components/NewsStack";
import { NewsInterface } from "../utils/newsUtils";
import { useEffect } from "react";

const News = () => {
  const { category } = useParams();
  const newsWorldData: NewsInterface[] = [
    {
      title: "Rescuers are racing the clock in search for a manned submersible lost while touring Titanic wreckage - CNN",
      description: "Rescue crews searching for a submersible with five people aboard that went missing while touring the Titanic’s wreckage are keeping a nervous eye on the craft’s dwindling oxygen supply as they navigate choppy waters in a remote area of the North Atlantic Ocea…",
      date: new Date("2023-06-20T18:18:00Z"),
      author: "Nouran Salahieh,Eric Levenson",
      url: "https://www.cnn.com/2023/06/20/us/titanic-shipwreck-vessel-missing-tuesday/index.html",
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/230620112836-harding-dawood-nargeolet-rush-split.jpg?c=16x9&q=w_800,c_fill"
    },
    {
      title: "New US home construction surges by most in 3 decades in May - Reuters.com",
      description: "Groundbreaking on U.S. single-family homebuilding projects surged in May by the most in more than three decades and permits for future construction also climbed, suggesting the housing market may be turning a corner after getting clobbered by Federal Reserve …",
      date: new Date("2023-06-20T16:50:00Z"),
      author: null,
      url: "https://www.reuters.com/markets/us/us-housing-starts-surge-13-month-high-2023-06-20/",
      imageUrl: "https://www.reuters.com/resizer/_JyifrNBZJgIq0pajseKjdlgb7A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PIJPI5C66BL6BMRUIXELEFYZFE.jpg"
    },
    {
      title: "Tropical Storm Bret may become a hurricane as it takes aim at the Lesser Antilles - FOX 13 Tampa",
      description: "Tropical Storm Bret, which formed Monday afternoon, may reach hurricane strength as it heads toward the Lesser Antilles.",
      date: new Date("2023-06-20T16:38:59Z"),
      author: "FOX 13 News",
      url: "https://www.fox13news.com/news/tropical-storm-bret-expected-to-strengthen-and-may-become-a-hurricane",
      imageUrl: "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2023/06/1280/720/TS-BRETT-5AM.jpg?ve=1&tl=1"
    },
    {
      title: "A trio of images highlight BepiColombo's third Mercury flyby - European Space Agency",
      description: "The ESA/JAXA BepiColombo mission has made its third of six gravity assist flybys at Mercury, snapping images of a newly named impact crater as well as tectonic and volcanic curiosities as it adjusts its trajectory for entering Mercury orbit in 2025.",
      date: new Date("2023-06-20T15:45:08Z"),
      author: null,
      url: "https://www.esa.int/Science_Exploration/Space_Science/BepiColombo/A_trio_of_images_highlight_BepiColombo_s_third_Mercury_flyby",
      imageUrl: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/06/bepicolombo_s_third_mercury_flyby2/24940572-2-eng-GB/BepiColombo_s_third_Mercury_flyby_pillars.png"
    },
    {
      title: "Italy's Fight With China Over F1 Jewel Pirelli Reveals Task of EU Pivot - Bloomberg",
      description: "Italy has become the ultimate test for how a Western economy can roll back its deep dependence on China without making an enemy out of Beijing",
      date: new Date("2023-06-20T18:18:00Z"),
      author: "Daniele Lepido, Chiara Albanese",
      url: "https://www.bloomberg.com/news/articles/2023-06-20/italy-s-fight-with-china-over-f1-jewel-pirelli-reveals-task-of-eu-pivot",
      imageUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itZegTqtAeY0/v0/1200x800.jpg"
    },
    {
      title: "Italy's Fight With China Over F1 Jewel Pirelli Reveals Task of EU Pivot - Bloomberg",
      description: "Italy has become the ultimate test for how a Western economy can roll back its deep dependence on China without making an enemy out of Beijing",
      date: new Date("2023-06-20T18:18:00Z"),
      author: "Daniele Lepido, Chiara Albanese",
      url: "https://www.bloomberg.com/news/articles/2023-06-20/italy-s-fight-with-china-over-f1-jewel-pirelli-reveals-task-of-eu-pivot",
      imageUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itZegTqtAeY0/v0/1200x800.jpg"
    }
  ]

  useEffect(() => {
    console.log(category)
    // เช็คว่า category มี การ update หรือไม่ ถ้า update จะทำอะไร
  }, [category]);
  console.log(newsWorldData)
  return (
    <SimpleGrid cols={2}>
      <Newscard category={category ?? null} news={newsWorldData[0]} />
      <Stack justify="flex-start">
        <NewsStack category={category ?? null} news={newsWorldData[1]} />
        <NewsStack category={category ?? null} news={newsWorldData[2]} />
        <NewsStack category={category ?? null} news={newsWorldData[3]} />
      </Stack>
      <Newscard category={category ?? null} news={newsWorldData[4]} />
      <Newscard category={category ?? null} news={newsWorldData[5]} />
    </SimpleGrid>
  );
};

export default News;
