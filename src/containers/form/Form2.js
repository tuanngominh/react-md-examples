import React, {Component} from 'react';
import Form2 from '../../components/forms/Form2';
import {connect} from 'react-redux';
import {saveForm2} from '../../ducks/form';
import { bindActionCreators } from 'redux';

class Form2Container extends Component {
  render() {
    return (
      <Form2
        onSubmit={this.props.onSubmit}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: bindActionCreators(saveForm2, dispatch)
});

export default connect(null, mapDispatchToProps)(Form2Container);