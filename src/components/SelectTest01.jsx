import React from "react";
import Select from "react-dropdown-select";

class SelectTest01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      };
      this.selectValue = this.selectValue.bind(this);
  }
    selectValue(data) {
        this.setState({
          data:data.target.value,
      })
  }
  render() {
    return (
      <div>
        <select onChange={this.selectValue} id="dropdown">
          <option>Hello</option>
          <option>hi</option>
          <option>hau</option>
            </select>
            
            <div>
                Selected data are {this.state.data}
            </div>
      </div>
    );
  }
}



export default SelectTest01;