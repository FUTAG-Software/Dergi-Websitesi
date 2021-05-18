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
                <div className="">
                    <Menu items={cpMenu} key={cpMenu.key}></Menu>
                </div>
                <div className="">
                    <span >Copyright © <a href="ilker.tech">ilker.tech</a></span>
                </div>
            </div>
    )
}