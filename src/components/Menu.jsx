import React from 'react';

export default (props) => {
    return (
        <div className= 'menu'>
            <ul className="list-unstyled">
                {props.items.map( (item) => <li className='menu-item nav-item'><a className='nav-link' href={item.link}>{item.name}</a></li>)}
            </ul>
        </div> 
    )
}