import React from 'react';
import logo from '../img/firstPage-1.webp'
import Button from 'react-bootstrap/Button';
export default(props) =>{
    return(
        <div className='intro backdrop'>
            <div className='intro-left'>
                <p className="big-header">FÜTAG Hasbi dergisinin ilk sayısı çıktı!</p>
                <p className='italic'>Hemen okuyun!</p>
            </div>
            <div className='intro-right'>
                <img className='intro-img' src={logo} height="600px"></img>
                <Button className='read-button' variant="light">Hemen Oku!</Button>{' '}
            </div>
        </div>
    )
}