import Swiper from './Swiper';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../img/sponsors/', false, /\.webp$/));
const sponsors=[
  {"key": 1,
    "img": images['webtekno.webp'].default
  },
  {"key": 2,
    "img": images['youthall.webp'].default
  },
  {"key": 3,
    "img": images['girmuh.webp'].default
  },
  {"key": 4,
    "img": images['ogrtas.webp'].default
  },
  {"key": 5,
    "img": images['gswib.webp'].default
  },
  {"key": 6,
    "img": images['kampustenevar.webp'].default
  },
  {"key": 7,
    "img": images['abt.webp'].default
  },
  {"key": 8,
    "img": images['acmfirat.webp'].default
  },
  {"key": 9,
    "img": images['dou.webp'].default
  },
  {"key": 10,
    "img": images['fukadin.webp'].default
  },
  {"key": 11,
    "img": images['onlineGonullu.webp'].default
  }
]

export default() =>{
    return(
    <div id ='spns' className='sponsors'>
      <h2 className="title">Gümüş Sponsorlar</h2>
      <hr/>
      <div className='silver-spn'>
        <img src={images['umutlokmanhekim.webp'].default} alt='sponsor' height='300'></img>
        <img src={images['binovative.webp'].default} alt='sponsor' height='300'></img>
        <img src={images['beykonagi.webp'].default} alt='sponsor' height='300'></img>
      </div>
      <h2 className="title">Medya Sponsorları</h2>
      <hr/>
      <Swiper users={sponsors} key={sponsors.key} />
    </div>
    )

}