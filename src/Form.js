import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            date: '',
            job: '',
            status: '',
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { date, job, status } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="date">Date</label>
                <input 
                    type="text" 
                    name="date" 
                    id="date"
                    value={date} 
                    onChange={this.handleChange} />
                <label for="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} />
                <label for="status">Status</label>
                <input 
                    type="text" 
                    name="status" 
                    id="status"
                    value={status} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Add
                </button>
            </form>
        );
    }
}

export default Form;