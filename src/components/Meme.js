import React from 'react';


const Meme = ({memeObj}) => { 
  console.log(memeObj)
  return (
    <div>
     <h2>{memeObj.name}</h2>
     <img src={memeObj.url} alt="memes" />
    </div>
  )
}

export default Meme
