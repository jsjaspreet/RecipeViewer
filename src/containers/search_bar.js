import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state={term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit= this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.applyFilter(this.state.term);
        this.setState({term:''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Filter by Ingredient"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Filter</button>
                </span>
            </form>
        );
    }
}


export default connect(null, actions)(SearchBar);