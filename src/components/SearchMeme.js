import React from 'react'

const SearchMeme = ({searchSomeMemes}) => {
  const onSearchChange = (event) => {
    searchSomeMemes(event)
  }
  return (
    <div>
      <form>
        <input type="text" placeholder="Search for Memes" onChange={onSearchChange} />
      </form>
    </div>
  )
}

export default SearchMeme;
