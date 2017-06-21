import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchJobRequest } from '../actions/index';
import { Link } from 'react-router';
import Moment from 'moment';
import Stepper from './stepper';

class JobRequestDetail extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        this.props.fetchJobRequest(this.props.params.id);
    }

    render() {
        const { jobrequest } = this.props;

        if (!jobrequest) {
            return <div>Loading...</div>
        }
        return (
            <section className="jobrequest-detail-area">
                <Stepper selectedItem='3' />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <span className="glyphicon glyphicon-arrow-left icon-custom-2"></span> <Link className="back-previous" to="/jobrequests">Back To Job Requests Landing</Link>
                            <br/>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">{jobrequest.request_name}</h3>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">category: {jobrequest.category}<span className="badge">{Moment(jobrequest.updated_at).format('d MMM')}</span></li>
                                        <li className="list-group-item">venue: {jobrequest.venue}</li>
                                        <li className="list-group-item">address: {jobrequest.address}</li>
                                        <li className="list-group-item">city: {jobrequest.city}</li>
                                        <li className="list-group-item">zip: {jobrequest.zip}</li>
                                        <li className="list-group-item">postal_code: {jobrequest.postal_code}</li>
                                        <li className="list-group-item">country: {jobrequest.country}</li>
                                        <li className="list-group-item">description: {jobrequest.description}</li>
                                    </ul>
                                    <a href="#" className="btn btn-info">Apply <span className="glyphicon glyphicon-circle-arrow-right icon-custom-2"></span></a>
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

function mapStateToProps(state) {
    return { jobrequest: state.jobrequests.jobrequest };
}

export default connect(mapStateToProps, { fetchJobRequest })(JobRequestDetail);