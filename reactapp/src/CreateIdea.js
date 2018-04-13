import React, { Component } from 'react';
import axios from './axios.js';

export default class CreateIdea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idea: ''
        };

        this.createIdea = this.createIdea.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    createIdea(e) {
        axios.post('/idea', {
            idea: this.state.idea
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
        e.preventDefault();
    }

    handleChange(event) {
        this.setState({
            idea: event.target.value
        });
    }

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="idea" onChange={this.handleChange} className="materialize-textarea"></textarea>
                            <label htmlFor="idea">Textarea</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" value={this.state.idea} onClick={this.createIdea}>
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}