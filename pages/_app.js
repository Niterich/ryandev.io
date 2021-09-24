import '../styles/globals.css'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<header>
				<nav className="mt-4 my-5 mx-3">
					<ul className="flex flex-row">
						<li className="font-bold mr-5 hover:text-gray-300">
							<Link className="" href="/">RyanDev.io</Link>
						</li>
						<li className="hover:text-gray-300 mr-4">
							<Link href="/portfolio">Portfolio</Link>
							</li>
						<li className="hover:text-gray-300 mr-4">
							<Link href="/resume">Resume</Link>
						</li>
						<li className="hover:text-gray-300">
							<Link href="/contact">Contact</Link>
						</li>
						<li className="hover:text-gray-300 ml-auto mr-2">
							<a href="https://github.com/niterich" className="text-3xl">
								<AiFillGithub></AiFillGithub>
							</a>
						</li>
						<li className="hover:text-gray-300 mr-2">
							<a href="https://linkedin.com/in/ryanwilliams99" className="text-3xl">
								<AiFillLinkedin></AiFillLinkedin>
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<div className="mx-auto mt- w-10/12">
			<div id='bg-image' className='opacity-60 md:opacity-40'></div>
				<Component {...pageProps} />
			</div>
		</div>

	)
}

export default MyApp
