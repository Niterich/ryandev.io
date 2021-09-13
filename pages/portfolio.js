import Head from 'next/head'
import { projects } from '../lib/projects'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Portfolio | RyanDev.io</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1 className="text-6xl my-5">Portfolio</h1>
				<div className="space-y-6">
					{projects.map((project) => (
						<ProjectListItem key={project.title} {...project} />
					))}
				</div>
			</main>
		</div>
	);
}

function ProjectListItem({ title, img, description, appUrl, githubUrl }) {
	return (
		<div className="border border-black rounded-md py-5">
			<h3 className="px-4 text-xl font-bold mb-2">{title}</h3>
			<img className="w-auto mb-2" src={img} />
			<p className="px-4 mb-2 text-center">{description}</p>
			<div className="px-4 space-x-4 text-center">
				<a target="_blank"  className="hover:text-gray-900" href={appUrl}>App</a>
				<div className="inline-block">|</div>
				<a target="_blank" className="hover:text-gray-900" href={githubUrl}> Repo</a>
			</div>
		</div>
	);
}
