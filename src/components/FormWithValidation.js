import React, { PureComponent } from 'react';
import SelectField from 'react-md/lib/SelectFields';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';


/*
Get form value through controlled components technique
*/
class FormWithValidation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      state: '',
      address: '',
      stateError: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { state } = this.state;
    if (state) {
      const {stateError, stateErrorMessage, ...formData} = this.state;
      this.props.onSubmit(formData);
    } else {
      if (!state) {
        this.setState({
          stateError: true,
          stateErrorMessage: 'State is required'
        })
      }
    }
  }

  handleStateChange = (value) => {
    this.setState({
      state: value
    })
  }

  handleAddressChange = (value) => {
    this.setState({
      address: value
    })
  }

  render() {
    const { stateItems } = this.props;
    return (
      <form className="md-cell md-cell--6" onSubmit={this.handleSubmit}>
        <div className='md-grid'>
          <h1 className="md-cell md-cell--12">controlled form element with react-md</h1>
          <ul>
            <li>Get form element value through controlled element</li>
            <li>Manual set react-md form element error state and error message</li>
          </ul>
          <SelectField
            id="states"
            label="State"
            placeholder="Select a State"
            menuItems={stateItems}
            itemLabel="name"
            itemValue="abbreviation"
            className="md-cell md-cell--12"
            required
            error={this.state.stateError}
            errorText={this.state.stateErrorMessage}
            value={this.state.state}
            onChange={this.handleStateChange}
          />
          <TextField
            id="address"
            label="Address"
            lineDirection="center"
            placeholder="Your address"
            className="md-cell md-cell--12 md-cell--bottom"
            value={this.state.address}
            onChange={this.handleAddressChange}
          />
          <Button raised primary label="Submit" className="md-cell md-cell--12" type="submit" />
        </div>
      </form>
    )
  }
}

export default FormWithValidation;