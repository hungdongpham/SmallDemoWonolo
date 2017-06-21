import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class DownloadApps extends Component {

    render() {
        return (
            <div className="download-area">
                <img className="image-3-devices" src="./images/p3.png" alt=""></img>
                <input type="" className="form-control" placeholder="Your phone number" />
                <button className="btn btn-primary btn-getphone">Send Text</button>

                <a href="#"><img className="image-store" src="./images/google_plays.png" alt=""></img></a>
                <a href="#"><img className="image-store" src="./images/apple_store.png" alt=""></img></a>
            </div>
        );
    }
}