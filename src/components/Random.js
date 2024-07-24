import React from 'react'
import Spinner from './Spinner'
import useGif from '../hook/useGif'

const Random = () => {


  const {gif, loading, fetchData} = useGif();
  console.log(gif)
  function clickHandler(){
    fetchData();
  }

  return (
    <div className='w-[50vw] flex flex-col items-center bg-green-500 rounded-lg border border-black gap-y-5 mt-40'>
        <h1 className='text-3xl uppercase font-bold underline mt-2'>
          A Random Gif
        </h1>
        {loading ? <Spinner /> : <img src={gif} width='450' alt='img' />}
        <button
          onClick={clickHandler}
          className='w-10/12 text-2xl font-semibold py-2 rounded-lg bg-orange-500 opacity-80 mb-6'
        >
          Generate
        </button>
      </div>
  )
}

export default Random
