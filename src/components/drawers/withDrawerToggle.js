import React, {Component} from 'react';

const withDrawerToggle = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        drawersVisible: {},
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

    getDrawerVisible = (drawerName) => {
      return drawerName in this.state.drawersVisible ? this.state.drawersVisible[drawerName] : false;
    }

    render() {
      return <WrappedComponent
        getDrawerVisible={this.getDrawerVisible}
        handleToggleDrawer={this.handleToggleDrawer}
        handleCloseDrawer={this.handleCloseDrawer}
        {...this.props}
      />;
    }
  }
}

export default withDrawerToggle;