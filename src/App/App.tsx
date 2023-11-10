import React from 'react';
import './App.css';

function App() {
    const names = ['Dimych', 'Sveta', 'Katya', 'Victor', 'Ignat']
    const users = [{id: 1, name: 'Dimych'}, {id: 2, name: 'Sveta'}, {id: 3, name: 'Katya'}, {
        id: 4,
        name: 'Victor'
    }, {id: 5, name: 'Ignat'}]
    //const liElements =users.map((u,index)=> <li>{index}-{u.name}</li>)
    const liElements = users.map((u) => <div key={u.id}>
        <li>{u.name}</li>
    </div>)
    return (
        <div className="App">
            <ul>{liElements}</ul>
        </div>
    );

}

export default App;