import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
   
  
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
   
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        //label="Primary"
      />
     
     
     
     
    </FormGroup>
  );
}
