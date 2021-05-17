import React from 'react';
import Menu from './Menu';
var cpMenu = [
    {
        "key": 1,
        "link" : "sdfsdf.ht",
        "name" : "Ana Sayfa"
    },
    {
        "key": 2,
        "link" : "sdfsdf.ht",
        "name" : "Yesss"
    },
    {
        "key": 3,
        "link" : "sdfsdf.ht",
        "name" : "Privacy"
    },

]

export default (props) => {
    return (
            <div className='copyright'>
                <div className="col-lg-6">
                    <Menu items={cpMenu} key={cpMenu.key}></Menu>
                </div>
                <div className="col-lg-6">
                    <span >Copyright © <a href="#your-link">Your name</a></span>
                </div>
            </div>
    )
}