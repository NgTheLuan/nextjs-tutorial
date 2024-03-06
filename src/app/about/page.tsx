'use client'

import { useParams } from 'next/navigation'

export default function About() {
	const params = useParams()

	console.log('About router :', params)

	return <div>About page</div>
}
