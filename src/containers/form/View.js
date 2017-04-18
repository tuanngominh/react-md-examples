import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import { browserHistory } from 'react-router';

const View = ({ formData }) => (
  <pre>
    {JSON.stringify(formData)}
    <Button
      raised
      primary
      label="Add Form"
      className="md-cell md-cell--6"
      onClick={() => browserHistory.push('/form/add')}
    />
  </pre>
);

const mapStateToProps = state => ({
  formData: state.form.data
})
export default connect(mapStateToProps)(View);