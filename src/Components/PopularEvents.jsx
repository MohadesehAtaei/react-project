import React from 'react'
import {useState} from 'react'


function PopularEvents() {

    const [selectEvent, setSelectEvent] = useState([
        {id: 1, isSelect: false , title: 'تمام رویدادها'},
        {id: 2, isSelect: false , title: 'ویژه من'},
        {id: 3, isSelect: false , title: 'امروز'},
        {id: 4, isSelect: true , title: 'این هفته'},
        {id: 5, isSelect: false , title: 'تکنولوژی'},
        {id: 6, isSelect: false , title: 'کارآفرینی'},
        {id: 7, isSelect: false , title: 'مالی'},
        {id: 8, isSelect: false , title: 'مدیریت'},
        {id: 9, isSelect: false , title: 'فرهنگی هنری'},
        {id: 10, isSelect: false , title: 'کسب و کار'},
    ])

    const selectHandler = (e) => {
        let name = e.target.innerHTML   
                selectEvent.forEach(eve => {
                if(name === eve.title){
                    eve.isSelect = true
                } else {
                    eve.isSelect = false
                }
            })
            setSelectEvent(selectEvent);
            console.log(selectEvent);
    }

  return (
    <div>
        <div className="container pop-event">
            <div className='d-flex flex-wrap'>
                <h2 className='col-12 col-md-4'>محبوب ترین رویدادهای</h2>
                <div>
                    <select className="form-select fs-5" aria-label="Default select example">
                    <option value="online">آنلاین</option>
                    <option value="offline">حضوری</option>
                    <option value="all" defaultValue>آنلاین و حضوری</option>
                    </select>
                </div>
                <div>
                    <select className="form-select d-md-none mx-2 fs-5" aria-label="Default select example">
                        <option value="1">تمام رویدادها </option>
                        <option value="2">ویژه من</option>
                        <option value="3">امروز</option>
                        <option value="4">این هفته</option>
                        <option value="5">تکنولوژی</option>
                        <option value="6">کارآفرینی</option>
                        <option value="7">مالی</option>
                        <option value="8">مدیریت</option>
                        <option value="9">فرهنگی هنری</option>
                        <option value="10">کسب و کار</option>
                    </select>
                </div>
                </div>

                <div className=' d-md-flex justify-content-between my-3 d-none'>
                    {
                        selectEvent.map((item) => (
                            <span key={item.id}
                            className={`p-2 ${item.isSelect ? 'selected-event' : ''} `}
                            onClick={selectHandler}
                            >{item.title}</span>
                        ))
                    }
                    {/* <span className='p-2 border rounded border-primary text-primary'> تمام رویدادها </span> */}
                
            </div>
        </div>
    </div>
  )
}

export default PopularEvents