import React, {Component} from 'react';
import Card from 'react-md/lib/Cards/Card';
import Button from 'react-md/lib/Buttons/Button';
import SelectField from 'react-md/lib/SelectFields';
import { compose } from 'recompose';
import withDrawerToggle from './withDrawerToggle';
import RightDrawer from './RightDrawer';
import { getMenuItems, withFormState } from '../utils';

class WithRightDrawer1 extends Component {

  handleSubmitForm = (e) => {
    e.preventDefault();
  }

  render() {
    const {handleToggleDrawer, handleCloseDrawer, getDrawerVisible} = this.props;
    const {handleFormChange, getFormField} = this.props;
    return (
      <Card className="md-cell--12">
        <form onSubmit={this.handleSubmitForm} className="md-grid">
            <div className="md-cell md-cell--12">
              Many form elements like TextField, SelectField, AutoComplete here.<br/>
              So we want to move some form elements to Right Drawer
            </div>
            <div className="md-cell md-cell--6">
              {getFormField('field1') ? getFormField('field1') : "No value is selected"}
            </div>
            <div className="md-cell md-cell--6">
              <Button
                raised
                label="Open drawer1 to select option"
                primary
                onClick={() => handleToggleDrawer('drawer1')}
              />
            </div>
            <div className="md-cell md-cell--6">
              {getFormField('field2') ? getFormField('field2') : "No value is selected"}
            </div>
            <div className="md-cell md-cell--6">
              <Button
                raised
                label="Open drawer2 to select option"
                primary
                onClick={() => handleToggleDrawer('drawer2')}
              />
            </div>
            <RightDrawer
              handleToggleDrawer={handleToggleDrawer}
              handleCloseDrawer={handleCloseDrawer}
              getDrawerVisible={getDrawerVisible}
              drawerName="drawer1"
            >
              <SelectField
                value={getFormField('field1', '')}
                onChange={(value) => handleFormChange('field1', value)}
                style={{width: 300}}
                id="field1"
                label="Field 1"
                placeholder="Select field 1"
                menuItems={getMenuItems()}
                className="md-cell md-cell--12"
                required
              />
              <div className="md-cell md-cell--12">
                There may be more complex form elements locate here
              </div>
            </RightDrawer>
            <RightDrawer
              handleToggleDrawer={handleToggleDrawer}
              handleCloseDrawer={handleCloseDrawer}
              getDrawerVisible={getDrawerVisible}
              drawerName="drawer2"
            >
              <SelectField
                value={getFormField('field2', '')}
                onChange={(value) => handleFormChange('field2', value)}
                style={{width: 300}}
                id="field2"
                label="Field 2"
                placeholder="Select field 2"
                menuItems={getMenuItems()}
                className="md-cell md-cell--12 md-cell--bottom"
                required
              />
              <div className="md-cell md-cell--12">
                There may be more complex form elements locate here
              </div>
            </RightDrawer>
        </form>
      </Card>
    )
  }
}

export default compose(withDrawerToggle, withFormState)(WithRightDrawer1);
