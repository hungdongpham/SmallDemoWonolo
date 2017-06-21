import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            //Show a link to sign out
            return <li className="nav-item">
                <Link className="nav-link" to="/signout">Sign Out</Link>
            </li>;

        } else {
            //Show a link to sign in or sign up
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default custom-navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"><img src="/images/logo_2.png"></img></a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/jobrequests">Job Requests</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/feature">Features</Link>
                            </li>
                            {this.renderLinks()}
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li className="dropdown-header">Nav header</li>
                                    <li><a href="#">Separated link</a></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            // <nav className="navbar navbar-default">
            //     <div className="container-fluid">
            //         <div className="navbar-header">
            //             <strong className="navbar-brand" href="#">Demo React & Redux</strong>
            //         </div>
            //         <ul className="nav navbar-nav">
            //             <li className="nav-item">
            //                 <Link to="/">Home</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/videos">Videos</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/posts">Posts</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/weather">Weather</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/users">Users</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/resources">Resources</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to="/feature">Features</Link>
            //             </li>
            //             {this.renderLinks()}
            //         </ul>
            //     </div>
            // </nav>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);