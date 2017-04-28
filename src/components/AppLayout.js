import React, { Component } from 'react';
import NavigationDrawers from 'react-md/lib/NavigationDrawers';
import {ListItem} from 'react-md';
import { Link } from 'react-router';

const navItems = [
  <ListItem
    key="forms1"
    primaryText="Form1"
    component={Link}
    to="/forms/form1"
  />,
  <ListItem
    key="forms2"
    primaryText="Form2"
    component={Link}
    to="/forms/form2"
  />,
  <ListItem
    key="formValidation"
    primaryText="Form Validation"
    component={Link}
    to="/forms/form3"
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