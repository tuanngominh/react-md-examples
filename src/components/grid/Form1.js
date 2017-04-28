import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import Checkbox from 'react-md/lib/SelectionControls/Checkbox';
import SelectField from 'react-md/lib/SelectFields';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Autocomplete from 'react-md/lib/Autocompletes';
// import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';

const getMenuItems = (field) => {
  let data = [];
  let i = 0;
  while (i < 10) {
    data.push(`Value ${i}`);
    i++;
  }
  return data;
}

const FormButtons = () => (
  <div className="md-cell md-cell--12">
    <Card className="md-grid">
      <CardTitle
        title="Form Title"
      />
      <form>
        <div className="md-cell md-cell--12">
          <div className="md-grid">
            <TextField
              id="field1"
              label="Field 1"
              placeholder="Enter field 1"
              className="md-cell md-cell--6 md-cell--bottom"
              required
            />
            <Checkbox
              id="field2"
              name="field2"
              defaultChecked
              labelBefore
              label="Check field 2"
              className="md-cell md-cell--6 md-cell--bottom"
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
            />
            <SelectField
              id="field4.1"
              label="Field 4.2"
              placeholder="Select field 4.2"
              menuItems={getMenuItems()}
              className="md-cell md-cell--4 md-cell--bottom"
              required
            />
            <SelectField
              id="field4.3"
              label="Field 4.3"
              placeholder="Select field 4.3"
              menuItems={getMenuItems()}
              className="md-cell md-cell--4 md-cell--bottom"
              required
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
            />
            <DatePicker
              id="end"
              label="End Date"
              className="md-cell md-cell--6 md-cell--bottom"
              inline
              autoOk
              required
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
            />
          </div>
        </div>
      </form>
      <CardActions>
        <Button raised label="Cancel" />
        <Button raised primary label="Submit" />
      </CardActions>
    </Card>
  </div>
)

export default FormButtons;