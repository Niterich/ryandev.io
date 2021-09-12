import 'tailwindcss/tailwind.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link href="/">(Home Icon)</Link>
					</li>
					<li>
						<Link href="/portfolio">Portfolio</Link>
						</li>
					<li>
						<Link href="/resume">Resume</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<Component {...pageProps} />
		</div>

	)
}

export default MyApp
