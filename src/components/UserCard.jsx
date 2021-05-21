function UserCard(props){
    return(
        <div className="user-card" >
            <img className='user-img' src={props.img}></img>
            <h3>{props.name}</h3>
        </div>
    )
}
export default UserCard;