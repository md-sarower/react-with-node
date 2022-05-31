import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/user/')
  .then(res => res.json())
  .then(data => setUsers(data))
}, [])

  return (
    <div className="App">
      <h2>My own data: {users.length}</h2>
      <ul>
        {users.map(user => <li key={user.id}>id: {user.id}; Name: {user.name}; Email: {user.email}</li>)}
      </ul>
    </div>
  );
}

export default App;
