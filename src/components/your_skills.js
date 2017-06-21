import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router';
import { fetchBadges, fetchPos, FETCH_POS } from '../actions/index';
import GoogleMap from '../components/google_map';
import Stepper from './stepper';


class YourSkills extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.getPos = this.getPos.bind(this);
    }

    getPos(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        this.props.dispatch({
            type: FETCH_POS,
            data: { lat, long },
        });
    }

    componentDidMount() {
        this.props.dispatch(fetchBadges());
        navigator.geolocation.getCurrentPosition(this.getPos);
    }

    renderBadges() {
        return this.props.badges.map((badge) => {
            return (
                <li className="list-group-item skill-item" key={badge.id}>
                    <img src={badge.icon_url}></img>
                    <h4>{badge.name}</h4>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" data-toggle="toggle"></input>
                        </label>
                    </div>
                </li>
            );
        });
    }

    renderMap() {
        if (this.props.userInfo.position.long && this.props.userInfo.position.lat) {
            return (
                <div className="google-map">
                    <GoogleMap lon={this.props.userInfo.position.long} lat={this.props.userInfo.position.lat} />
                </div>
            );
        }

    }

    render() {

        return (
            <section className="your-skills">
                <Stepper selectedItem='1' />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <ul className="list-group skills-list">
                                {this.renderBadges()}
                            </ul>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <p>Being able to commit resolutely to one thing and growing from it. As an individual and as a whole – in a family enterprise that creates fascinating products around the world. Once you experience it, you’ll want to stay.</p>
                            <p>
                                <a href="/jobrequests" className="btn btn-default">See Opened Positions <span className="glyphicon glyphicon-chevron-right"></span></a>
                            </p>
                            <p className="note">Note: please share your location before proceeding to see jobs near you.</p>

                            {this.renderMap()}
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
    return { badges: state.badges.all, userInfo: state.userInfo };
}


export default connect(mapStateToProps)(YourSkills);