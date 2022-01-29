import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Input, TextFieldProps } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import PropTypes from 'prop-types';

interface IPatientInput {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  age: string;
}

const App = () => {
  const { handleSubmit, register } = useForm<IPatientInput>();
  const [dateValue, setDateValue] = React.useState<MaterialUiPickersDate>(new Date());
  
  const onSubmit: SubmitHandler<IPatientInput> = data => {
    console.log(data);
  };

/*   const renderInput = (props: TextFieldProps) => { return (
    <Input
    {...props}
      type="text"
      onClick={props.onClick}
      value={props.value}
      onChange={props.onChange}
  />
  )
  };

  renderInput.propTypes = {
    onClick: PropTypes.func.isRequired,
    dateValue:
  }; */

  return (
    <Box>
      <Grid container spacing={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={4}>
              <TextField
                label="First Name"
                type="text"
                defaultValue="First Name"
                {...register("firstName")}
              />
          </Grid>
          <Grid item xs={4}>
              <TextField
                label="Last Name"
                type="text"
                defaultValue="Last Name"
                {...register("lastName")}
              />
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={2}>
              <TextField
                label="Age"
                defaultValue="35"
             {...register("age")}
                /> 
          </Grid>

      <Button
        variant="contained"
        type="submit"
        color="primary"
      >
        Submit
      </Button>
    </form>
    </Grid >
    </Box >

  );
};

export default App;