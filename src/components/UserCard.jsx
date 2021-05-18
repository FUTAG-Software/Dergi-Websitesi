function UserCard(props){
    return(
        <div className="user-card" >
            <img className='user-img' src={props.img}></img>
            <h1>{props.name}</h1>
            <p>{props.specs}</p>
        </div>
    )
}
export default UserCard;