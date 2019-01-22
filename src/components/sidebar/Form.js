import React, {Component} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Form extends Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {

    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
      </FormGroup>
    );
  }
}

export default Form;