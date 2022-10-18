import React from 'react'
import Left from '../Sections/Left'
import Right from '../Sections/Right'

const Home = () => {
  return (
    <div className='row w-100 mx-0 main' >
      <div className='col-md-6 col black'>
        <Left />
      </div>
      <div className='col-md-6 col purple'>
        <Right />
      </div>
    </div>
  )
}

export default Home