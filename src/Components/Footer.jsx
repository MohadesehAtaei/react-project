import React from 'react'

function Footer({parsPack, bazaar, appStore, android}) {
  return (
    <div>
        <footer className='text-light'>
           <div className="container">
            <div className='d-none d-lg-block'>
                <h5 className='mt-4 pt-4'>دسته بندی ها</h5>
                <div className='d-flex'>
                    <div className='col-3'>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای تکنولوژی</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای کارآفرینی</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای فرهنگی هنری</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای گردشگری</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای مدیریت</a>
                    </div>
                    <div className='col-3'>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای کسب و کار</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای فنی، مهندسی و صنعت</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای خیریه</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای مذهبی و مناسبتی</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای پزشکی</a>
                    </div>
                    <div className='col-3'>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای مالی</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای توسعه فردی و خانواده</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای تحصیلی</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای ورزشی</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای سرگرمی</a>
                    </div>
                    <div className='col-3'>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای علوم انسانی</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای علوم پایه</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای غیره</a>
                    </div>
                </div>
                <div className="d-flex mt-3">
                    <div className="col-6 fs-5">شهرهای پر رویداد</div>
                    <div className="col-6 fs-5">دانشگاه ها</div>
                </div>
                <div className="d-flex">
                    <div className='col-3'>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر تهران</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر اصفهان</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر مشهد</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر تبریز</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر شیراز</a>
                    </div>
                    <div className='col-3'>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر کرج</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر قم</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر اراک</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر قدس</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای شهر اهواز</a>
                    </div>
                    <div className='col-3'>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای حوالی جغرافیایی دانشگاه شریف</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای دانشگاه امیر کبیر</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای دانشگاه علم و صنعت ایران</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای دانشگاه تهران</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای صنعتی خواجه نصیر الدین طوسی</a>
                    </div>
                    <div className='col-3'>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای دانشگاه بهشتی</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای دانشگاه الزهرا</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای دانشگاه صنعتی اصفهان</a>
                        <a className='text-decoration-none text-light d-block' href="">رویدادهای دانشگاه آزاد اسلامی واحد نجف آباد</a>
                    </div>

                </div>
                <hr/>
            </div>
            <div className="pt-3 d-none d-lg-block">
                <div className="d-flex">
                    <div className='col-3'>
                        <h5 className='text-light'>استفاده از ایوند</h5>
                        <a className='text-decoration-none text-light d-block' href="">ایجاد رویداد در ایوند</a>
                        <a className='text-decoration-none text-light d-block' href="">سوالات متداول برگزار کنندگان رویداد </a>
                        <a className='text-decoration-none text-light d-block' href="">شرایط استفاده</a>
                        <a className='text-decoration-none text-light d-block' href="">حریم خصوصی</a>
                        <a className='text-decoration-none text-light d-block' href="">تعرفه ها</a>
                        <button className='btn btn-outline-light'>ورود به سالن یاب</button>
                    </div>
                    <div className='col-3'>
                    <h5 className='text-light'>در وبلاگ ایوند بخوانید</h5>
                        <a className='text-decoration-none text-light d-block' href=""> چرا رویداد </a>
                        <a className='text-decoration-none text-light d-block' href=""> برنامه ریزی و برگزاری رویداد </a>
                        <a className='text-decoration-none text-light d-block' href=""> از رویداد ها چه خبر؟ </a>
                        <a className='text-decoration-none text-light d-block' href=""> فروش و بازاریابی رویدادها </a>
                        <a className='text-decoration-none text-light d-block' href="">خبرهای ایوند</a>
                    </div>
                    <div className='col-3'>
                        <div className="ps-3">
                            <h5 className='text-light'>تماس با تیم پشتیبانی</h5>
                            <div className="d-flex border border-light ms-5 my-2">
                                <div className='bg-light'>244</div>
                                <div className=''><span className='py-2 px-3'>43407788</span></div>
                            </div>
                            <div className="d-flex border border-light ms-5 my-2">
                                <div className='bg-light'>244</div>
                                <div><span className='py-2 px-3'> سوالات متداول </span></div>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-light'>اپلیکیشن برگزار کنندگان</h5>
                            <div className='d-flex'>
                                <img className='bazaar ms-1' src={bazaar} alt="" />
                                <img src={appStore} alt="" />
                            </div>
                            <h5 className='text-light'>اپلیکیشن شرکت کنندگان</h5>
                            <div>
                                <img src={android} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <br/>
                        <a className='text-decoration-none text-light d-block' href="">
                            <img src={parsPack} alt="ParsPack" />
                        </a>
                    </div>
                </div>
            </div>
            <div className=" pt-3 d-block d-lg-none">
                <div className="ps-3 d-flex justify-content-center">
                    <h5 className='text-light pt-2 ps-4'>تماس با تیم پشتیبانی</h5>
                    <div className="d-flex border border-light ms-5 my-2">
                        <div className='bg-light'>244</div>
                        <div className=''><span className='py-2 px-3'>43407788</span></div>
                    </div>
                    <div className="d-flex border border-light ms-5 my-2">
                        <div className='bg-light'>244</div>
                        <div><span className='py-2 px-3'> سوالات متداول </span></div>
                    </div>
                </div>
            </div>

            <hr/>
            <div className="d-flex flex-wrap pb-5">
                <nav className='col-md d-flex'>
                    <a className='text-decoration-none text-light px-3' href="">درباره ایوند</a>
                    <a className='text-decoration-none text-light px-3' href="">بلاک</a>
                    <a className='text-decoration-none text-light px-3' href="">تماس با ایوند</a>
                    <a className='text-decoration-none text-light px-3' href="">ابزار و ویژگی ها</a>
                    <a className='text-decoration-none text-light px-3' href="">راهنما</a> 
                </nav>
                <div className='col-md d-flex justify-content-end'>
                    <i className="fa-brands fa-telegram fs-3 me-3"></i>
                    <i className="fa-brands fa-twitter fs-3 me-3"></i>
                    <i className="fa-brands fa-facebook-square fs-3 me-3"></i>
                    <i className="fa-brands fa-linkedin fs-3 me-3"></i>
                    <i className="fa-brands fa-instagram fs-3 me-3"></i>
                </div>
            </div>

           </div>
        </footer>
    </div>
  )
}

export default Footer