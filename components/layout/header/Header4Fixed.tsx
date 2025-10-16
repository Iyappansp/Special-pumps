 'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header4Fixed({ scroll, isMobileMenu, handleMobileMenu }: any) {
  const pathname = usePathname()
  const isProductsActive = pathname?.startsWith('/products') || pathname === '/installation-methods'
  return (
    <>
      <header>
        <div className="header-area homepage4 header-sticky d-none d-lg-block sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href="property/logos1.png"><img src="/property/logos1.png" alt="Special Pumps" /></Link>
                  </div>
                  <div className="main-menu">
                    <ul>
                      <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                      <li><Link href="/about-us" className={pathname === '/about-us' ? 'active' : ''}>About Us</Link></li>
                      <li><Link href="/our-service" className={pathname === '/our-service' ? 'active' : ''}>Our Services</Link></li>
                      <li><Link href="/product-gallery" className={pathname === '/product-gallery' ? 'active' : ''}>Product Gallery</Link></li>
                      <li className="has-dropdown">
                        <Link href="/#" className={`plus ${isProductsActive ? 'active' : ''}`}>Products <i className="fa-solid fa-angle-down" /></Link>
                        <ul className="dropdown-padding">
                          <li className="has-flyout">
                            <Link href="" className="flyout-trigger">
                              Product Specification <i className="fa-solid fa-angle-right" />
                            </Link>
                            <ul className="flyout">
                              <li><Link href="/products/chemical-process">Chemical Process Pumps</Link></li>
                              <li><Link href="/products/filter-press">Filter Press Pumps</Link></li>
                              <li><Link href="/products/non-clog">Non‑Clog Pumps</Link></li>
                              <li><Link href="/products/polypropylene">Polypropylene Pumps</Link></li>
                              <li><Link href="/products/stainless-steel">Stainless Steel Pumps</Link></li>
                              <li><Link href="/products/thermic-fluid">Thermic Fluid Pumps</Link></li>
                              <li><Link href="/products/vacuum">Vacuum Pumps</Link></li>
                            </ul>
                          </li>
                          <li><Link href="/installation-methods">Installation Method</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                    </ul>
                  </div>
                  <div className="btn-area">
                    <Link href="tel:+919843018058" className="theme-btn5"> Call Now <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
