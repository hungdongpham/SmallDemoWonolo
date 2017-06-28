import React, { Component } from 'react';
import Choices from './choices';
import PromotionApps from './promotion_apps';
import JobAreas from './job_areas';
import CustomerReview from './customer_review';
import { getWonoloToken } from '../actions/index';


export default class Main extends Component {
  componentWillMount() {
      getWonoloToken();
  }

  render() {
    return (
      <div>
        <Choices />
        <PromotionApps />
        <JobAreas />
        <CustomerReview />
      </div>
    );
  }
}