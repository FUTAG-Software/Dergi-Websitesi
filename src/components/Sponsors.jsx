import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import UserCard from './UserCard';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay]);
export default(props) =>{
    return(
    <div className='backdrop sponsors'>
      <h2>Sponsorlar</h2>
      <Swiper
        autoplay= {{
              delay: 1000,
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
          loop>
        {props.users.map( (post) => <SwiperSlide><UserCard key={post.key} name= {post.name} img= {post.img} specs= {post.specs} /></SwiperSlide>)}
      </Swiper>
    </div>
    )

}