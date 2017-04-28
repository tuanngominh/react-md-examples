import React, {Component} from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import Checkbox from 'react-md/lib/SelectionControls/Checkbox';
import SelectField from 'react-md/lib/SelectFields';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Autocomplete from 'react-md/lib/Autocompletes';

const getMenuItems = (field) => {
  let data = [];
  let i = 0;
  while (i < 10) {
    data.push(`Value ${i}`);
    i++;
  }
  return data;
}

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      field1: '',
      field2: true,
      field3: '',
      field41: '',
      field42: '',
      field43: '',
      start: null,
      end: null,
      field5: '',
    }
  }

  handleChange(field, value) {
    this.setState(() => ({
      [field]: value
    }))
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="md-cell md-cell--12">
        <Card className="md-grid">
          <CardTitle
            title="Form 2 Title"
          />
          <div className="md-cell md-cell--12">
            <div className="md-grid">
              <TextField
                id="field1"
                label="Field 1"
                placeholder="Enter field 1"
                className="md-cell md-cell--6 md-cell--bottom"
                required
                value={this.state.field1}
                onChange={value => this.handleChange('field1', value)}
              />
              <Checkbox
                id="field2"
                name="field2"
                defaultChecked
                labelBefore
                label="Check field 2"
                className="md-cell md-cell--6 md-cell--bottom"
                checked={this.state.field2}
                onChange={value => this.handleChange('field2', value)}
              />
            </div>
          </div>
          <div className="md-cell md-cell--12">
            <div className="md-grid">
              <SelectField
                id="field3"
                label="Field 3"
                placeholder="Select field 3"
                menuItems={getMenuItems()}
                className="md-cell md-cell--6 md-cell--bottom"
                required
                value={this.state.field3}
                onChange={value => this.handleChange('field3', value)}
              />
            </div>
          </div>
          <div className="md-cell md-cell--12">
            <div className="md-grid">
              <SelectField
                id="field4.1"
                label="Field 4.1"
                placeholder="Select field 4.1"
                menuItems={getMenuItems()}
                className="md-cell md-cell--4 md-cell--bottom"
                required
                value={this.state.field41}
                onChange={value => this.handleChange('field41', value)}
              />
              <SelectField
                id="field4.1"
                label="Field 4.2"
                placeholder="Select field 4.2"
                menuItems={getMenuItems()}
                className="md-cell md-cell--4 md-cell--bottom"
                required
                value={this.state.field42}
                onChange={value => this.handleChange('field42', value)}
              />
              <SelectField
                id="field4.3"
                label="Field 4.3"
                placeholder="Select field 4.3"
                menuItems={getMenuItems()}
                className="md-cell md-cell--4 md-cell--bottom"
                required
                value={this.state.field43}
                onChange={value => this.handleChange('field43', value)}
              />
            </div>
          </div>
          <div className="md-cell md-cell--12">
            <div className="md-grid">
              <DatePicker
                id="start"
                label="Start Date"
                className="md-cell md-cell--6 md-cell--bottom"
                inline
                autoOk
                required
                value={this.state.start}
                onChange={value => this.handleChange('start', value)}
              />
              <DatePicker
                id="end"
                label="End Date"
                className="md-cell md-cell--6 md-cell--bottom"
                inline
                autoOk
                required
                value={this.state.end}
                onChange={value => this.handleChange('end', value)}
              />
            </div>
          </div>
          <div className="md-cell md-cell--12">
            <div className="md-grid">
              <Autocomplete
                id="field5"
                label="Field 5"
                className="md-cell md-cell--6 md-cell--bottom"
                data={getMenuItems()}
                required
                value={this.state.field5}
                onChange={value => this.handleChange('field5', value)}
              />
            </div>
          </div>
          <CardActions>
            <Button raised label="Cancel" />
            <Button raised primary label="Submit" onClick={this.handleSubmit} />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Form;