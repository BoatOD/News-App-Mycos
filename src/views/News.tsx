import { SimpleGrid } from '@mantine/core';
import { Stack, Button } from '@mantine/core';
import { Container } from '@mantine/core';
import Newscard from '../components/News';
import { useParams } from 'react-router-dom';
import NewsStack from '../components/NewsStack';
import { NewsInterface } from '../utils/newsUtils';
import { useState, useEffect } from "react"
import axios from 'axios';

const News = () => {
  const { category } = useParams();
  const country = "us";
    const [news, setNews] = useState<NewsInterface[]>([])
    const loadNews = async () => {
      setNews([])
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_NEWS_API_URL}?apiKey=${import.meta.env.VITE_NEWS_API_KEY}&country=${country}&sortBy=popularity&category=${category}`);
            console.log(data)
            data.articles.forEach((item: any) => {
                setNews((prevItem) => [...prevItem, { title: item.title, description: item.description, date: new Date(item.publishedAt), author: item.author, url: item.url, imageUrl: item.urlToImage }])
            });
            console.log(news)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadNews();
    }, [])
    useEffect(() => {
      loadNews();
  }, [category])
  return (
    <SimpleGrid cols={2}>
      {news.length > 0 && <><div>
        <Container>
         <Newscard category={category ?? null} news={news[0]}/>
        </Container>
      </div>
      <div>
        <Stack justify="flex-start">
          <div>
            <Container>
              <NewsStack category={category ?? null} news={news[1]}/>
            </Container>
          </div>
          <div>
            <Container>
              <NewsStack category={category ?? null} news={news[2]}/>
            </Container>
          </div>
          <div>
            <Container>
              <NewsStack category={category ?? null} news={news[3]}/>
            </Container>
          </div>
        </Stack>
      </div>
      <div>
        <Container>
          <Newscard category={category ?? null} news={news[4]}/>
        </Container>
      </div>
      <div>
        <Container>
          <Newscard category={category ?? null} news={news[5]}/>
        </Container>
      </div></>}
    </SimpleGrid>
  )
}

export default News