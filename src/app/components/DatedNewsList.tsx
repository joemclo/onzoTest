import * as moment from "moment"
import * as React from "react";

import {NewsListHeader} from "./NewsListHeader";
import {NewsListItem} from "./NewsListItem";

export class DatedNewsList extends React.Component<any,any>{
    constructor(context, props) {
        super(context, props);
    }

    render() {

        const newsItems = this.props.news;

        // sort to ensure news times in correct date order
        newsItems.sort(({time: timeA}, {time: timeB}) => {
            if (timeA < timeB) {
                    return 1;
            }
            if (timeA > timeB) {
                return -1;
            }
            return 0;
        })

        // create an array of React elements including
        // each news item and date section titles 
        // organising news from today, yesterday and each subsequent month
        const datedList = [];
        const todayTitle = "today";
        const yesterdayTitle = "yesterday";
        let currentTitle = "";
        newsItems.forEach((newsItem) => {
            const {time} = newsItem;
            const momentedTime = moment(time);
            const today = moment().startOf("day");
            const yesterday = moment().startOf("day").subtract(1, "day");

            let addTitle = false;

            if (momentedTime.isSame(today, "day")) {
                if(currentTitle !== todayTitle) {
                    currentTitle = todayTitle;
                    addTitle = true;
                }
            } else if(momentedTime.isSame(yesterday, "day")) {
                if(currentTitle !== yesterdayTitle) {
                    currentTitle = yesterdayTitle;
                    addTitle = true;
                }
            } else {
                const monthOfItem = momentedTime.format("MMMM YYYY");
                if(currentTitle !== monthOfItem){
                    currentTitle = monthOfItem;
                    addTitle = true;
                }
            }

            if(addTitle) {
                datedList.push(
                    <NewsListHeader
                        key={currentTitle}
                        header={currentTitle}
                    />
                );
            }

            datedList.push(<NewsListItem
                key={newsItem.id}
                newsItem={newsItem}
            />);

        });

        return (
            <div className="dated-news-list">
                {datedList}
            </div>
        )
    }
}