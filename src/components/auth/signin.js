
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';
import DownloadApps from '../download_apps';
import Stepper from '../stepper';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <section className="sign-in">
        <Stepper selectedItem='3'/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 sign-in-area">
              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                  <label>Email:</label>
                  <input {...email} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Password:</label>
                  <input {...password} type="password" className="form-control" />
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button> or
                <Link to="/signup" className="">
                  Sign up now
                </Link>
              </form>
            </div>
            <div className="col-xs-12 col-md-6">
              <DownloadApps />
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
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
