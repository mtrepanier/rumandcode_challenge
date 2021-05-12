import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchSuperHeros from '../../store/super_hero/actions/fetch_super_heros';
import SmartTable from './smart_table';

class SuperHerosContainer extends Component {
  constructor(props) {
    super(props);
    this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.state = {
      sort: null,
      sort_dir: null
    }
  }

  componentDidMount() {
    this.props.fetchSuperHeros();
  }

  handlePageNumberClick(page) {
    const args = { page: page };
    const { sort, sort_dir } = this.state;
    if(sort && sort_dir) {
      args["sort"] = sort
      args["sort_dir"] = sort_dir
    }

    const formValues = this.props.filterForm;
    if(formValues.values && formValues.values.hero_name) {
      args["hero_name"] = formValues.values.hero_name
    }
    if(formValues.values && formValues.values.active) {
      args["active"] = formValues.values.active
    }
    this.props.fetchSuperHeros(args);
  }

  handleSorting(sort, sort_dir) {
    this.setState({ sort })
    this.setState({ sort_dir })
    const args = {};
    if(sort && sort_dir) {
      args["sort"] = sort
      args["sort_dir"] = sort_dir
    }

    const formValues = this.props.filterForm;
    if(formValues.values && formValues.values.hero_name) {
      args["hero_name"] = formValues.values.hero_name
    }
    if(formValues.values && formValues.values.active) {
      args["active"] = formValues.values.active
    }
    this.props.fetchSuperHeros(args);
  }

  render() {
    const {
      isFetching,
      isError,
      errorMessage,
      superHeros,
      superHeroMeta
    } = this.props;
    const isEmpty = superHeros.length === 0;

    if (isEmpty && isFetching) {
      return <span>Loading</span>;
    }
    if (isError) {
      return <span>{errorMessage}</span>;
    }
    if (isEmpty) {
      return <div className ="default-div"><h5>No super hero found with the current applied filters.</h5><h6>Try applying different filters.</h6></div>;
    }
    return (
      <SmartTable
        superHeros={superHeros}
        superHeroMeta={superHeroMeta}
        handlePageNumberClick={this.handlePageNumberClick}
        handleSorting={this.handleSorting}
    />
  );
  }
}
function mapStateToProps(state) {
  return {
    superHeros: state.super_hero.all,
    superHeroMeta: state.super_hero.meta,
    isFetching: state.super_hero.isFetching,
    isError: state.super_hero.isError,
    errorMessage: state.super_hero.errorMessage
  };
}
export default connect(mapStateToProps, { fetchSuperHeros })(SuperHerosContainer);