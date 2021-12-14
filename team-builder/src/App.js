import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';

const defaultValues = {
  name: '',
  hero: ''
}

function App() {

  // Set up state to hold list of team members
  const [ team, setTeam ] = useState([
    { id: 0, name: 'Tony Stark', hero: 'Iron Man' },
    { id: 1, name: 'Buck Rogers', hero: 'Captain America' },
    { id: 2, name: 'Bruce Banner', hero: 'Hulk' },
    { id: 3, name: 'Clint Barton', hero: 'Hawk Eye' },
    { id: 4, name: 'Natasha Romanov', hero: 'Black Widow' },
    { id: 5, name: 'Peter Parker', hero: 'SpiderMan' }
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
      hero: formValues.hero.trim()
    }

    if (!submittedAvenger.name || !submittedAvenger.hero) {
      setError('Oops, looks like you are missing something.')
    } else {
      setTeam([submittedAvenger, ...team]);
      setFormValues(defaultValues);
    }

    console.log(team);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Avengers</h1>
      </header>
      <Form avenger={formValues} changeHandler={changeHandler} submitHandler={submitHandler} />
      <p>{error}</p>
      {/* {team.map(avenger => {
        (<div><p>{avenger}</p></div>)
      })} */}
    </div>
  );
}

export default App;
