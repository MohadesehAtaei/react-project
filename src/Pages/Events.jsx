import React from 'react'

import SliderEvents from '../Components/SliderEvents'
import SearchEvent from '../Components/SearchEvent'
import CardsContainer from '../Components/CardsContainer'

import Modal from '../Components/Modal'

function Events() {
  return (
    <div>
      <Modal/>
        
        <div className='my-5 mx-3 '>
          <SliderEvents/>
        </div>

        <SearchEvent/>
        
        <div>
        <CardsContainer/>

        </div>

        <div className='d-flex justify-content-center my-4'>
          <button className="btn btn-light">رویدادهای بیشتر</button>
        </div>
    </div>
  )
}

export default Events