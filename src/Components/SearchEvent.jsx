import React from 'react'

function SearchEvent() {
  return (
    <div>
        <div className="search-event container shadow d-flex flex-wrap px-3 py-4">
            <div className='col-lg-6 col-12 mb-3'>
                <form className="d-flex ms-3">
                    <input className="form-control me-2" type="search" placeholder="عنوان، شهر و یا موضوع رویداد مورد نظرتان را جست و جو کنید" aria-label="Search"/>
                    <button className="px-4" type="submit">جستجو</button>
                </form>
            </div>
            <div className='d-flex flex-wrap col-lg-6 col-12'>
                <div className='d-flex col-md-6 col-12 mb-3'>
                    <div className='col-md-5 col-3'>نوع مرتب سازی </div>
                    <div className='col-md-6 col-3 px-2'>
                        <select className="form-select" aria-label="Default select example">
                            <option value="time">زمان</option>
                            <option value="favorite">علاقه مندی</option>
                            <option value="popular">محبوب ترین</option>
                        </select>
                    </div>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        رویدادهای آنلاین
                    </label>
                </div>
            </div>
            <div className='col-lg-1 col-md-2 col-sm-4 col-12'>
                <span>نوع فیلتر</span>
            </div>
            <div className='col-md-3 col-sm-6 col-12 px-2 mb-3'>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>انتخاب شهر </option>
                    <option value="1"> تهران </option>
                    <option value="2"> قم  </option>
                    <option value="3"> اصفهان </option>
                    <option value="3"> مشهد </option>
                    <option value="3"> کاشان </option>
                    <option value="3"> شیراز </option>
                </select>
            </div>
            <div className='col-md-3 col-sm-6 col-12 px-2 mb-3'>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue> انتخاب موضوع </option>
                    <option value="1"> تکنولوژی </option>
                    <option value="2"> کارآفرینی </option>
                    <option value="3"> فرهنگی هنری </option>
                </select>
            </div>
            <div className='col-md-3 col-sm-6 col-12 px-2 mb-3'>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue> قیمت </option>
                    <option value="1"> تهران </option>
                    <option value="2"> قم  </option>
                    <option value="3"> اصفهان </option>
                    <option value="3"> مشهد </option>
                    <option value="3"> کاشان </option>
                    <option value="3"> شیراز </option>
                </select>
            </div>
            <div className='col-lg-2 col-12'>
                <button className="btn"> جست و جوی پیشرفته </button>
            </div>

        </div>
    </div>
  )
}

export default SearchEvent