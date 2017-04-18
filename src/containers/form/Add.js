import React, { PureComponent } from 'react';
import FormWithValidation from '../../components/FormWithValidation';
import { saveForm } from '../../ducks/form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

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

class Add extends PureComponent {
  handleSubmit = (data) => {
    this.props.onSubmit(data);
    browserHistory.push('/form/view');
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
  onSubmit: bindActionCreators(saveForm, dispatch)
});
export default connect(null, mapDispatchToProps)(Add);