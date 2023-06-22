import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Grid, Loader, Center, Box, rem } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { MantineProvider } from '@mantine/core';
import { Button, CircularProgress } from '@mui/material'

import React, { useState } from 'react';
import News from '../components/News';

function Search(props: TextInputProps) {
  const theme = useMantineTheme();
  const [news, setNews] = useState<any>([])
  const [value, setValue] = useState('');

  const [loading,setLoading]=useState<boolean>(false)

  const handleSearch = () => {
    const test = `https://newsapi.org/v2/everything?q=${value}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
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


  return (
    <>
      <Grid>
        <Grid.Col span="auto"></Grid.Col>
        <Grid.Col span={6} >
          <TextInput my="xl" value={value} onChange={(event) => setValue(event.currentTarget.value)}
          icon={<IconSearch size="1.1rem" stroke={1.5} />}
          radius="xl"
          size="md"
          rightSection={
            <ActionIcon size={32} radius="xl" color="gray" variant="filled" onClick={handleSearch}>
              {theme.dir === 'ltr' ? (
                <IconArrowRight size="1.1rem" stroke={1.5} />
              ) : (
                <IconArrowLeft size="1.1rem" stroke={1.5} />
              )}
            </ActionIcon>
          }
          placeholder="Search for News"
          rightSectionWidth={42}
          {...props}
          onKeyUp={(e) => e.key === "Enter" && handleSearch()}
        />
        {
          loading ? <Center><Loader color="gray" size="lg" /></Center> : <>{news.map((item: any, index: any) => <Box my="xl"><News category={null} key={index} news={item} /></Box>) }</>
        }
        </Grid.Col>
        <Grid.Col span="auto"></Grid.Col>
      </Grid>

      
    </>
  );
}

export default Search