'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
	const pathname = usePathname()

	useEffect(() => {
		const bodyElement = document.querySelector('body')

		if (bodyElement) {
			// Remove all classes
			bodyElement.classList.remove('homepage2-body', 'homepage4-body', 'homepage3-body', 'homepage1-body')

			// Add class based on pathname
			// Keep support for legacy demo routes, but default everything else to homepage4
			if (pathname === '/index2') {
				bodyElement.classList.add('homepage2-body')
			} else if (pathname === '/index3') {
				bodyElement.classList.add('homepage3-body')
			} else {
				// We use Header4 styles across the site
				bodyElement.classList.add('homepage4-body')
			}

		}
	}, [pathname])

	return null
}
