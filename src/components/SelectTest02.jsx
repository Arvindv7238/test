import React from "react";
import Select from "react-select";

import TextField from "@material-ui/core/TextField";
const options = [
  { value: "0", label:"---select---" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class SelectTest02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  changeAppointment = (field, changes) => {
    console.log(changes);

  };
  render() {
    const { selectedOption } = this.state;
    console.log(`Option selected:`, this.state.selectedOption);

    // title props field
    const titleEditorProps = (field) => ({
      variant: "outlined",
      onChange: ({ target: change }) =>
        this.changeAppointment({
          field: [field],
          changes: change.value,
        }),
      value:  options,
      label: "field[0].toUpperCase() + field.slice(1)",
    });
    return (
      
            <div>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />

       <div >
              <TextField
              className="p-0"
              {...titleEditorProps('title')} 
              />
            </div>
            </div>
    );
  }
}

export default SelectTest02;