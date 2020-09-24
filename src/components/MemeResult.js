import React from 'react';
import Meme from "./Meme";

const MemeResult = ({memeArr}) => {
  
  return (
    <div>
      {
        memeArr.map(meme => {
          return <Meme key={meme.id} memeObj={meme} />
        })
      }
    </div>
  )
}

export default MemeResult;
