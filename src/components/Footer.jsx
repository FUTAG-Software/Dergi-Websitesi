import React from 'react';

export default (props) => {
    return(
        <div className="footer row">
            <div className="col-lg-12">
                <h4>This is an example text.</h4>
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