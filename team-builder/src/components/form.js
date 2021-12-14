import React from 'react';

export default function Form(props) {
	const { avenger, submitHandler, changeHandler } = props;

	const onChange = event => {
		// console.log(event.target.name, event.target.value);
		const { name, value } = event.target;
		changeHandler(name, value);
	}

	const onSubmit = event => {
		// console.log(event);
		event.preventDefault();
    	submitHandler();
	}

	return(
		<form onSubmit={onSubmit}>
			<label>
				Name
				<input 
					value={avenger.name}
					name='name'
					type='text'
					placeholder='Name'
					onChange={onChange}
				/>
			</label>
			<label>
				Superhero Name
				<input 
					value={avenger.hero}
					name='hero'
					type='text'
					placeholder='Superhero Name'
					onChange={onChange}
				/>
			</label>
			<button>Assemble!</button>
		</form>
	)
}