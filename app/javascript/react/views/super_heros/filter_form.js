import React from 'react';
import { Form, Field } from 'redux-form';
import Grid from '@material-ui/core/Grid';

const FilterForm = props => {

  const { handleSubmit, submitForm } = props;

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Grid container spacing={4}>
        <Grid item>
          <Field
            name="hero_name"
            component="input"
            type="text"
            placeholder="Search by hero name"
          />
        </Grid>
        <Grid item>
          <div style={{ display: 'flex' }}>
            <Field
              name="active"
              id="active"
              component="input"
              type="checkbox"
            />
            <label htmlFor="employed">Active only</label>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};
export default FilterForm;