import React, { Component } from 'react'
//rce

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, date } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://staticg.sportskeeda.com/editor/2022/11/c609c-16681036465482-1920.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">On {date}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem