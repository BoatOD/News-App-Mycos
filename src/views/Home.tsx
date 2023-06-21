import { Box, Container } from '@mantine/core';
import CarousalSlider from '../components/Carousal';
import HeadlineNews from '../components/HeadlineNews';
const Home = () => {
  return (
    <Box>
      <CarousalSlider />
      <Container mt={48}>
        <HeadlineNews />
      </Container>
    </Box>
  )
}

export default Home