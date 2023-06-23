import { Box, Center, Divider, Loader, MediaQuery, SimpleGrid, Space, rem } from "@mantine/core";
import { Stack, Button, Text } from "@mantine/core";
import { Container } from "@mantine/core";
import Newscard from "../components/News";
import { json, useLocation, useParams } from "react-router-dom";
import NewsStack from "../components/NewsStack";
import { NewsInterface, categoryMapper } from "../utils/newsUtils";
import { headlineNewsStyles } from "../styles/headlineNews"
import { useEffect, useState } from "react";
import NewsCard from "../components/News";

const News = () => {
  const { category } = useParams();
  const { pathname } = useLocation();
  const { classes } = headlineNewsStyles();
  const [news, setNews] = useState<NewsInterface[]>([])
  const [newsF5, setNewsF5] = useState<NewsInterface[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setNews([])
    setNewsF5([])
    setLoading(true)
    async function fetchData() {
      fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=22f1aa94799147b78e0c9459099831f6`)
        .then(res => res.json())
        .then(json => {
          // console.log(json)
          const test = json.articles.slice(0, 5)

          test.forEach((element: any) => {
            // console.log(element)
            setNewsF5((prevNewsData) => [...prevNewsData, {
              title: element.title,
              description: element.description,
              date: new Date(element.publishedAt),
              author: element.source.name,
              url: element.url,
              imageUrl: element.urlToImage
            }])
          });

          console.log(newsF5)
          json.articles.splice(0, 5)
          console.log(json)
          json.articles.forEach((element: any) => {
            // console.log(element)
            setNews((prevNewsData) => [...prevNewsData, {
              title: element.title,
              description: element.description,
              date: new Date(element.publishedAt),
              author: element.source.name,
              url: element.url,
              imageUrl: element.urlToImage
            }])

          });

        })
        .catch(error => console.log(error))
      setLoading(false)
    }
    fetchData();
  }, [category])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Container>
      {loading ? <Center><Loader color="gray" size="lg" /></Center> : <>
        <Text className={classes.headlineText} color="black" tt="uppercase" my="xl">{categoryMapper[category ?? "general"]}</Text>

        <SimpleGrid
          breakpoints={[
            { minWidth: 'xs', cols: 1 },
            { minWidth: 'sm', cols: 2 },
          ]}
        >
          {newsF5 && newsF5.length > 0 ? <>
            <Newscard category={category ?? null} news={newsF5[0]} />
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Stack align="center">
                <NewsStack category={category ?? null} news={newsF5[2]} />
                <NewsStack category={category ?? null} news={newsF5[3]} />
              </Stack>
            </MediaQuery>

            <Newscard category={category ?? null} news={newsF5[4]} />
            <Newscard category={category ?? null} news={newsF5[1]} />  </>
            : <></>}
        </SimpleGrid>

        <Divider
          mt={rem(48)}
          color="gray"
          size="sm"
          mb="xs"
          label={
            <>
              <Text className={classes.headlineText} color="black" tt="uppercase">LASTEST NEWS</Text>
              <Space w="sm" />
            </>
          }
        />
        <SimpleGrid
          breakpoints={[
            { minWidth: 'xs', cols: 1 },
            { minWidth: 'sm', cols: 2 },
          ]}
        >
          {news.map((item: any, index: any) => <NewsCard category={category ?? null} news={item} />)}
        </SimpleGrid>
      </>}
    </Container>
  );
};

export default News;

