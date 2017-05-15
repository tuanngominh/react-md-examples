import React, {Component} from 'react';
import cloneDeep from 'lodash/cloneDeep';

export const getMenuItems = (field) => {
  let data = [];
  let i = 0;
  while (i < 10) {
    data.push(`Value ${i}`);
    i++;
  }
  return data;
}

export const withFormState = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        form: {},
      };
    }

    handleFormChange = (field, value) => {
      this.setState((prevState) => {
        const clonedState = cloneDeep(prevState.form);
        clonedState[field] = value;
        return {
          form: clonedState
        }
      });
    }

    getFormField = (field, defaultValue) => {
      if (field in this.state.form) {
        return this.state.form[field]
      } else if (defaultValue !== undefined) {
          return defaultValue
      }
      return null;
    }

    render() {
      return <WrappedComponent
        handleFormChange={this.handleFormChange}
        getFormField={this.getFormField}
        {...this.props}
      />;
    }
  }
}