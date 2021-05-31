import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Parallax ,Autoplay} from 'swiper';
import UserCard from './UserCard';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Parallax]);
export default (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay= {{
            delay: 1800,
            disableOnInteraction: false
	    }}
      breakpoints={{
            450: {
            slidesPerView: 1,
            },
            600: {
            slidesPerView: 2,
            },
            850: {
            slidesPerView: 3,   
            },
            1100: {
            slidesPerView: 4,   
            }
            
        }}
       loop>
      {props.users.map( (post) => 
      <SwiperSlide key={post.key}>
        <a href={post.link}>
          <img src= {post.img} height="200" width="200" loading="lazy" alt="alt"/>
        </a>
      </SwiperSlide>)}
    </Swiper>
  );
};