import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App () {
  return (
    <div className='flex flex-col w-full h-screen background relative overflow-x-hidden items-center'>
      <h1 className='fixed bg-white w-11/12 text-center rounded-lg mt-[40px] py-2 px-10 text-4xl font-bold mx-auto'>
        RANDOM GIFS
      </h1>
      <div className='flex flex-col w-full place-items-center gap-14'>
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
