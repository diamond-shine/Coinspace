import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import LocalBarFeatures from '../local_bar/local_bar'
import SmallGraphContainer from '../graphing/small_graph_container'
import RecentActivityContainer from '../recent_activity/recent_activity_container';
import PortfolioSummaryContainer from '../portfolio_sum/portfolio_sum_container'

class Dashboard extends React.Component {

  render(){
    return (
      <div>
        <LocalBarFeatures location="dashboard"/>
        <div className='dash-wrapper'>
          <div className="dash-top">
            <SmallGraphContainer asset="Bitcoin"/>
            <SmallGraphContainer asset="Bitcoin Cash"/>
            <SmallGraphContainer asset="Ethereum"/>
            <SmallGraphContainer asset="Litecoin"/>
          </div>
          <div className="dash-bottom">
            <PortfolioSummaryContainer />
            <RecentActivityContainer />
          </div>
        </div>
    </div>
    );
  }
}

export default withRouter(Dashboard);
