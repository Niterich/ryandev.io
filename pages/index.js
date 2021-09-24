import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home | RyanDev.io</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1 class='text-white'>Homepage</h1>
				<div>Hello, my name is ryan!</div>
			</main>
		</div>
	)
}
