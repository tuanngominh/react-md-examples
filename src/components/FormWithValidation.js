import React, { PureComponent } from 'react';
import SelectField from 'react-md/lib/SelectFields';
import Button from 'react-md/lib/Buttons/Button';


/*
Get form value through controlled components technique
*/
class FormWithValidation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      state: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }
  handleStateChange = (value) => {
    this.setState({
      state: value
    })
  }
  render() {
    const { stateItems } = this.props;
    return (
      <form className="md-cell md-cell--6" onSubmit={this.handleSubmit}>
        <SelectField
          id="states"
          label="State"
          placeholder="Select a State"
          menuItems={stateItems}
          itemLabel="name"
          itemValue="abbreviation"
          className="md-cell md-cell--12"
          helpOnFocus
          helpText="Select some state for me"
          required
          value={this.state.state}
          onChange={this.handleStateChange}
        />
        <Button raised primary label="Submit" className="md-cell md-cell--12" type="submit" />
      </form>
    )
  }
}

export default FormWithValidation;