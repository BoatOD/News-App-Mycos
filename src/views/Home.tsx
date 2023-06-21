import { Box, Container, rem } from '@mantine/core';
import CarousalSlider from '../components/Carousal';
import HeadlineNews from '../components/HeadlineNews';
import { CarousalData } from '../utils/carousalUtils';
const Home = () => {
  const carousalData: CarousalData[] = [
    {
      title: "Attack by Palestinian Gunmen Prompts Building Plan and Settler Violence",
      author: "By Patrick Kingsley",
      date: new Date("2023-06-21T09:46:13-04:00"),
      imageUrl: "https://static01.nyt.com/images/2023/06/21/multimedia/21israel-settlements-01-fwcj/21israel-settlements-01-fwcj-superJumbo.jpg",
      url: "https://www.nytimes.com/2023/06/21/world/middleeast/west-bank-settlement-palestinian-israeli-violence.html"
    },
    {
      title: "In Iran, Some Are Chasing the Last Drops of Water",
      author: "By Vivian Yee and Leily Nikounazar",
      date: new Date("2023-06-21T09:55:10-04:00"),
      imageUrl: "https://static01.nyt.com/images/2023/06/21/world/21iran-water/21iran-water-superJumbo.jpg",
      url: "https://www.nytimes.com/2023/06/21/world/middleeast/iran-drought-water-climate.html",
    },
    {
      title: "Why Is Narendra Modi So Popular? Tune In to Find Out.",
      author: "By Mujib Mashal",
      date: new Date("2023-06-21T02:18:15-04:00"),
      imageUrl: "https://static01.nyt.com/images/2023/06/20/multimedia/20india-modia-radio-2-ptzl/20india-modia-radio-2-ptzl-superJumbo.jpg",
      url: "https://www.nytimes.com/2023/06/21/world/asia/india-modi-radio-mann-ki-baat.html"
    },
    {
      title: "OceanGate Was Warned of Potential for ‘Catastrophic’ Problems With Titanic Mission",
      author: "By Nicholas Bogel-Burroughs, Jenny Gross and Anna Betts",
      date: new Date("2023-06-20T15:16:45-04:00"),
      imageUrl: "https://static01.nyt.com/images/2023/06/20/multimedia/20titanic-blog-industry-zmfl/20titanic-blog-industry-zmfl-superJumbo.jpg",
      url: "https://www.nytimes.com/2023/06/20/us/oceangate-titanic-missing-submersible.html"
    },
    {
      title: "South Korea to Drop ‘Killer Questions’ From College Entrance Exam",
      author: "By Jin Yu Young",
      date: new Date("2023-06-21T08:02:23-04:00"),
      imageUrl: "https://static01.nyt.com/images/2023/06/21/multimedia/00skorea-exam-tpwl/00skorea-exam-tpwl-superJumbo.jpg",
      url: "https://www.nytimes.com/2023/06/21/world/asia/south-korea-csat-questions.html"
    }
  ]
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