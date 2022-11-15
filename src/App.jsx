import React from 'react'
import CardGrid from './components/GridModel'
import { NavModel } from './components/NavModel'
import { FooterModel } from './FooterModel'
import { FormModel } from './FormModel'

const App = ()=> {

  return (
    <>
      {<NavModel />}

      <div 
      className='my-4'
      >
        {<CardGrid />}
      </div>

      {<FormModel />}

      {<FooterModel />}
      
      </>
  )
}

export default App
