import React, {Component} from 'react';
import Drawer from 'react-md/lib/Drawers';
import Toolbar from 'react-md/lib/Toolbars';
import Card from 'react-md/lib/Cards/Card';
import Button from 'react-md/lib/Buttons/Button';
import SelectField from 'react-md/lib/SelectFields';
import { getMenuItems } from '../utils';

class WithRightDrawer1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawersVisible: {
        drawer1: false,
        drawer2: false,
      },
    };

  }

  handleToggleDrawer = (drawerName) => {
    this.setState((preState) => {
      preState.drawersVisible[drawerName] = !preState.drawersVisible[drawerName];
      return {
        drawersVisible: preState.drawersVisible,
      };
    });
  }

  handleCloseDrawer = (drawerName) => {
    this.setState((preState) => {
      preState.drawersVisible[drawerName] = false;
      return {
        drawersVisible: preState.drawersVisible,
      };
    });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <Card className="md-cell--12">
        <form onSubmit={this.handleSubmitForm} className="md-grid">
          <div className="md-cell md-cell--12">
            <div className="md-cell md-cell--12">
              <Button
                raised
                label="Open drawer to select option"
                primary
                onClick={() => this.handleToggleDrawer('drawer1')}
              />
            </div>
            <div className="md-cell md-cell--12">
              <Button
                raised
                label="Open drawer to select option"
                primary
                onClick={() => this.handleToggleDrawer('drawer2')}
              />
            </div>
            <Drawer
              visible={this.state.drawersVisible.drawer1}
              onVisibilityToggle={() => this.handleToggleDrawer('drawer1')}
              type={Drawer.DrawerTypes.TEMPORARY}
              position='right'
              header={
                <Toolbar
                  nav={<Button icon onClick={() => this.handleCloseDrawer('drawer1')}>close</Button>}
                  className="md-divider-border md-divider-border--bottom"
                />
              }
              style={{ zIndex: 100 }}
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
            </Drawer>
            <Drawer
              visible={this.state.drawersVisible.drawer2}
              onVisibilityToggle={() => this.handleToggleDrawer('drawer2')}
              type={Drawer.DrawerTypes.TEMPORARY}
              position='right'
              header={
                <Toolbar
                  nav={<Button icon onClick={() => this.handleCloseDrawer('drawer2')}>close</Button>}
                  className="md-divider-border md-divider-border--bottom"
                />
              }
              style={{ zIndex: 100 }}
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
            </Drawer>
          </div>
        </form>
      </Card>
    )
  }
}

export default WithRightDrawer1;