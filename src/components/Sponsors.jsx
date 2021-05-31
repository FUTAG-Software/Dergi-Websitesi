import Swiper from './Swiper';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../img/sponsors/', false, /\.webp$/));
const sponsors=[
  {"key": 1,
  "link": "http://www.webtekno.com",
    "img": images['webtekno.webp'].default
  },
  {"key": 2,
  "link": "http://www.youthall.com",
    "img": images['youthall.webp'].default
  },
  {"key": 3,
  "link": "http://www.girisimcimuhendis.com",
    "img": images['girmuh.webp'].default
  },
  {"key": 4,
  "link": "http://www.ogrenmetasarimlari.com",
    "img": images['ogrtas.webp'].default
  },
  {"key": 5,
  "link": "http://www.instagram.com/gsuwib",
    "img": images['gswib.webp'].default
  },
  {"key": 6,
  "link": "http://www.kampustenevar.com",
    "img": images['kampustenevar.webp'].default
  },
  {"key": 7,
  "link": "http://www.univerlist.com/tr",
    "img": images['univerlist.webp'].default
  },
  {"key": 8,
  "link": "http://www.acmfirat.org",
    "img": images['acmfirat.webp'].default
  },
  {"key": 9,
  "link": "http://www.doustartup.com",
    "img": images['dou.webp'].default
  },
  {"key": 10,
    "link": "http://www.instagram.com/fukcam23",
    "img": images['fukadin.webp'].default
  },
  {"key": 11,
    "link": "http://www.onlinegonullu.com",
    "img": images['onlineGonullu.webp'].default
  },
  {"key": 12,
    "link": "http://www.uniaktivite.com",
    "img": images['uniakt.webp'].default
  },
  {"key": 13,
    "link": "http://www.fuadlibilisim.org",
    "img": images['abt.webp'].default
  }
]

export default() =>{
    return(
    <div id ='spns' className='sponsors'>
      <h2 className="title">Gümüş Sponsorlar</h2>
      <hr/>
      <div className='silver-spn'>
        <a href="http://www.instagram.com/umutlokmanhekim">
          <img src={images['umutlokmanhekim.webp'].default} alt='sponsor' width="250" height='250'></img>
        </a>
        <a href="http://www.binovative.com">
          <img src={images['binovative.webp'].default} alt='sponsor' width="250" height='250'></img>
        </a>
        <a href="http://www.instagram.com/afyonbeykonagi">
          <img src={images['beykonagi.webp'].default} alt='sponsor' width="250" height='250'></img>
        </a>
      </div>
      <h2 className="title">Medya Sponsorları</h2>
      <hr/>
      <Swiper users={sponsors} key={sponsors.key} />
    </div>
    )

}