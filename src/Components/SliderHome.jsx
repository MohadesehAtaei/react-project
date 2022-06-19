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

function SliderHome() {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay, EffectFade, Pagination, Scrollbar, A11y]}
        navigation
        autoplay={{delay: 5000 }}
        // effect={'fade'}
        speed={800}
        spaceBetween={50}
        // slidesPerView={3}
        loop
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >

        {
          sliderInfo.map((item) => {
            return <SwiperSlide key={item.id}>
              <div className="card border p-3 mb-3">
                <div className=" g-0">
                  <div className="col">
                    <img src={item.image} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col">
                    <div className="card-body">
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
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  )
}

export default SliderHome