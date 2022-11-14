import React from 'react'
import CardGrid from './components/Grid-model'
import { NavModel } from './components/Nav-model'



const App = ()=> {


  return (
    <>
      {<NavModel />}

      <div className='my-4'>{<CardGrid />}</div>
      
      </>
  )
}

export default App
