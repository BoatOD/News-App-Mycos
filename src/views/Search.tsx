import { TextInput, ActionIcon, useMantineTheme, Grid, Loader, Center, Box } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

import { useEffect, useState } from 'react';
import News from '../components/News';
import { useParams } from 'react-router-dom';

const Search = () => {
  const theme = useMantineTheme();
  const { query } = useParams();
  const [news, setNews] = useState<any>([])
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false)

  const handleSearch = (value: string) => {
    const test = `https://newsapi.org/v2/everything?q=${value}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}&pageSize=50`;
    setLoading(true)
    setNews([]);
    fetch(test)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.articles.forEach((item: any) => {
          setNews((prevItem: any) => [...prevItem, { title: item.title, description: item.description, date: new Date(item.publishedAt), author: item.author, url: item.url, imageUrl: item.urlToImage }])
        });
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if(query){
      setSearchQuery(query)
      handleSearch(query);
    }

  }, [query])
  return (
    <Grid>
      <Grid.Col span="auto"></Grid.Col>
      <Grid.Col span={6} >
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
        {
          loading ? <Center><Loader color="gray" size="lg" /></Center> : <>{news.map((item: any, index: any) => <Box key={index} my="xl"><News category={null} news={item} /></Box>)}</>
        }
      </Grid.Col>
      <Grid.Col span="auto"></Grid.Col>
    </Grid>
  );
}

export default Search