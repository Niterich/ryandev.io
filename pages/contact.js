import { useState } from 'react';
import Head from 'next/head'

export default function Home() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			name,
			email,
			message,
		};
		console.log(data);
	};
	return (
		<div>
			<Head>
				<title>Contact | RyanDev.io</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1>Contact</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input
						id="name"
						type="text"
						onChange={e => setName(e.target.value)}
					/>
					<label htmlFor="email">Email:</label>
					<input
						id="email"
						type="email"
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						type="text"
						rows="4"
						onChange={e => setMessage(e.target.value)}
					/>
					<button type="submit">Send</button>
					</form>
				</div>
			</main>
		</div>
	)
}
