import React, { Component } from 'react';
import NavigationDrawers from 'react-md/lib/NavigationDrawers';
import {ListItem} from 'react-md';
import { Link } from 'react-router';

const navItems = [
  <ListItem
    key="grid1"
    primaryText="Form Buttons"
    component={Link}
    to="/grid/form-buttons"
  />,
  <ListItem
    key="counter"
    primaryText="Counter"
    component={Link}
    to="/counter"
  />,
  <ListItem
    key="github"
    primaryText="Github"
    component={Link}
    to="/github/repos/search"
  />,
  <ListItem
    key="formValidation"
    primaryText="Form Validation"
    component={Link}
    to="/form/add"
  />,
];

class AppLayout extends Component {
  render() {
    return (
      <NavigationDrawers
        contentClassName="md-grid"
        toolbarTitle="redux-saga, react-md, react-redux-form"
        navItems={navItems}
      >
        {this.props.children}
      </NavigationDrawers>
    )
  }
}

export default AppLayout;