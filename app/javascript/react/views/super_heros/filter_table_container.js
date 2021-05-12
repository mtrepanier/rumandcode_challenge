import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';


// Relative imports
import fetchSuperHeros from '../../store/super_hero/actions/fetch_super_heros';
import FilterForm from './filter_form';

const FilterTableContainer = props => {

  const { handleSubmit } = props;

  const submitForm = ({ hero_name, active }) => {
    props.fetchSuperHeros({ hero_name, active });
  }

  return (
    <FilterForm
      submitForm={submitForm}
      handleSubmit={handleSubmit}
    />
  );
}

const FilterTableReduxForm = reduxForm({
  form: 'SuperHeroFilterForm',
  onChange: (values, dispatch, props, previousValues) => {
    props.submit();
  }
})(FilterTableContainer);

const FilterTableConnectReduxForm = connect(
  null,
  { fetchSuperHeros }
)(FilterTableReduxForm);

export default FilterTableConnectReduxForm;