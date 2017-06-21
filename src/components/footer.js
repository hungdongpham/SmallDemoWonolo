import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 footerleft ">
                            <div className="logofooter">Wonolo</div>
                            <p>Wonolo (stands for Work. Now. Locally.) is an on-demand staffing platform for businesses to fill their immediate hourly or daily labor needs.</p>
                            <p><i class="fa fa-envelope"></i> E-mail : info@wolono.com</p>
                        </div>
                        <div className="col-md-2 col-sm-6 paddingtop-bottom">
                            <h6 className="heading7">GENERAL LINKS</h6>
                            <ul className="footer-ul">
                                <li><a href="#"> Post job</a></li>
                                <li><a href="#"> Find work</a></li>
                                <li><a href="#"> Resources</a></li>
                                <li><a href="#"> Case Studies</a></li>
                                <li><a href="#"> Terms & Conditions</a></li>
                                <li><a href="#"> Staffing Solutions</a></li>
                                <li><a href="#"> Developers / API</a></li>
                                <li><a href="#"> Wonoloer TOS</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 paddingtop-bottom">
                            <h6 className="heading7">LATEST POST</h6>
                            <div className="post">
                                <p>Unconventional Tips for Starting a Business: 43...<span>Jun 18,2017</span></p>
                                <p>Top Warehouse Management Software Systems: 50...<span>Jun 18,2015</span></p>
                                <p>4 Warehouse Recruitment Tips to Hire Pickers and... <span>Jun 18,2015</span></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 paddingtop-bottom">
                            <div className="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                <div className="fb-xfbml-parse-ignore">
                                    <blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
