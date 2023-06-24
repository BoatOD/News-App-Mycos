import { TextInput, ActionIcon, useMantineTheme, Grid, Loader, Center, Box, rem, Text } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import News from '../components/News';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';

const Search = () => {
  const theme = useMantineTheme();
  const { query } = useParams();
  const [news, setNews] = useState<any>([])
  const [page, setPage] = useState<number>(1)
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [countNews, setCountNews] = useState<number>(0);
  const [totalResult, setTotalResult] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false)

  const handleSearch = async (value: string) => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_NEWS_SEARCH_API_URL}?q=${value}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}&pageSize=20&page=${page}&sortBy=popularity`);
      if (page <= 1) {
        setLoading(true)
        data.articles.forEach((item: any) => {
          setNews((prevItem: any) => [...prevItem, { title: item.title, description: item.description, date: new Date(item.publishedAt), author: item.source.name, url: item.url, imageUrl: item.urlToImage }])
        });
        setLoading(false)
        setPage(page => page + 1)
        setCountNews(countNews => countNews + data.articles.length)
        setTotalResult(data.totalResults === 0 ? -1 : data.totalResults)
      } else {
        data.articles.forEach((item: any) => {
          setNews((prevItem: any) => [...prevItem, { title: item.title, description: item.description, date: new Date(item.publishedAt), author: item.author, url: item.url, imageUrl: item.urlToImage }])
        });
        setPage(page => page + 1)
        setCountNews(countNews => countNews + data.articles.length)
        setTotalResult(data.totalResults === 0 ? -1 : data.totalResults)
      }
    } catch (error) {
      setLoading(false)
      setPage(1);
      setNews([])
      setCountNews(0);
      setTotalResult(-1);
    }
  }

  useEffect(() => {
    if (query) {
      setSearchQuery(query)
      handleSearch(query);
    }
  }, [query])

  useEffect(() => {
    setPage(1);
    setNews([])
    setCountNews(0);
    setTotalResult(0);
  }, [searchQuery])

  useEffect(() => {
    console.log(page)
  }, [page])

  return (
    <Grid>
      <Grid.Col span="auto"></Grid.Col>
      <Grid.Col xs={8} sm={8} md={6} lg={4}>
        <TextInput my="xl" value={searchQuery} onChange={(event) => setSearchQuery(event.currentTarget.value)}
          icon={<IconSearch size="1.1rem" stroke={1.5} />}
          radius="xl"
          size="md"
          rightSection={
            <ActionIcon size={32} radius="xl" color="gray" variant="filled" onClick={() => handleSearch(searchQuery)}>
              {theme.dir === 'ltr' ? (
                <IconArrowRight size="1.1rem" stroke={1.5} />
              ) : (
                <IconArrowLeft size="1.1rem" stroke={1.5} />
              )}
            </ActionIcon>
          }
          placeholder="Search for News"
          rightSectionWidth={42}
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: "gray",
              },
            },
          })}
          onKeyUp={(e) => e.key === "Enter" && handleSearch(e.currentTarget.value)}
        />
        {loading && <Center><Loader color="gray" size="lg" /></Center>}
        {news && news.length > 0 &&
          <InfiniteScroll
            pageStart={page}
            loadMore={() => handleSearch(searchQuery)}
            threshold={350}
            hasMore={countNews < totalResult}
            loader={<Center key={0}><Loader color="gray" size="lg" /></Center>}
          >
            {news.map((item: any, index: any) => <Box key={index} my="xl"><News category={null} news={item} /></Box>)}
          </InfiniteScroll>}
        {totalResult === -1 && !loading && <Center><Text weight={500} color="black" size="xl">Nothing to show</Text></Center>}
      </Grid.Col>
      <Grid.Col span="auto"></Grid.Col>
    </Grid>
  );
}

export default Search