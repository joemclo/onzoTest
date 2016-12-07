import * as React from "react";

interface SearchInputProps{
    onChange: (newValue: string) => void;
    placeholder: string

}

export class SearchInput extends React.Component<SearchInputProps,any>{

    constructor(props, context){
        super(props, context);

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(changeEvent) {
        const newText = changeEvent.target.value;
        this.props.onChange(newText);
    }

    render() {
        return (
            <div>
                <input onChange={this.onInputChange} type="text" placeholder={this.props.placeholder} />
            </div>
        )
    }
}