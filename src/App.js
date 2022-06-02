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

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    // post data to server
    fetch('http://localhost:5000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log('Success:', data);
      })
  }

  return (
    <div className="App">
      <h2>My own data: {users.length}</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder='Type your name' required />
        <input type="text" name="email" id="" placeholder='Type your email' required />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {users.map(user => <li key={user.id}>id: {user.id}; Name: {user.name}; Email: {user.email}</li>)}
      </ul>
    </div>
  );
}

export default App;
