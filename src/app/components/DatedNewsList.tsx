import * as React from "react";

import {NewsListItem} from "./NewsListItem";

export class DatedNewsList extends React.Component<any,any>{
    constructor(context, props) {
        super(context, props);
    }

    render() {

        const newsItems = this.props.news.map((newsItem) => {
            return <NewsListItem
                key={newsItem.id}
                newsItem={newsItem}
            />
        })

        return (
            <div>
                {newsItems}
            </div>
        )
    }
}