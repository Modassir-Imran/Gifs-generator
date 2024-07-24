import React, { useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hook/useGif'

//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY


const Tag = () => {
  const [tag, setTag] = useState('car')
  const {gif, loading, fetchData} = useGif()
  function clickHandler(tag){
    fetchData(tag);
  }

  return (
    <div>
      <div className='w-[50vw] flex flex-col items-center bg-blue-500 rounded-lg border border-black gap-y-5 mt-[15px] mb-20'>
        <h1 className='text-3xl uppercase font-bold underline mt-2'>
          Random {tag} Gif
        </h1>
        {loading ? <Spinner /> : <img src={gif} width='450' alt='img' />}
        <input
          onChange={(event) => setTag(event.target.value)}
          value={tag}
          className='text-2xl font-medium w-10/12 py-2 rounded-lg mb-[3px] text-center'
        />
        <button
          onClick={ () => clickHandler(tag)}
          className='w-10/12 py-2 rounded-lg bg-orange-500 text-2xl font-semibold opacity-80 mb-6'
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export default Tag
