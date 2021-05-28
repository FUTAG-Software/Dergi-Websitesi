import hasbi from '../img/hasbi.webp';

export default () =>{
    return (
        <div id='posts'>
            <h2 className="title">Sayılar</h2>
            <hr/>
            <div className='post-list'>
                <div className='post-item'>
                    <a className="" href="https://online.fliphtml5.com/lkymz/dflj/" target="_blank">
                    <img src={hasbi} alt='post1' width='200'></img>
                    <div className='post-desc'>
                            <h3>Hasbi 1.Sayı</h3>
                            <p>Mayis 2021</p>
                    </div>
                    </a>
                </div>
            </div>
            
        </div>

    )
}