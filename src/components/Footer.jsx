import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
var social = [
    {
      "key": 1,
      "link": "sadfasdf.com",
      "icon": "fa-facebook-f"
    },
    {
      "key": 2,
      "link": "213123.com",
      "icon": "fa-instagram"
    },
    {
      "key": 3,
      "link": "qdscc.com",
      "icon": "fa-youtube"
    },
    {
      "key": 4,
      "link": "qwqeqwe.com",
      "icon": "fa-pinterest"
    }
  ]

export default () => {
    return(
        <div className="footer">
          <div>
            <h2 className="title">Bizi sosyal medyada takip edin!</h2>
            <hr/>
            <div className="social-container">
              {social.map( (item) => <span className="fa-stack">
              <a href={item.link}>
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className={[item.icon, "fa-stack-1x", "fab"].join(' ')}></i>
              </a></span>)}
          </div>
          </div>
          <div id='contact'>
            <h2 className="title">İletişim Formu</h2>
            <hr/>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Adınız" />
                <Form.Control type="email" placeholder="Email Adresiniz" />
                <Form.Control as="textarea" rows={3} placeholder="Mesajınız" />
                <Button className='subscribe-btn'>Gönder</Button>{' '}
              </Form.Group>
            </Form>
          </div>
        </div>
    )
}