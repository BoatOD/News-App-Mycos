import React, { useState } from 'react';
import { TextInput } from '@mantine/core';

import News from '../components/News';

function Search() {
  const [value, setValue] = useState('');

  const [news, setNews] = useState<any>([])

  const handleSearch = () => {
    const test = `https://newsapi.org/v2/everything?q=${value}&apiKey=3fa13ca565844619bc31559ca018df2f`;
    fetch(test)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.articles.forEach((item: any) => {
          setNews((prevItem: any) => [...prevItem, { title: item.title, description: item.description, date: new Date(item.publishedAt), author: item.author, url: item.url, imageUrl: item.urlToImage }])
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
  return (
    <>
      <TextInput value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <button type='button' onClick={handleSearch}>Search</button>
      {news.map((item: any, index: any) => <News category={null} key={index} news={item} /> )}
    </>
  );
}

export default Search;
