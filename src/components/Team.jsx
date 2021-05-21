import Swiper from './Swiper';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../img/writer/', false, /\.webp$/));
  
const team = [
    {
        'key': '1',
        'name': 'deneme',
        "img": images['guy.webp'].default
    },
    {
        'key': '2',
        'name': 'deneme',
        "img": images['guy.webp'].default
    },
    {
        'key': '3',
        'name': 'deneme',
        "img": images['guy.webp'].default
    }
]
export default() =>{
    return (
            <div className='team'>
                <Swiper users={team} key={team.key} ></Swiper>
            </div>
    )

}