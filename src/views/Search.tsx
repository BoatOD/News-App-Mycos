import React, { useState } from 'react';
import { TextInput } from '@mantine/core';

function Search() {
  const [value, setValue] = useState('');
  
  const handleSearch = () => {
    const test = `https://newsapi.org/v2/everything?q=${value}&apiKey=3fa13ca565844619bc31559ca018df2f`;
    
    // Perform the fetch request here
    fetch(test)
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
  
  return (
    <>
      <TextInput value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <button type='button' onClick={handleSearch}>Search</button>
    </>
  );
}

export default Search;
