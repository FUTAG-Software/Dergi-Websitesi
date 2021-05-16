import React from 'react';
import logo from '../img/firstPage-1.webp'
import Button from 'react-bootstrap/Button';
export default(props) =>{
    return(
        <div className='intro'>
            <div className='intro-left'>
                <h3>Hasbi Dergisinin ilk sayısı çıktı!</h3>
                <p>Hemen okuyun!</p>
            </div>
            <div className='intro-right'>
                <img className='intro-img' src={logo} width="500px" height="500px"></img>
                <Button className='read-button' variant="light">Hemen Oku!</Button>{' '}
            </div>

        </div>

    )
}