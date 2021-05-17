import React from 'react';
import logo from '../img/firstPage-1.webp'
import Button from 'react-bootstrap/Button';
export default(props) =>{
    return(
        <div className='intro-container'>
            <div className='backdrop intro'>
                <div className='intro-left'>
                    <p className="big-header">FÜTAG Hasbi dergisinin ilk sayısı çıktı!</p>
                    <p className='italic'>Hemen okuyun!</p>
                </div>
                <div className='intro-right'>
                    <img className='intro-img' src={logo} width="500px" height="600px"></img>
                    <Button className='read-button' variant="light" size="lg" width="100">Hemen Oku!</Button>{' '}
                </div>
            </div>
        </div>
    )
}