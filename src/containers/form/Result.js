import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

class Result extends Component {
  render() {
    const props = this.props;
    let formData = {};
    if ('form2' in props && props.form2) {
      formData = props.form2;
    } else if ('form3' in props && props.form3) {
      formData = props.form3;
    }
    return (
      <Card className="md-cell md-cell--6">
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Field</TableColumn>
              <TableColumn>Value</TableColumn>
            </TableRow>
          </TableHeader>
          {Object.keys(formData).length > 0 &&
          <TableBody>
            {Object.keys(formData).map( key =>
            <TableRow key={key}>
              <TableColumn>{key}</TableColumn>
              <TableColumn>{JSON.stringify(formData[key])}</TableColumn>
            </TableRow>
            )}
          </TableBody>
          }
        </DataTable>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  form2: state.form.form2,
  form3: state.form.form3,
})
export default connect(mapStateToProps)(Result);