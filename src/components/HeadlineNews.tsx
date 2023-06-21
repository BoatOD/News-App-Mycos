import { Box } from "@mantine/core"
import NewsSection from "./NewsSection";
import { tabs } from "../utils/navbarUtils";
import { NewsInterface } from "../utils/newsUtils";

const HeadlineNews = () => {
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
    }
  ]
  const newsBuinessData: NewsInterface[] = [
    {
      title: "Top-Notch Biotech Catapults To Record High On $2.4 Billion Lilly Buyout - Investor's Business Daily",
      description: null,
      date: new Date("2023-06-20T16:57:00Z"),
      author: "Investor's Business Daily",
      url: "https://www.investors.com/news/technology/dice-stock-catapults-to-record-high-on-eli-lilly-buyout/",
      imageUrl: null
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
      title: "ERCOT issues request for electricity conservation in Texas - The Texas Tribune",
      description: "Texans are being asked to conserve energy from 4 to 8 p.m. Tuesday as temperatures climb over 100 degrees for much of the state. Power grid operator ERCOT says the situation is not currently an emergency.",
      date: new Date("2023-06-20T16:35:27Z"),
      author: "Emily Foxhall",
      url: "https://www.texastribune.org/2023/06/20/ercot-texas-grid-heat/",
      imageUrl: "https://thumbnails.texastribune.org/c3INodbhC0XMkHHHnRQnYlKXlB4=/1200x630/filters:quality(95)/static.texastribune.org/media/files/cd26e8faf35a3ebb27e5af9ddeaedd8f/Heat%20File%20KC%20TT%2002.jpg"
    },
    {
      title: "GBTC Share Price Soars, Discount Narrows to Multi-Month Low on BlackRock ETF Filing Optimism - CoinDesk",
      description: "Investors turned optimistic about Grayscale allowing redemptions in the future after BlackRock’s filing for spot bitcoin ETF last week, one analyst said.",
      date: new Date("2023-06-20T15:46:00Z"),
      author: "Krisztian  Sandor",
      url: "https://www.coindesk.com/markets/2023/06/20/gbtc-share-price-soars-discount-narrows-to-multi-month-low-on-blackrock-etf-filing-optimism/",
      imageUrl: "https://www.coindesk.com/resizer/tO7497fVQ4RUVcNreW9Gc-yrp58=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/67VX44SKCVBD5KEN7MEHSF4RFM.jpeg"
    },
    {
      title: "Is food inflation higher in Europe than in the UK? - BBC",
      description: "Food prices are growing faster in the UK than in Germany, Portugal or Sweden.",
      date: new Date("2023-06-20T15:33:57Z"),
      author: "https://www.facebook.com/bbcnews",
      url: "https://www.bbc.com/news/business-65962497",
      imageUrl: "https://ichef.bbci.co.uk/news/1024/branded_news/7369/production/_130154592_b9d59ad22e76a14a73c5d21e60fddf73a6affe7c.jpg"
    }
  ]
  const newsScienceData: NewsInterface[] = [
    {
      title: "The animal kingdom is full of cheats, and it could be a driving force in evolution - Livescience.com",
      description: "\"Even though it might seem brazen and despicable to our human social sensibilities, cheating thrives in the biological world.\"",
      date: new Date("2023-06-20T13:58:37Z"),
      author: "Lixing Sun",
      url: "https://www.livescience.com/animals/the-animal-kingdom-is-full-of-cheats-and-it-could-be-a-driving-force-in-evolution",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/U5UMVGAU34WM4ZLRsX25te-1200-80.jpg"
    },
    {
      title: "NASA spacecraft captures glowing green dot on Jupiter caused by a lightning bolt - CBS News",
      description: "Lightning also occurs on other planets. Here's what we know about the lightning strike on Jupiter.",
      date: new Date("2023-06-20T13:48:52Z"),
      author: "Caitlin O'Kane",
      url: "https://www.cbsnews.com/news/nasa-jupiter-green-dot-lightning-bolt-image-junocam-spacecraft/",
      imageUrl: "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/20/0d02920d-a253-4466-95a6-926782b57e3b/thumbnail/1200x630/b0ae43998e1f0a05f107de9cdaaeb279/52413493052-c61f80eb38-o.jpg?v=23da2bed74e9783333cf303fba619e89"
    }
  ]
  const newsEntertainmentData: NewsInterface[] = [
    {
      title: "Spotify’s Bitter Break With Royals Also Ends Exclusive Podcast Deals Era - Hollywood Reporter",
      description: "The audio giant has essentially abandoned the model for its new talent deals and is releasing some of its previously exclusive shows — as well as a new show from Trevor Noah — on rival platforms.",
      date: new Date("2023-06-20T17:38:21Z"),
      author: "J. Clara Chan",
      url: "https://www.hollywoodreporter.com/business/digital/spotify-markle-royal-podcast-deal-1235519656/",
      imageUrl: "https://www.hollywoodreporter.com/wp-content/uploads/2023/06/Meghan-Harry-Outside-Windsor-Castle-GettyImages-1243104552-H-2023.jpg?w=1024"
    },
    {
      title: "Challengers' Trailer: Zendaya Playing Her Own Game Of Doubles In Luca Guadagnino's Tennis Drama - Deadline",
      description: "MGM on Tuesday dropped the official trailer for Luca Guadagnino’s Challengers, his new movie starring Zendaya as a tennis prodigy-turned-coach. The love triangle movie, which also stars West …",
      date: new Date("2023-06-20T17:38:00Z"),
      author: "Patrick Hipes, Patrick Hipes",
      url: "https://deadline.com/video/challengers-trailer-photos-zendaya-luca-guadagninos-movie/",
      imageUrl: "https://deadline.com/wp-content/uploads/2023/06/Challengers.jpg?w=1024"
    },
    {
      title: "Georgia rapper among 19 named in sweeping gang, drug indictment - WSB Atlanta",
      description: "Tyquian Terrel Bowman, known as Quando Rondo, was one of 19 people indicted in Chatham County on Wednesday",
      date: new Date("2023-06-20T16:49:44Z"),
      author: "WSBTV.com News Staff",
      url: "https://www.wsbtv.com/news/local/georgia-rapper-among-19-named-sweeping-gang-drug-indictment/BSE35YPM7NCHFL2I3XYQJ3NO5A/",
      imageUrl: "https://cmg-cmg-tv-10010-prod.cdn.arcpublishing.com/resizer/OaZITX74ODpr4RpMpCpxdFbQWaM=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/7NXWTGKMPJBWXL2GBH667ZK2PA.jpg"
    }
  ]
  return (
    <Box>
      <NewsSection category={tabs[0]} news={newsWorldData} />
      <NewsSection category={tabs[3]} news={newsBuinessData} />
      <NewsSection category={tabs[1]} news={newsScienceData} />
      <NewsSection category={tabs[4]} news={newsEntertainmentData} />
    </Box>
  )
}

export default HeadlineNews