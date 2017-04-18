import React from 'react';
import { connect } from 'react-redux';

const View = ({ formData }) => (
  <pre>
    {JSON.stringify(formData)}
  </pre>
);

const mapStateToProps = state => ({
  formData: state.form.data
})
export default connect(mapStateToProps)(View);