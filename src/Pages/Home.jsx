import React from 'react'
import {useState} from 'react'



import SliderHome from '../Components/SliderHome'
import PopularEvents from '../Components/PopularEvents'
import CardsContainer from '../Components/CardsContainer'
import Modal from '../Components/Modal'





function Home() {

  

  return (
    <div>
      <Modal/>
      <div className="my-5">
        <SliderHome/>
      </div>
      <PopularEvents/>
      <CardsContainer/>
      

    </div>
  )
}

export default Home