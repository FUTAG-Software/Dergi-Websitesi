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
        "img": images['kursat.webp'].default
    },
    {
        'key': '2',
        "img": images['emre.webp'].default
    },
    {
        'key': '3',
        "img": images['fatma.webp'].default
    },
    {
        'key': '4',
        "img": images['sami.webp'].default
    },
    {
        'key': '5',
        "img": images['sibel.webp'].default
    },
    {
        'key': '6',
        "img": images['yesim.webp'].default
    },
    {
        'key': '7',
        "img": images['zeliha.webp'].default
    },
    {
        'key': '8',
        "img": images['ceyda.webp'].default
    },
    {
        'key': '9',
        "img": images['zeynep.webp'].default
    },
    {
        'key': '10',
        "img": images['rumeysa.webp'].default
    },
    {
        'key': '11',
        "img": images['nurcan.webp'].default
    },
    {
        'key': '12',
        "img": images['azis.webp'].default
    },
    {
        "key": '13',
        "img": images['ahmet.webp'].default
    }
]
export default() =>{
    return (
            <div className='team'>
                <Swiper users={team} key={team.key} ></Swiper>
            </div>
    )

}