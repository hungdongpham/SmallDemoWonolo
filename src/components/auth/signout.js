import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return <section className="feature-area">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12"><h3 className="header">Sorry to see you go...</h3>
                    </div>
                </div>
            </div>
            <div className="angled_down_outside outside primary lightgray">
                <div className="slope downleft"></div>
                <div className="slope downright"></div>
            </div>
        </section>;
    }
}

export default connect(null, actions)(Signout);