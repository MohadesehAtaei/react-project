import React from 'react'
import Card from './Card'
import {cardInfo} from '../Information'

function Events({image}) {
  return (
    <div>
        <div className="container my-4">
            <div>
                <div className="d-flex flex-wrap justify-content-around">

                  {
                    cardInfo.map((item, id) => (
                      <Card
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      time={item.time}
                      location={item.location}
                      price={item.price}
                      />
                    ))
                  }
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Events