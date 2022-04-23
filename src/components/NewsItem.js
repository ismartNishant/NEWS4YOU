import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source, forbadgeC } = props;
    return (
        <div className="my-2">
            <div className="card h-100">
                <div className="newsbadge">
                    <span className={`badge bg-${forbadgeC}`}>{source} <span className="visually-hidden">unread messages</span></span>
                </div>
                <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2021/12/Sensex_up_nifty_airline-770x433.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}... </h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn read-more btn-sm">Read More <i className="fas fa-angle-double-right"></i></a>
                    <p className="author"> <span>Author :</span> {!author ? "unknown" : author}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Date : {new Date(date).toGMTString()}</small>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
