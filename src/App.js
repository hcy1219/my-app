import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import './App.css';

class App extends Component {
    state = {
        characters: [],
        isEditing: false,
        isProcessing: false
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h1 align="center">To Do List</h1>                
                <p align="center">Wish you have a good day!</p>
                <br/>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}/>
                <br/>
                <br/>
                <br/>
                <h3>Add New Job Here:</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;