import React, { PureComponent } from 'react';
import FormWithValidation from '../../components/FormWithValidation';
import { saveForm3 } from '../../ducks/form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';

const stateItems = [{
  name: '',
  abbreviation: '',
},{
  name: 'Alabama',
  abbreviation: 'AL',
}, {
  name: 'Alaska',
  abbreviation: 'AK',
}, {
  name: 'American Samoa',
  abbreviation: 'AS',
}];

class Form extends PureComponent {
  handleSubmit = (data) => {
    this.props.onSubmit(data)
    hashHistory.push('/forms/result');
  }

  render() {
    return (
      <FormWithValidation
        onSubmit={this.handleSubmit}
        stateItems={stateItems}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: bindActionCreators(saveForm3, dispatch)
});
export default connect(null, mapDispatchToProps)(Form);