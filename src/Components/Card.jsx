import React from 'react'
import { useState } from 'react'

function EventsCard({image ,title}) {

    const [isSaved, setIsSaved] = useState(false)

  return (
    <div>
        <div className="card-event card my-2 border-0 shadow" style={{maxWidth: '270px'}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className='d-flex'>
                    <div className='text-muted'>یکشنبه ۲۳ خرداد ۱۴۰۱ ساعت ۰۸:۰۰</div>
                    <i className={` fa-bookmark fs-4 text-muted ${isSaved ? "fa-solid" : "fa-regular"}`} onClick={()=> setIsSaved(!isSaved)}></i>
                </div>
                <h5 className="card-title">{title}</h5>
                <div>
                    <i className="fa-solid fa-location-dot fs-5 text-muted ps-2"></i>
                    <span className='text-muted'>تهران</span>
                </div>
                <div>
                    <i className="fa-solid fa-tag fs-5 text-muted ps-2"></i>
                    <span className='text-muted'>رایگان</span>
                </div>
                <div>
                    <i className="fa-solid fa-user-group text-muted ps-2"></i>
                    <span className='text-muted'>دانشگاه صداوسیما تهران</span>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default EventsCard