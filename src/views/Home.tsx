import { Box, Container, rem } from '@mantine/core';
import CarousalSlider from '../components/Carousal';
import HeadlineNews from '../components/HeadlineNews';
import { CarousalData } from '../utils/carousalUtils';
import { useState, useEffect } from 'react';

const Home = () => {
  const [hasError, setErrors] = useState(false)
  const [carousalData, setCarousalData] = useState<CarousalData[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${import.meta.env.VITE_NYTIMES_URL}?api-key=${import.meta.env.VITE_NYTIMES_API_KEY}`);
      res
        .json()
        .then(res => {
          console.log(res.results)
          res.results.forEach((element: any) => {
            if (element.item_type !== "Promo") {
              console.log(element)
              setCarousalData((prevCarousalData) => [...prevCarousalData, { title: element.title, author: element.byline, date: new Date(element.published_date), imageUrl: element.multimedia[0].url, url: element.url }])
            }

          });
          setCarousalData((prevCarousalData) => prevCarousalData.slice(0, 5))
        })
        .catch(err => setErrors(err));
      console.log(carousalData)

    }
    fetchData();
  }, [])
  return (
    <Box>
      <CarousalSlider data={carousalData} />
      <Container mt={rem(48)}>
        <HeadlineNews />
      </Container>
    </Box>
  )
}

export default Home