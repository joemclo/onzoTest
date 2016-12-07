import * as React from "react";

export class NewsListHeader extends React.Component<any,any>{
    render() {
        return(
            <div style={
                {
                    background: "aliceblue",
                    padding: "10px",
                    textAlign: "center",
                    marginTop: "20px",
                }
            }>
                {this.props.header}
            </div>
        )
    }
}