import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Autoplay } from 'swiper';
import UserCard from './UserCard';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Autoplay ]);
export default (props) => {
  return (
    <Swiper
      onSlideChange={() => console.log('slide change')}
      autoplay= {{
            delay: 4000,
            disableOnInteraction: false
	    }}
      breakpoints={{
            // when window width is >= 640px
            300: {
            slidesPerView: 1,
            },
            // when window width is >= 768px
            500: {
            slidesPerView: 2,
            },
            700: {
            slidesPerView: 3,
            },
            900: {
            slidesPerView: 4,   
            }
        }}
      onSwiper={(swiper) => console.log(swiper)} navigation loop>
      {props.users.map( (post) => <SwiperSlide><UserCard name= {post.name} img= {post.img} specs= {post.specs} /></SwiperSlide>)}
    </Swiper>
  );
};