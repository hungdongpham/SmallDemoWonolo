import React, { Component } from 'react';
import Choices from './choices';
import PromotionApps from './promotion_apps';
import JobAreas from './job_areas';
import CustomerReview from './customer_review';

export default class Main extends Component {
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