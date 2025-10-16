import "/public/assets/css/main.css"
import "/public/assets/css/quote-card.css"
import "/public/assets/css/header-flyout.css"
import "/public/assets/css/product-gallery.css"
import "/public/assets/css/plugins/aos.css"
import "/public/assets/css/plugins/bootstrap.min.css"
import "/public/assets/css/plugins/fontawesome.css"
import "/public/assets/css/plugins/mobile.css"
import "/public/assets/css/plugins/nice-select.css"
import "/public/assets/css/plugins/owlcarousel.min.css"
import "/public/assets/css/plugins/sidebar.css"
import "/public/assets/css/plugins/slick-slider.css"
import "/public/assets/css/plugins/swiper-slider.css"
import "/public/assets/css/installation.css"
import "/public/assets/css/backtotop-override.css"
import "/public/assets/css/footer-override.css"
import "/public/assets/css/typography.css"
import "/public/assets/css/privacy-policy-utilities.css"
import "/public/assets/css/cta-override.css"

import StoreProvider from '@/features/StoreProvider'
import FloatingContacts from '@/components/FloatingContacts'
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import ClientLoader from './ClientLoader'
const inter = Inter({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})
const dmSans = DM_Sans({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: "Special Pumps - Best Pumps",
  description: "Recovery Form Your Damaged",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${inter.className} homepage4-body`}>
        <ClientLoader>
          <StoreProvider>
            {children}
            <FloatingContacts />
          </StoreProvider>
        </ClientLoader>
      </body>
    </html>
  )
}
