import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Autoplay } from 'swiper';
import UserCard from './UserCard';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Autoplay ]);
export default (props) => {
  return (
    <Swiper
      autoplay= {{
            delay: 4000,
            disableOnInteraction: false
	    }}
      breakpoints={{
            // when window width is >= 640px
            300: {
            slidesPerView: 2,
            },
            // when window width is >= 768px
            500: {
            slidesPerView: 3,
            },
            700: {
            slidesPerView: 4,
            },
            900: {
            slidesPerView: 5,   
            }
        }}
      navigation loop>
      {props.users.map( (post) => <SwiperSlide><UserCard key={post.key} name= {post.name} img= {post.img} specs= {post.specs} /></SwiperSlide>)}
    </Swiper>
  );
};