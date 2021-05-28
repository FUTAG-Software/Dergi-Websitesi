import logo from '../img/hasbi.webp'
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
export default(props) =>{
    return(
        <div className='intro backdrop'>
            <div className='intro-left'>
                <p className="big-header">FÜTAG Hasbi dergisinin ilk sayısı çıktı!</p>
                <p className='italic'>Email listemize kaydol ilk senin haberin olsun!</p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Adresiniz..." />
                        <Button className='subscribe-btn' onClick={mesaj}>Listeye Kaydol</Button>{' '}
                    </Form.Group>
                </Form>
            </div>
            <div className='intro-right'>
                <img className='intro-img' src={logo} height="600px"></img>
                
                <a href="https://online.fliphtml5.com/lkymz/dflj/" target="_blank"><Button className='read-button' variant="light">Hemen Oku!</Button>{' '}</a>
            </div>
        </div>
    )
}
const mesaj = () =>{
    return alert("Teşekkürler! Mesajını Aldık.")
}