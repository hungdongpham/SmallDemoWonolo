import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJobRequests } from '../actions/index';
import Stepper from './stepper';
import { Link } from 'react-router';
import Moment from 'moment';

class JobRequestsIndex extends Component {
    componentWillMount() {
        this.props.fetchJobRequests();
    }

    renderLinks(id) {
        if (this.props.authenticated) {
            return <a href={`/jobrequest/${id}`} className="btn btn-info">Detail <span className="glyphicon glyphicon-circle-arrow-right icon-custom-2"></span></a>
        } else {
            return <a href="/signin" className="btn btn-info">Sign in to view <span className="glyphicon glyphicon-circle-arrow-right icon-custom-2"></span></a>
        }
    }

    renderJobRequests(){
        return this.props.jobrequests.map((jobreq) => {
            return(
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="my-list">

                        <span className="glyphicon glyphicon-briefcase icon-custom-1"></span><h3>{jobreq.category}</h3>
                        <span>{jobreq.request_name}</span>
                        <span className="pull-right">{Moment(jobreq.updated_at).format('d MMM')}</span>
                        <div className="offer">{jobreq.description}</div>
                        <div className="detail">
                            <p>See this job that fits? Accept it and it's yours!</p>
                           {this.renderLinks(jobreq.id)}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <section className="job-requests-index">
                <Stepper selectedItem='2'/>
                <div className="container">
                    <div className="row">
                        {this.renderJobRequests()}
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

function mapStateToProps(state) {
    return { jobrequests: state.jobrequests.all, authenticated : state.auth.authenticated  };
}


export default connect(mapStateToProps, { fetchJobRequests })(JobRequestsIndex);