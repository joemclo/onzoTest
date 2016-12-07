import * as moment from "moment";
import * as React from "react";

export class NewsListItem extends React.Component<any,any>{

    render(){
        const newsItem = this.props.newsItem;

        return(
            <div className="news-list-item-hld">
                <div className="news-list-item">
                    <div className="nl-icon">
                    </div>
                    <div className="nl-details">
                        <div className="nl-title">{newsItem.title}</div>
                        <p className="nl-message">
                            {newsItem.message}
                        </p>
                        <div>
                            <span className="nl-time">
                                {moment(newsItem.time).format("DD.MM.YYYY - hA")}
                            </span>
                            <a className="nl-link" href={newsItem.url}>
                                More details >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}