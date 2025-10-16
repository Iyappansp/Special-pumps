
import Link from 'next/link'
import CounterUp from '../elements/CounterUp'

export default function About4() {
	return (
		<>

			<div className="about4-section-area sp1">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about-images-area">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="img2 image-anime reveal">
											<img src="property/about1.webp" alt="Special Pumps" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="space100" />
										<div className="img1 image-anime reveal">
											<img src="property/about2.webp" alt="Special Pumps" />
										</div>
									</div>
								</div>
								<div className="author-img">
									<img src="/assets/img/elements/elements10.png" alt="Special Pumps" className="elements10" />
									<div className="arrow-btnarea">
										<Link href="/about-us">
											<div className="content keyframe5">
												<h6 className="circle rotateme">
													<span style={{ transform: 'rotate(0deg)' }}>S</span>
													{/* <span style={{ transform: 'rotate(17deg)' }}>P</span> */}
													<span style={{ transform: 'rotate(17deg)' }}>P</span>
													{/* <span style={{ transform: 'rotate(51deg)' }}>C</span> */}
													<span style={{ transform: 'rotate(34deg)' }}>E</span>
													{/* <span style={{ transform: 'rotate(68deg)' }}>A</span> */}
													<span style={{ transform: 'rotate(51deg)' }}>C</span>	
													{/* <span style={{ transform: 'rotate(102deg)' }}>P</span> */}
													<span style={{ transform: 'rotate(68deg)' }}>I</span>
													{/* <span style={{ transform: 'rotate(85deg)' }}>M</span> */}
													<span style={{ transform: 'rotate(85deg)' }}>A</span>
													{/* <span style={{ transform: 'rotate(119deg)' }}>S</span> */}
													<span style={{ transform: 'rotate(102deg)' }}>L</span>
													{/* <span style={{ transform: 'rotate(204deg)' }}>i</span> */}
													<span style={{ transform: 'rotate(202deg)' }}>P</span>
													{/* <span style={{ transform: 'rotate(238deg)' }}>h</span> */}
													<span style={{ transform: 'rotate(219deg)' }}>U</span>
													{/* <span style={{ transform: 'rotate(255deg)' }}>d</span> */}
													<span style={{ transform: 'rotate(236deg)' }}>M</span>
													{/* <span style={{ transform: 'rotate(289deg)' }}>m</span> */}
													<span style={{ transform: 'rotate(252deg)' }}>P</span>
													{/* <span style={{ transform: 'rotate(323deg)' }}>u</span> */}
													<span style={{ transform: 'rotate(269deg)' }}>S</span>
													{/* <span style={{ transform: 'rotate(340deg)' }}>b</span>
													<span style={{ transform: 'rotate(340deg)' }}>u</span>
													<span style={{ transform: 'rotate(340deg)' }}>i</span>
													<span style={{ transform: 'rotate(340deg)' }}>l</span> */}
												</h6>
											</div>
											<img src="/assets/img/icons/arrow1.svg" alt="Special Pumps" className="arrow1" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-1" />
						<div className="col-lg-5">
							<div className="about-heading heading3">
								
								<h2 className="text-anime-style-3">ABOUT US</h2>
								<h5 data-aos="fade-left" data-aos-duration={800}>Special Pumps by  Rotomech Industries</h5>
								<div className="space20" />
								<div className="space18" />
								<p data-aos="fade-left" data-aos-duration={900}>Manufacturer from Coimbatore delivering industrial pumps for process, chemical, hot oil, slurry, filtration, and dewatering applications. One range—many solutions.</p>
								<div className="space32" />
								<div className="counter-boxes" data-aos="fade-left" data-aos-duration={1000}>
									<div className="row">
										<div className="col-lg-4 col-md-4 col-6">
											<div className="counter-boxarea text-center">
												<h2><CounterUp className="counter">10</CounterUp>+</h2>
												<div className="space12" />
												<p>Pumps Sold</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-6">
											<div className="counter-boxarea text-center">
												<h2><CounterUp className="counter">9</CounterUp>+</h2>
												<div className="space12" />
												<p>Happy Client</p>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-6">
											<div className="space20 d-md-none d-block" />
											<div className="counter-boxarea text-center">
												<h2><CounterUp className="counter">98</CounterUp>%</h2>
												<div className="space12" />
												<p>Satisfaction Rate</p>
											</div>
										</div>
									</div>
								</div>
								<br />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
											<Link href="/product-gallery" className="theme-btn5">See All Products <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
												<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
											</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
												<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
											</svg></span></Link>
										</div>
								<div className="space32" />
								{/* <div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
									<Link href="/sidebar-grid" className="theme-btn5">See All Products <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
										<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
									</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
										<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
									</svg></span></Link>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
