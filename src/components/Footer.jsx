export default (props) => {
    return(
        <div className="footer">
            <div className="col-lg-12">
                <h4>Bizi sosyal medyada takip edin!</h4>
                <div className="social-container">
                    {props.social.map( (item) => <span className="fa-stack">
                    <a href={item.link}>
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className={[item.icon, "fa-stack-1x", "fab"].join(' ')}></i>
                    </a>
                </span>)}
                </div>
            </div>
        </div>
    )
}