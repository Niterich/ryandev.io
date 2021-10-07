import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home | RyanDev.io</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div class='grid gird-cols-1 my-5'>
					<h1 id='typewriter' class='text-white text-5xl text-center py-3'>RyanDev.io</h1>
				</div>
				<div class='grid grid-cols-6 grid-flow-col'>
					<div></div>
					<div></div>
					<div><img src='public/images/me-1.jpg'/></div>
					<div class='text-white'>Welcome to my site!</div>
					<div></div>
					<div></div>
				</div>
			</main>
		</div>
	)
}
