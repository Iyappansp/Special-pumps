import Link from 'next/link'
export default function Header4({ scroll, isMobileMenu, handleMobileMenu }: any) {
	return (
		<>
			<header>
				<div className="header-area homepage4 header header-sticky d-none d-lg-block " id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/"><img src="/assets/img/logo/logo5.png" alt="Special Pumps" /></Link>
									</div>
									<div className="main-menu">
										<ul>
											<li><Link href="/">Home</Link></li>
											<li><Link href="/about-us">About</Link></li>
											<li><Link href="/our-service">Our Services</Link></li>
											<li><Link href="/product-gallery">Product Gallery</Link></li>
											<li className="has-dropdown">
												<Link href="/#" className="plus">
													Products <i className="fa-solid fa-angle-down" />
												</Link>

												<ul className="dropdown-padding">
													{/* Level 1 item with nested flyout */}
													<li className="has-flyout">
														<Link href="" className="flyout-trigger">
															Product Specification <i className="fa-solid fa-angle-right" />
														</Link>

														{/* Flyout that appears only on hover of “Product Specification” */}
														<ul className="flyout">
															<li><Link href="/products/thermic-fluid-hot-oil-pump">Thermic Fluid Hot Oil Pump</Link></li>
															<li><Link href="/products/process-pump">Process Pump and Stainless Steel Pump</Link></li>
															<li><Link href="/products/polypropylene-pump">Polypropylene Pump</Link></li>
															<li><Link href="/products/back-pullout-process-pump">Back Pullout Process Pump</Link></li>
															<li><Link href="/products/horizontal-non-clog-pump">Horizontal Non‑Clog Pump</Link></li>
															<li><Link href="/products/filter-press-pump">Filter Press Pump</Link></li>
															<li><Link href="/products/high-pressure-multistage-pump">High Pressure Multistage Pump</Link></li>
															<li><Link href="/products/rotary-gear-pump">Rotary Gear Pump</Link></li>
															<li><Link href="/products/dewatering-mud-pump">Dewatering / Mud Pump</Link></li>
														</ul>
													</li>

													{/* <li><Link href="/product-gallery">Product Gallery</Link></li> */}
													<li><Link href="/installation-methods">Installation Method</Link></li>
												</ul>
											</li>
											<li><Link href="/contact">Contact</Link></li>
										</ul>
									</div>
									<div className="btn-area">
										{/* <div className="search-icon header__search header-search-btn">
											<Link href="/#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
												</path>
											</svg></Link>
										</div> */}
										<Link href="tel:9842666666" className="theme-btn5"> Call Now <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
