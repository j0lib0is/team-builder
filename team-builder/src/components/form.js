import React from 'react';

export default function Form(props) {
	const { avenger, submitHandler, changeHandler } = props;

	const onChange = event => {
		const { name, value } = event.target;
		changeHandler(name, value);
	}

	const onSubmit = event => {
		event.preventDefault();
    	submitHandler();
	}

	return(
		<form className='submission' onSubmit={onSubmit}>
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
				Role
				<input 
					value={avenger.role}
					name='role'
					type='text'
					placeholder='Role'
					onChange={onChange}
				/>
			</label>
			<label>
				Email
				<input 
					value={avenger.email}
					name='email'
					type='email'
					placeholder='johndoe@email.com'
					onChange={onChange}
				/>
			</label>
			<button>Assemble!</button>
		</form>
	)
}