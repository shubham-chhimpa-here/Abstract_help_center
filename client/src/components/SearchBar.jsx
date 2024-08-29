import React, { useEffect, useState } from 'react'
import debounce from '../utils/debounce';

const SearchBar = ({obj}) => {
  const [title, setTitle] = useState("");
  const [debouncedTitle, setDebouncedTitle] = useState(title);
  const {cardData, setCardData} = obj

  async function getDataByTitle(title) {
    try {
      let headersList = {
      }
  
      let response = await fetch(`/cards/search?searchString=${title}`, {
        method: "GET",
        headers: headersList
      });
  
      let data = await response.json();
      setCardData(data.cards)
      
    } catch (error) {
      console.log(error)
      
    }
   
   


  }
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // limit search request
  // Debounce the title input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTitle(title);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [title]);

  // Fetch data when debounced title changes
  useEffect(() => {
    if(debouncedTitle.trim())
      getDataByTitle(debouncedTitle);
    
  }, [debouncedTitle]);

  return (
    <div id='searchbarContainer'>
      <h1>
        How can we help?
      </h1>
      <input type="search" placeholder='Search' name="" id="" onChange={handleChange} />
    </div>
  )
}

export default SearchBar;