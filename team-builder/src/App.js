import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

const defaultValues = {
  name: '',
  role: '',
  email: ''
}

function App() {

  // Set up state to hold list of team members
  const [ team, setTeam ] = useState([
    { id: 0, name: 'Tony Stark', role: 'Iron Man', email: 'tony@starkindustries.com' },
    { id: 1, name: 'Buck Rogers', role: 'Captain America', email: 'captain@usa.gov' },
    { id: 2, name: 'Bruce Banner', role: 'Hulk', email: 'b.banner@culver.edu' },
    { id: 3, name: 'Clint Barton', role: 'Hawk Eye', email: 'N/A' },
    { id: 4, name: 'Natasha Romanov', role: 'Black Widow', email: 'N/A' },
    { id: 5, name: 'Peter Parker', role: 'SpiderMan', email: 'thespiderman@hotmail.com' }
  ]);
  // Set up state to hold form values and initialize to default values
  const [ formValues, setFormValues ] = useState(defaultValues);
  // Set up state to hold an error message
  const [ error, setError ] = useState('');

  const changeHandler = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitHandler = () => {
    // Save the newly added Avenger to a variable
    const submittedAvenger = {
      name: formValues.name.trim(),
      role: formValues.role.trim(),
      email: formValues.email.trim()
    }

    if (!submittedAvenger.name || !submittedAvenger.role || !submittedAvenger.email) {
      setError('Oops, looks like you are missing something.')
    } else {
      setTeam([...team, submittedAvenger]);
      setFormValues(defaultValues);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>The Avengers</h1>
      </header>
      <div className='container'>
        <Form avenger={formValues} changeHandler={changeHandler} submitHandler={submitHandler} />
        <p>{error}</p>
        {team.map((avenger, idx) =>
          <div key={idx} className='avenger'>
            <h4>{avenger.name} is {avenger.role}</h4>
            <a href={`mailto:${avenger.email}`}>{avenger.email}</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
