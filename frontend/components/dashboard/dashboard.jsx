import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import LocalBarFeatures from '../local_bar/local_bar'

class Dashboard extends React.Component {

  render(){
    return (
      <div>
        <LocalBarFeatures location="dashboard"/>
        <h3>`Hello from dashboard!`</h3>
      </div>
    );
  }
}

export default withRouter(Dashboard);
