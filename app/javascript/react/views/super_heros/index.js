import React from 'react';

import SuperHerosContainer from './super_heros_container';
import FilterTable from './filter_table_container';

const SuperHeros = props => {
  return (
    <div>
      <h4>Listing super heroes</h4>
      <FilterTable />
      <SuperHerosContainer />
    </div>
  );
}
export default SuperHeros;