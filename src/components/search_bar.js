import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    render(){
        return (
            <div className="input-group search-bar">
                <input className="form-control"
                value={ this.state.term }
                onChange={event =>  this.onInputChange( event.target.value )} />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={event =>  this.onInputChange( event.target.value )}><span className="glyphicon glyphicon-search"/></button>
                </span>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;