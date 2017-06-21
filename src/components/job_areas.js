import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class JobAreas extends Component {


    render() {
        const hexagonin2 = {
            backgroundImage: 'url(../images/gallery/1.jpg)',
        };
        return (
            <section className="jobarea">
                <div className="angled_up_inside white">
                    <div className="slope upleft"></div>
                    <div className="slope upright"></div>
                    <div className="jobarea-header container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h2>Thousands of Pre-Screened Workers Ready to Accept a Job in Minutes</h2>
                                <p>With an average rating of 4.9 out of 5, our community of talented Wonoloers is ready to get your job done right.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container job-area-wrapper">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="list-quotes" >
                                <img className='img-responsive' alt="img" src="https://www.wonolo.com/hubfs/2016-02_Wonolo_Redesign/Job_Categories/job-cat-warehouse.jpg?t=1497567519880"></img>
                                <div className="quotes">
                                    <h1>Warehouse Operations</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>...Read More</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="list-quotes" >
                                <img className='img-responsive' alt="img" src="https://www.wonolo.com/hubfs/2016-02_Wonolo_Redesign/Job_Categories/job-cat-delivery.jpg?t=1497567519880"></img>
                                <div className="quotes">
                                    <h1>Delivery Drivers</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>...Read More</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="list-quotes" >
                                <img className='img-responsive' alt="img" src="https://www.wonolo.com/hubfs/2016-02_Wonolo_Redesign/Job_Categories/job-cat-general-2.jpg?t=1497567519880"></img>
                                <div className="quotes">
                                    <h1>General Labor</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>...Read More</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="list-quotes" >
                                <img className='img-responsive' alt="img" src="https://www.wonolo.com/hubfs/2016-02_Wonolo_Redesign/Job_Categories/job-cat-administrative.jpg?t=1497567519880"></img>
                                <div className="quotes">
                                    <h1>Administrative Tasks</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>...Read More</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="list-quotes" >
                                <img className='img-responsive' alt="img" src="https://www.wonolo.com/hubfs/2016-02_Wonolo_Redesign/Job_Categories/job-cat-event.jpg?t=1497567519880"></img>
                                <div className="quotes">
                                    <h1>Event Staff</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>...Read More</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="list-quotes" >
                                <img className='img-responsive' alt="img" src="https://www.wonolo.com/hubfs/2016-02_Wonolo_Redesign/Job_Categories/job-cat-ambassador-2.jpg?t=1497567519880"></img>
                                <div className="quotes">
                                    <h1>Merchandising</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>...Read More</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="angled_down_outside outside primary lightgray">
                    <div className="slope downleft"></div>
                    <div className="slope downright"></div>
                </div>
            </section>
        );
    }
}

