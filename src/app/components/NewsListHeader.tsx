import * as React from "react";

export class NewsListHeader extends React.Component<any,any>{
    render() {
        return(
            <div className="news-list-header">
                {this.props.header}
            </div>
        )
    }
}