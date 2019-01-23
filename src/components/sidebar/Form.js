import React, {Component} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Form extends Component {
  render() {
    const { checked, onChange, label } = this.props;

    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={onChange}
              color="primary"
            />
          }
          label={label}
        />
      </FormGroup>
    );
  }
}

export default Form;