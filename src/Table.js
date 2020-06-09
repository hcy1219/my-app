import React from 'react';
import './App.css';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Date</th>
                <th>What to do?</th>
                <th>Status</th>
                <th>Delete</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.date}</td>
                <td>{row.job}</td>
                <td><input className="todolist__done form-check-input" type="checkbox" name="done" /></td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}


const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table align="center">
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}


export default Table;