import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class PromotionApps extends Component {

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row promotion-area">
                        <div className="col-md-8">
                            <h2 className="promotion-area-heading">Work now. Get paid.<span className="text-muted">Live life on your terms</span></h2>
                            <p className="lead">Wonolo connects you with immediate hourly or daily jobs from the biggest and best brands, allowing you to work where you want, when you want, for whomever you want.</p>

                            <a href="#"><img className="image-store" src="./images/google_plays.png" alt=""></img></a>
                            <a href="#"><img className="image-store" src="./images/apple_store.png" alt=""></img></a>
                        </div>
                        <div className="col-md-4 area-phone">
                            <img className="promotion-area-image img-responsive" src="./images/iphone.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

