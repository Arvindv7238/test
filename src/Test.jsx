
import React from "react";
import Select from "react-dropdown-select";
export default class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'null',
        }
    }

    render() {
        return (
            <div>
             
                <button onClick={() =>
                    this.setState({
                        value:'X',
                    })
                }>
                    button clicked hear
                </button>
                <div>
                    {this.state.value}
             </div>
            </div>
        )
    }
}