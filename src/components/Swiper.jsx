import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Parallax ,Autoplay} from 'swiper';
import UserCard from './UserCard';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Parallax]);
export default (props) => {
  return (
    <Swiper
      autoplay= {{
            delay: 700,
            disableOnInteraction: false
	    }}
      breakpoints={{
            500: {
            slidesPerView: 1,
            },
            900: {
            slidesPerView: 3,   
            }
        }}
       loop>
      {props.users.map( (post) => <SwiperSlide key={post.key}><img src= {post.img} height="300" alt="alt"/></SwiperSlide>)}
    </Swiper>
  );
};