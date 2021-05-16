import React from 'react';
import Menu from './Menu';
var cpMenu = [
    {
        "link" : "sdfsdf.ht",
        "name" : "Ana Sayfa"
    },
    {
        "link" : "sdfsdf.ht",
        "name" : "Yesss"
    },
    {
        "link" : "sdfsdf.ht",
        "name" : "Privacy"
    },

]

export default (props) => {
    return (
            <div className='copyright row'>
                <div className="col-lg-6">
                    <Menu items={cpMenu}></Menu>
                </div>
                <div className="col-lg-6">
                    <p className="p-small statement">Copyright © <a href="#your-link">Your name</a></p>
                </div>
            </div>
    )
}