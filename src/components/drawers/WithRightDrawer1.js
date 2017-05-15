import React, {Component} from 'react';
import Card from 'react-md/lib/Cards/Card';
import Button from 'react-md/lib/Buttons/Button';
import SelectField from 'react-md/lib/SelectFields';
import withDrawerToggle from './withDrawerToggle';
import RightDrawer from './RightDrawer';
import { getMenuItems } from '../utils';

class WithRightDrawer1 extends Component {

  handleSubmitForm = (e) => {
    e.preventDefault();
  }

  render() {
    const {handleToggleDrawer, handleCloseDrawer, getDrawerVisible} = this.props;
    return (
      <Card className="md-cell--12">
        <form onSubmit={this.handleSubmitForm} className="md-grid">
          <div className="md-cell md-cell--12">
            <div className="md-cell md-cell--12">
              <Button
                raised
                label="Open drawer1 to select option"
                primary
                onClick={() => handleToggleDrawer('drawer1')}
              />
            </div>
            <div className="md-cell md-cell--12">
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
                style={{width: 300}}
                id="field1"
                label="Field 1"
                placeholder="Select field 1"
                menuItems={getMenuItems()}
                className="md-cell md-cell--12"
                required
              />
            </RightDrawer>
            <RightDrawer
              handleToggleDrawer={handleToggleDrawer}
              handleCloseDrawer={handleCloseDrawer}
              getDrawerVisible={getDrawerVisible}
              drawerName="drawer2"
            >
              <SelectField
                style={{width: 300}}
                id="field2"
                label="Field 2"
                placeholder="Select field 2"
                menuItems={getMenuItems()}
                className="md-cell md-cell--12 md-cell--bottom"
                required
              />
            </RightDrawer>
          </div>
        </form>
      </Card>
    )
  }
}

export default withDrawerToggle(WithRightDrawer1);