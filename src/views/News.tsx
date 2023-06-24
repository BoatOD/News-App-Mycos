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
    
    async function fetchData() {
      setLoading(true)
      fetch(`${import.meta.env.VITE_NEWS_API_URL}?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
        .then(res => res.json())
        .then(json => {
          const test = json.articles.slice(0, 5)

          test.forEach((element: any) => {
            setNewsF5((prevNewsData) => [...prevNewsData, {
              title: element.title,
              description: element.description,
              date: new Date(element.publishedAt),
              author: element.source.name,
              url: element.url,
              imageUrl: element.urlToImage
            }])
          });

          json.articles.splice(0, 5)
          json.articles.forEach((element: any) => {
            setNews((prevNewsData) => [...prevNewsData, {
              title: element.title,
              description: element.description,
              date: new Date(element.publishedAt),
              author: element.source.name,
              url: element.url,
              imageUrl: element.urlToImage
            }])

          });
          setLoading(false)
        })
        .catch(error => console.log(error))
      
    }
    fetchData();
  }, [category])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Container>
      {loading ? <Center mt="xl"><Loader color="gray" size="xl" /></Center> : <>
        <Text className={classes.headlineText} color="black" tt="uppercase" my="xl">{categoryMapper[category ?? "general"]}</Text>

        <SimpleGrid
          breakpoints={[
            { minWidth: 'xs', cols: 1 },
            { minWidth: 'sm', cols: 2 },
          ]}
        >
          {newsF5 && newsF5.length > 0 ? <>
            <Newscard category={categoryMapper[category ?? "general"]} news={newsF5[0]} />
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Stack align="center">
                <NewsStack category={categoryMapper[category ?? "general"]} news={newsF5[2]} />
                <NewsStack category={categoryMapper[category ?? "general"]} news={newsF5[3]} />
              </Stack>
            </MediaQuery>

            <Newscard category={categoryMapper[category ?? "general"]} news={newsF5[4]} />
            <Newscard category={categoryMapper[category ?? "general"]} news={newsF5[1]} />  </>
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
          {news.map((item: any, index: any) => <NewsCard key={index} category={categoryMapper[category ?? "general"]} news={item} />)}
        </SimpleGrid>
      </>}
    </Container>
  );
};

export default News;