import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class Choices extends Component {

    render() {
        return (
            <div className="banner-choices">
                <div className="row text-center">

                    <div className="col-md-push-2 col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail choice-area choice-area-wonoloer">
                            <div className="caption">
                                <h3>I am a <b>Job Seeker</b></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>
                                    <a href="/yourskills" className="btn btn-default">Find a job</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-push-2 col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail choice-area choice-area-requester" >
                            <div className="caption">
                                <h3>I am a <b>Business</b></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>
                                    <a href="https://www.wonolo.com/business-signup?hsCtaTracking=a902800c-f278-4c54-8b86-d97b7b6733fe%7C4c5b166f-fa96-4a1b-9c29-c5b2b6c936f4" className="btn btn-default">Post a job</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="triangle"></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Choices);