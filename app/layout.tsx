import "/public/assets/css/main.css"
import "/public/assets/css/quote-card.css"
import "/public/assets/css/header-flyout.css"
import "/public/assets/css/product-gallery.css"
import "/public/assets/css/plugins/aos.css"
import "/public/assets/css/plugins/bootstrap.min.css"
import "/public/assets/css/plugins/fontawesome.css"
import "/public/assets/css/plugins/magnific-popup.css"
import "/public/assets/css/plugins/mobile.css"
import "/public/assets/css/plugins/nice-select.css"
import "/public/assets/css/plugins/owlcarousel.min.css"
import "/public/assets/css/plugins/sidebar.css"
import "/public/assets/css/plugins/slick-slider.css"
import "/public/assets/css/plugins/swiper-slider.css"
import "/public/assets/css/installation.css"

import StoreProvider from '@/features/StoreProvider'
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	// variable: "--ztc-family-font1",
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Special Pumps - Real Esate Next.js Template",
	description: "Made by AliThemes",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} homepage4-body`}>
				<StoreProvider>
					{children}
				</StoreProvider>
			</body>
		</html>
	)
}
