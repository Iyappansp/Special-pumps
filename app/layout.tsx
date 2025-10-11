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

import StoreProvider from '@/features/StoreProvider'
import FloatingContacts from '@/components/FloatingContacts'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
const inter = Inter({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
  title: "Special Pumps - Best Motor",
  description: "Recovery Form Your Damaged",
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
          <FloatingContacts />
        </StoreProvider>
      </body>
    </html>
  )
}
