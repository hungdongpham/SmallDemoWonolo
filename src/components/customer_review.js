import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class CustomerReview extends Component {

    render() {
        return (<section className="customer-review">
            <div className="container text-center">
                <div className="row ">
                    <div className="col-xs-12">
                        <h2>What Customers Say About <img src="./images/text-logo-yellow.png"></img></h2>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row ">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 " role="tabpanel">
                        <div className="col-xs-4 col-sm-12 ">
                            <ul className="nav nav-justified " id="nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#dustin" aria-controls="dustin" role="tab" data-toggle="tab">
                                        <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dustinlamont/128.jpg" ></img>
                                        <span className="quote"><i className="fa fa-quote-left"></i></span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a href="#daksh" aria-controls="daksh" role="tab" data-toggle="tab">
                                        <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dakshbhagya/128.jpg"></img>
                                        <span className="quote"><i className="fa fa-quote-left"></i></span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a href="#anna" aria-controls="anna" role="tab" data-toggle="tab">
                                        <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/annapickard/128.jpg" ></img>
                                        <span className="quote"><i className="fa fa-quote-left"></i></span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a href="#wafer" aria-controls="wafer" role="tab" data-toggle="tab">
                                        <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/waferbaby/128.jpg" ></img>
                                        <span className="quote"><i className="fa fa-quote-left"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-8 col-sm-12 ">

                            <div className="tab-content" id="tabs-collapse">
                                <div role="tabpanel" className="tab-pane fade in active" id="dustin">
                                    <div className="tab-inner">
                                        <p className="lead">100% of the jobs posted on Wonolo were filled within an hour and successfully completed.</p>
                                        <hr />
                                        <p><strong className="text-uppercase">Dustin Lamont</strong></p>
                                        <p><em className="text-capitalize"> Product Manager & Head </em> at <a href="#">Fleet Business Automatic Labs</a></p>
                                    </div>
                                </div>

                                <div role="tabpanel" className="tab-pane fade" id="daksh">
                                    <div className="tab-inner">
                                        <p className="lead">Suspendisse dictum gravida est, nec consequat tortor venenatis a. Suspendisse vitae venenatis sapien.</p>
                                        <hr />
                                        <p><strong className="text-uppercase">Daksh Bhagya</strong></p>
                                        <p><em className="text-capitalize"> VP Product & Experience </em> at <a href="#">TrueMotion</a></p>
                                    </div>
                                </div>

                                <div role="tabpanel" className="tab-pane fade" id="anna">
                                    <div className="tab-inner">
                                        <p className="lead">Wonolo has been a great resource to help us meet spikes in our demand - a previously unavailable solution that has allowed us a lot of flexibility in managing the headcount in our warehouse!</p>
                                        <hr />
                                        <p><strong className="text-uppercase">Anna Pickard</strong></p>
                                        <p><em className="text-capitalize"> Head of E-Commerce</em> at <a href="#">Memebox</a></p>
                                    </div>
                                </div>

                                <div role="tabpanel" className="tab-pane fade" id="wafer">
                                    <div className="tab-inner">
                                        <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ultrices diam. Mauris viverra libero non laoreet blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                                        <hr />
                                        <p><strong className="text-uppercase">Wafer Baby</strong></p>
                                        <p><em className="text-capitalize"> Web designer</em> at <a href="#">HP</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
