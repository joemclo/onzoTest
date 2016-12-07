import * as React from "react";

import newsStore from "../stores/NewsStore";
import {DatedNewsList} from "./DatedNewsList";
import {SearchInput} from "./SearchInput";

const findStringInNewsItem = (newsItem, searchString) => {
    const titleFromatted = newsItem.title.toLowerCase();
    const messageFormatted = newsItem.message.toLowerCase();
    const searchStringFormatted = searchString.trim().toLowerCase();

    return titleFromatted.indexOf(searchStringFormatted) > -1 ||
           messageFormatted.indexOf(searchStringFormatted) > -1;
}

export class News extends React.Component<{},any>{

    constructor(context, props) {
        super(context, props);
        this.state = {
            filterText: "",
            news: undefined,
        };

        this.onFilterTextChange = this.onFilterTextChange.bind(this);
        this.loadNews();
    }

    // on load of component pull in data either through stores with flux or other. 
    // at present call the store directly
    loadNews() {
        newsStore.getNews()
        .then(() => {
            this.setState({
                news: newsStore.getState().news,
            })
        })
    }

    onFilterTextChange(filterText){
        this.setState({
            filterText,
        });
    }

    render() {

        const filterText = this.state.filterText;
        let news = this.state.news;

        if(news){
            // filter on search text
            if(filterText) {
                news = news.filter((newsItem) => {
                    return findStringInNewsItem(newsItem, filterText);
                })
            }
        }

        return( 
            <div>
                <div className="header">
                    <h1 className="header-title">
                        News
                    </h1>
                </div>
                <div className="filter">
                    <SearchInput
                        placeholder="filter news items"
                        onChange={this.onFilterTextChange}
                    />
                </div>
                <div className="feed">
                    {news && <DatedNewsList
                        news={news}
                    />}
                    {!news && <div className="loading">
                        Loading...
                    </div>}
                </div>
            </div>
        );
    }
};
