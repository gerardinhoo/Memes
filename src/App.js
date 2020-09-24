import React, {useState, useEffect} from 'react';
import './App.css';
import SearchMeme from "./components/SearchMeme"
import MemeResult from "./components/MemeResult";
import axios from "axios";


const App = () => {   
  const [allMemes, setAllMemes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
      .then(data => {
        setAllMemes(data.data.data.memes)
      })
  }, [])

  const searchTextOnChange = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <div>
      <SearchMeme searchSomeMemes={searchTextOnChange} />
      <MemeResult memeArr={allMemes.filter(meme => meme.name.toLowerCase().includes(searchText) ) }/>
    </div>
  );
}

export default App;
