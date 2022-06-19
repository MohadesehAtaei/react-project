import {sliderInfo} from "../Information";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination, Scrollbar, A11y } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider () {



  return (
    <div className="container ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay, EffectFade, Pagination, Scrollbar, A11y]}
        navigation
        autoplay={{delay: 5000 }}
        // effect={'fade'}
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >

        {
          sliderInfo.map((item) => {
            return <SwiperSlide key={item.id}>
              <div className="card slider border p-3 mb-3">
                <div className="row g-0">
                  <div className="col-md-7">
                    <img src={item.image} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-5">
                    <div className="card-body slider-text">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-muted">
                      <i className="fa-solid fa-calendar-day fs-5 text-muted ps-2"></i>
                        <span>شروع رویداد </span>
                        <span className="text-muted me-2">{item.time}</span>
                      </p>
                      <p className="card-text text-muted">
                      <i className="fa-solid fa-location-dot fs-5 text-muted ps-2"></i>
                        <span> مکان رویداد </span>
                        <span className="text-muted me-2">{item.location}</span>
                      </p>
                      <p className="card-text text-muted">
                      <i className="fa-solid fa-tag fs-5 text-muted ps-2"></i>
                        <span> قیمت بلیت </span>
                        <span className="text-muted me-2">{item.price}</span>
                      </p>
                      <button type="button" className="btn py-2 px-4 ms-0">ثبت نام</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
};






          {/* {
          sliderInfo.map((item) => (
            <div key={item.id}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={item.image} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-muted">
                        <span>شروع رویداد </span>
                        <span className="text-muted">{item.time}</span>
                      </p>
                      <p className="card-text text-muted">
                        <span>مکان رویداد </span>
                        <span className="text-muted">{item.location}</span>
                      </p>
                      <p className="card-text text-muted">
                        <span> قیمت بلیت</span>
                        <span className="text-muted">{item.price}</span>
                      </p>
                      <button type="button" className="btn btn-dark">ثبت نام</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
     