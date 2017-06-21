import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class Stepper extends Component {
    
    render() {
        const activeClass = 'active';
        let activeClass_1, activeClass_2, activeClass_3 = '';

        if(this.props.selectedItem == 1){
            activeClass_1 = activeClass;
        }else if(this.props.selectedItem == 2){
            activeClass_2 = activeClass;
        }else if(this.props.selectedItem == 3){
            activeClass_3 = activeClass;
        }

        return (
            <div className="container stepper">
                <div className="row stepper-row">
                    <div className="btn-group btn-group-justified">
                        <div className="btn-group">
                            <button type="button " className={`btn btn-nav stepper-item ${activeClass_1}`}>
                                <span className="glyphicon glyphicon-education"></span>
                                <p><div className="numberCircle">1</div> Fill your skills </p>
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button " className={`btn btn-nav stepper-item ${activeClass_2}`}>
                                <span className="glyphicon glyphicon-list-alt"></span>
                                <p><div className="numberCircle">2</div> Select job request </p>
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button " className={`btn btn-nav stepper-item ${activeClass_3}`}>
                                <span className="glyphicon glyphicon-briefcase"></span>
                                <p><div className="numberCircle">3</div> Apply it </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}