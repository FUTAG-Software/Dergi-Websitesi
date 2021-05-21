import Swiper from './Swiper';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../img/sponsors/', false, /\.webp$/));
const sponsors=[
  {"key": 1,
    "name": "sdafasdf",
    "img": images['guy.webp'].default
  },
  {"key": 2,
    "name": "sdafasdf",
    "img": images['guy.webp'].default
  },
  {"key": 3,
    "name": "sdafasdf",
    "img": images['guy.webp'].default
  },
  {"key": 4,
    "name": "sdafasdf",
    "img": images['guy.webp'].default
  },
  {"key": 5,
    "name": "sdafasdf",
    "img": images['guy.webp'].default
  }
]

export default() =>{
    return(
    <div id ='spns' className='sponsors'>
      <h2 className="title">Gümüş Sponsorlar</h2>
      <hr/>
      <Swiper users={sponsors} key={sponsors.key} />
      <h2 className="title">Medya Sponsorları</h2>
      <hr/>
      <Swiper users={sponsors} key={sponsors.key} />
    </div>
    )

}