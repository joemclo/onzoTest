import * as moment from "moment";
import * as React from "react";

export class NewsListItem extends React.Component<any,any>{

    render(){
        const newsItem = this.props.newsItem;

        return(
            <div>
                <div>
                    ICON
                </div>
                <div>
                    <h4>{newsItem.title}</h4>
                    <p>{newsItem.message}</p>
                    <div>
                        <span>
                            {moment(newsItem.displayTime).format("DD.MM.YYYY - hA")}
                        </span>
                        <a href={newsItem.url}>
                            More details >
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}