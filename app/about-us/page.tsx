'use client'
import Slider from "react-slick"

// import Header4 from "@/components/layout/header/Header4"
// import Header4 from "@/components/layout/header/Header4"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CounterUp from '@/components/elements/CounterUp'
export default function AboutUs() {
	const settings2 = {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		fade: true,
		loop: true,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}
	const settings1 = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		loop: true,
		focusOnSelect: true,
		infinite: true,
	}
	return (
		<>
			<Layout headerStyle={4} footerStyle={4}>
				<div>
					<div className="hero-inner-section-area-sidebar">
						<img src="/property/hero-img.webp" alt="Special Pumps" className="hero-img1" />
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="hero-header-area text-center">
										<Link href="/">Home 		
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z">
												</path>
											</svg> About Us</Link>
										<div className="space24" />
										<h1>About Us</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== ABOUT AREA STARTS =======*/}
					<div className="about1-section-area sp1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="about-images-area">
										<div className="img2 image-anime reveal">
											<img src="property/small-about.webp" alt="Special Pumps" />
										</div>
										<div className="img1 image-anime reveal">
											<img src="property/big-about.webp" alt="Special Pumps" />
										</div>
										<div className="author-img aniamtion-key-1">
											<h3>Our Happy Customer</h3>
											<div className="space18" />
											<img src="/assets/img/all-images/others/author-img1.png" alt="Special Pumps" />
										</div>
									</div>
								</div>
								<div className="col-lg-1" />
								<div className="col-lg-5">
									<div className="about-heading heading1">
									<h2 className="text-anime-style-3">About Us</h2>

										<div className="space20" />
										<h5 data-aos="fade-left" data-aos-duration={800}>Excellence Industrials Pump Engineering</h5>
										<div className="space18" />
										<p data-aos="fade-left" data-aos-duration={900}>At Special Pumps, clear communication drives reliable performance. Whether you need help selecting a non‑clog sewage pump, sizing a thermic fluid unit for high‑temperature service, specifying corrosion‑resistant polypropylene or stainless‑steel construction, or optimizing an existing process line, the engineering team is ready to assist end‑to‑end.</p>
										<div className="space32" />
										<div className="counter-boxes" data-aos="fade-left" data-aos-duration={1000}>
											<div className="row">
											<div className="col-lg-4 col-md-4 col-6">
  <div className="counter-boxarea text-center">
    <h2><CounterUp end={150} />+</h2>
    <div className="space12" />
    <p>Pumps Sold</p>
  </div>
</div>

<div className="col-lg-4 col-md-4 col-6">
  <div className="counter-boxarea text-center">
    <h2><CounterUp end={100} />+</h2>
    <div className="space12" />
    <p>Happy Clients</p>
  </div>
</div>

<div className="col-lg-4 col-md-4 col-6">
  <div className="space20 d-md-none d-block" />
  <div className="counter-boxarea text-center">
    <h2><CounterUp end={90} suffix="%" /></h2>
    <div className="space12" />
    <p>Satisfaction Rate</p>
  </div>
</div>				</div>
										</div>
										<div className="space32" />
										<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
											<Link href="/product-gallery" className="theme-btn5">See All Products <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
					{/*===== ABOUT AREA ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="mission-section-area sp1" style={{ backgroundImage: 'url(assets/img/all-images/bg/bg1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center space-margin60">
																			<h2>Our Mission &amp; Vision</h2>

										<div className="space20" />
											<h5>Turning complex fluid challenges into simple, dependable flow.

</h5>
									</div>
									<div className="space100 d-lg-block d-none" />
								</div>
							</div>
							<div className="row">
								<div className="col-lg-7">
									<div className="vission-mission-box">
										<h3>Our Journey to Pumping Excellence</h3>
										<div className="space24" />
										<p>Our portfolio features Thermic Fluid Hot Oil, Polypropylene, Process & Stainless Steel, Back Pullout Process, High Pressure Multistage, Horizontal Non-Clog, Filter Press, Rotary Gear, and Dewatering/Mud pumps.</p>
										<div className="space24" />
										<h4>Our Mission</h4>
										<div className="space16" />
										<p>To provide reliable, application-specific pumps with prompt service and long-lasting performance for industrial operations.</p>
										<div className="space24" />
										<h4>Our Vision</h4>
										<div className="space16" />
										<p>To be a trusted partner in precision fluid handling, serving both Indian industries and global markets with excellence.</p>
										<div className="space32" />
										<div className="btn-area1">
											<Link href="/product-gallery" className="theme-btn5">See All Products <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
												<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
											</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
												<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
											</svg></span></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-5">
									<div className="img1">
										<img src="property/about-mission.webp" alt="Special Pumps" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== OTHERS AREA ENDS =======*/}
					{/*===== ABOUT AREA STARTS =======*/}
					{/* <div className="about2-section-area sp1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-7">
									<div className="about-images-area">
										<div className="row align-items-center">
											<div className="col-lg-6 col-md-6">
												<div className="img2 image-anime reveal">
													<img src="/assets/img/all-images/about/about-img3.png" alt="Special Pumps" />
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="img1 image-anime reveal">
													<img src="/assets/img/all-images/about/about-img4.png" alt="Special Pumps" />
												</div>
												<div className="space30" />
												<div className="img1 image-anime reveal">
													<img src="/assets/img/all-images/about/about-img5.png" alt="Special Pumps" />
												</div>
											</div>
										</div>
										<div className="author-img">
											<h3>Our Happy Customer</h3>
											<div className="space18" />
											<img src="/assets/img/all-images/others/author-img1.png" alt="Special Pumps" />
										</div>
									</div>
								</div>
								{/* <div className="col-lg-5">
									<div className="about-heading heading1">
										<h5 data-aos="fade-left" data-aos-duration={800}>Customer Faq</h5>
										<div className="space20" />
										<h2 className="text-anime-style-3">Embrace the Elegance Our Exclusive Property</h2>
										<div className="space18" />
										<p data-aos="fade-left" data-aos-duration={900}>At Special Pumps, weâ€™re redefining the way people
											find, sell, and invest in Products. Our mission is to simplify real a estate by provide
											innovative solutions, expert guidance.</p>
										<div className="accordion" id="accordionExample">
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														Market Expertise
													</button>
												</h2>
												<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>Backed by deep market insights, we offer guidance to make informed decisions.
														</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														Technology Expertise
													</button>
												</h2>
												<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>Backed by deep market insights, we offer guidance to make informed decisions.
														</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														Commitment to Excellence
													</button>
												</h2>
												<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>Backed by deep market insights, we offer guidance to make informed decisions.
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="space32" />
										<div className="btn-area1">
											<Link href="/product-gallery" className="theme-btn5">See All Products <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
												<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
											</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
												<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
											</svg></span></Link>
										</div>
									</div>
								</div> 
							</div>
						</div>
					</div> */}
					{/*===== ABOUT AREA ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="offer1-section-area sp1" style={{ backgroundImage: 'url(assets/img/all-images/bg/bg1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-7 m-auto">
									<div className="heading1 text-center space-margin60">
										<h2>What We Offer</h2>
										<div className="space20" />
										<h5>Upgrade To a Smarter Living Experience With Home Automation</h5>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4">
									<div className="img1">
										<img src="property/about-customer.webp" alt="Special Pumps" />
									</div>
								</div>
								<div className="col-lg-8">
  <div className="row">
    {/* Pump Selection & Sizing */}
    <div className="col-lg-6 col-md-6">
      <div className="offer-boxarea">
        <div className="icons text-orange-500">
          {/* Pump Icon */}
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19.4 15a8 8 0 0 0 0-6l2.1-1.2-1.4-2.4-2.4 1.4a8 8 0 0 0-6-2.1L11 2H9l-.7 2.7a8 8 0 0 0-6 2.1L0 5.4l1.4 2.4 2.1 1.2a8 8 0 0 0 0 6l-2.1 1.2 1.4 2.4 2.4-1.4a8 8 0 0 0 6 2.1l.7 2.7h2l.7-2.7a8 8 0 0 0 6-2.1l2.4 1.4 1.4-2.4L19.4 15z" />
</svg>

        </div>
        <div className="space24" />
        <div className="content">
          <Link href="/products/chemical-process">Pump Selection & Sizing</Link>
          <div className="space16" />
          <p>
            Get the right pump for flow, head, temperature, and fluid compatibility across Thermic Fluid, Polypropylene,
            Process/SS, Multistage, Non Clog, Filter Press, Rotary Gear, and Dewatering ranges.
          </p>
          <div className="space24" />
          <Link href="/" className="readmore">
            Learn More{" "}
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.05 12.36L7.39 18.02l-1.41-1.41 5.66-5.66-4.95-4.95H18v11.31l-4.95-4.95z" />
            </svg>

          </Link>
        </div>
      </div>
    </div>

    {/* Installation & Commissioning */}
    <div className="col-lg-6 col-md-6">
      <div className="offer-boxarea">
        <div className="icons text-orange-500">
          {/* Wrench Icon */}
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19.4 15a8 8 0 0 0 0-6l2.1-1.2-1.4-2.4-2.4 1.4a8 8 0 0 0-6-2.1L11 2H9l-.7 2.7a8 8 0 0 0-6 2.1L0 5.4l1.4 2.4 2.1 1.2a8 8 0 0 0 0 6l-2.1 1.2 1.4 2.4 2.4-1.4a8 8 0 0 0 6 2.1l.7 2.7h2l.7-2.7a8 8 0 0 0 6-2.1l2.4 1.4 1.4-2.4L19.4 15z" />
</svg>


        </div>
        <div className="space24" />
        <div className="content">
          <Link href="/products/chemical-process">Installation & Commissioning</Link>
          <div className="space16" />
          <p>
            Foundation, alignment, piping interface, and start-up checks to put new or replacement pumps into reliable operation quickly and efficiently.
          </p>
          <div className="space24" />
          <Link href="/" className="readmore">
            Learn More{" "}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.05 12.36L7.39 18.02l-1.41-1.41 5.66-5.66-4.95-4.95H18v11.31l-4.95-4.95z" />
            </svg>

          </Link>
        </div>
      </div>
    </div>

    {/* Maintenance & Rentals */}
    <div className="col-lg-6 col-md-6">
      <div className="offer-boxarea">
        <div className="icons text-orange-500">
          {/* Gear Icon */}
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19.4 15a8 8 0 0 0 0-6l2.1-1.2-1.4-2.4-2.4 1.4a8 8 0 0 0-6-2.1L11 2H9l-.7 2.7a8 8 0 0 0-6 2.1L0 5.4l1.4 2.4 2.1 1.2a8 8 0 0 0 0 6l-2.1 1.2 1.4 2.4 2.4-1.4a8 8 0 0 0 6 2.1l.7 2.7h2l.7-2.7a8 8 0 0 0 6-2.1l2.4 1.4 1.4-2.4L19.4 15z" />
</svg>

        </div>
        <div className="space24" />
        <div className="content">
          <Link href="/products/chemical-process">Maintenance & Rentals</Link>
          <div className="space16" />
          <p>
            Preventive servicing, overhauls, and OEM spares to maximize uptime, reduce costs, and extend pump life.
          </p>
          <div className="space24" />
          <Link href="/" className="readmore">
            Learn More{" "}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.05 12.36L7.39 18.02l-1.41-1.41 5.66-5.66-4.95-4.95H18v11.31l-4.95-4.95z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>

    {/* Performance Optimization */}
    <div className="col-lg-6 col-md-6">
      <div className="offer-boxarea">
        <div className="icons text-orange-500">
          {/* Motor Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19.4 15a8 8 0 0 0 0-6l2.1-1.2-1.4-2.4-2.4 1.4a8 8 0 0 0-6-2.1L11 2H9l-.7 2.7a8 8 0 0 0-6 2.1L0 5.4l1.4 2.4 2.1 1.2a8 8 0 0 0 0 6l-2.1 1.2 1.4 2.4 2.4-1.4a8 8 0 0 0 6 2.1l.7 2.7h2l.7-2.7a8 8 0 0 0 6-2.1l2.4 1.4 1.4-2.4L19.4 15z" />
</svg>

        </div>
        <div className="space24" />
        <div className="content">
          <Link href="/products/chemical-process">Performance Optimization</Link>
          <div className="space16" />
          <p>
            Troubleshooting and efficiency upgrades for hot oil, chemical, slurry, filtration, and dewatering duty cycles.
          </p>
          <div className="space24" />
          <Link href="/" className="readmore">
            Learn More{" "}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.05 12.36L7.39 18.02l-1.41-1.41 5.66-5.66-4.95-4.95H18v11.31l-4.95-4.95z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

							</div>
						</div>
					</div>
					{/*===== OTHERS AREA ENDS =======*/}
					{/*===== TEAM AREA STARTS =======*/}
					{/* <div className="team1-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="team-header heading1 space-margin60 text-center">
										<h5 data-aos="fade-left" data-aos-duration={800}>Experts Behind Special Pumps</h5>
										<div className="space20" />
										<h2 className="text-anime-style-3">The Special Pumps Dream Team</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={800}>
									<div className="team-widget-boxarea">
										<div className="img1 image-anime">
											<img src="/assets/img/all-images/team/team-img1.png" alt="Special Pumps" />
											<div className="share">
												<Link href="/#"><svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} viewBox="0 0 17 18" fill="none">
													<path d="M14.1333 12.7229C13.4578 12.7229 12.8533 12.994 12.3911 13.4187L6.05332 9.66867C6.09777 9.46084 6.13332 9.25301 6.13332 9.03614C6.13332 8.81928 6.09777 8.61145 6.05332 8.40361L12.32 4.68976C12.8 5.14157 13.4311 5.42169 14.1333 5.42169C15.6089 5.42169 16.8 4.21084 16.8 2.71084C16.8 1.21084 15.6089 0 14.1333 0C12.6578 0 11.4667 1.21084 11.4667 2.71084C11.4667 2.92771 11.5022 3.13554 11.5467 3.34337L5.27999 7.05723C4.79999 6.60542 4.16888 6.3253 3.46665 6.3253C1.9911 6.3253 0.799988 7.53614 0.799988 9.03614C0.799988 10.5361 1.9911 11.747 3.46665 11.747C4.16888 11.747 4.79999 11.4669 5.27999 11.0151L11.6089 14.7741C11.5644 14.9639 11.5378 15.1627 11.5378 15.3614C11.5378 16.8163 12.7022 18 14.1333 18C15.5644 18 16.7289 16.8163 16.7289 15.3614C16.7289 13.9066 15.5644 12.7229 14.1333 12.7229Z" fill="white" />
												</svg></Link>
											</div>
											<ul>
												<li><Link href="/#"><i className="fa-brands fa-facebook-f" /></Link></li>
												<li><Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link></li>
												<li><Link href="/#" className="m-0"><i className="fa-brands fa-instagram" /></Link></li>
											</ul>
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/#">Henry Nicolas</Link>
											<div className="space14" />
											<p>Founder &amp; CEO</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={900}>
									<div className="team-widget-boxarea">
										<div className="img1 image-anime">
											<img src="/assets/img/all-images/team/team-img2.png" alt="Special Pumps" />
											<div className="share">
												<Link href="/#"><svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} viewBox="0 0 17 18" fill="none">
													<path d="M14.1333 12.7229C13.4578 12.7229 12.8533 12.994 12.3911 13.4187L6.05332 9.66867C6.09777 9.46084 6.13332 9.25301 6.13332 9.03614C6.13332 8.81928 6.09777 8.61145 6.05332 8.40361L12.32 4.68976C12.8 5.14157 13.4311 5.42169 14.1333 5.42169C15.6089 5.42169 16.8 4.21084 16.8 2.71084C16.8 1.21084 15.6089 0 14.1333 0C12.6578 0 11.4667 1.21084 11.4667 2.71084C11.4667 2.92771 11.5022 3.13554 11.5467 3.34337L5.27999 7.05723C4.79999 6.60542 4.16888 6.3253 3.46665 6.3253C1.9911 6.3253 0.799988 7.53614 0.799988 9.03614C0.799988 10.5361 1.9911 11.747 3.46665 11.747C4.16888 11.747 4.79999 11.4669 5.27999 11.0151L11.6089 14.7741C11.5644 14.9639 11.5378 15.1627 11.5378 15.3614C11.5378 16.8163 12.7022 18 14.1333 18C15.5644 18 16.7289 16.8163 16.7289 15.3614C16.7289 13.9066 15.5644 12.7229 14.1333 12.7229Z" fill="white" />
												</svg></Link>
											</div>
											<ul>
												<li><Link href="/#"><i className="fa-brands fa-facebook-f" /></Link></li>
												<li><Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link></li>
												<li><Link href="/#" className="m-0"><i className="fa-brands fa-instagram" /></Link></li>
											</ul>
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/#">Sarah Johnson</Link>
											<div className="space14" />
											<p>Real Estate Agent</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={1000}>
									<div className="team-widget-boxarea">
										<div className="img1 image-anime">
											<img src="/assets/img/all-images/team/team-img3.png" alt="Special Pumps" />
											<div className="share">
												<Link href="/#"><svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} viewBox="0 0 17 18" fill="none">
													<path d="M14.1333 12.7229C13.4578 12.7229 12.8533 12.994 12.3911 13.4187L6.05332 9.66867C6.09777 9.46084 6.13332 9.25301 6.13332 9.03614C6.13332 8.81928 6.09777 8.61145 6.05332 8.40361L12.32 4.68976C12.8 5.14157 13.4311 5.42169 14.1333 5.42169C15.6089 5.42169 16.8 4.21084 16.8 2.71084C16.8 1.21084 15.6089 0 14.1333 0C12.6578 0 11.4667 1.21084 11.4667 2.71084C11.4667 2.92771 11.5022 3.13554 11.5467 3.34337L5.27999 7.05723C4.79999 6.60542 4.16888 6.3253 3.46665 6.3253C1.9911 6.3253 0.799988 7.53614 0.799988 9.03614C0.799988 10.5361 1.9911 11.747 3.46665 11.747C4.16888 11.747 4.79999 11.4669 5.27999 11.0151L11.6089 14.7741C11.5644 14.9639 11.5378 15.1627 11.5378 15.3614C11.5378 16.8163 12.7022 18 14.1333 18C15.5644 18 16.7289 16.8163 16.7289 15.3614C16.7289 13.9066 15.5644 12.7229 14.1333 12.7229Z" fill="white" />
												</svg></Link>
											</div>
											<ul>
												<li><Link href="/#"><i className="fa-brands fa-facebook-f" /></Link></li>
												<li><Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link></li>
												<li><Link href="/#" className="m-0"><i className="fa-brands fa-instagram" /></Link></li>
											</ul>
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/#">Sohia Rodriguez</Link>
											<div className="space14" />
											<p>Marketing Director</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={1200}>
									<div className="team-widget-boxarea">
										<div className="img1 image-anime">
											<img src="/assets/img/all-images/team/team-img4.png" alt="Special Pumps" />
											<div className="share">
												<Link href="/#"><svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} viewBox="0 0 17 18" fill="none">
													<path d="M14.1333 12.7229C13.4578 12.7229 12.8533 12.994 12.3911 13.4187L6.05332 9.66867C6.09777 9.46084 6.13332 9.25301 6.13332 9.03614C6.13332 8.81928 6.09777 8.61145 6.05332 8.40361L12.32 4.68976C12.8 5.14157 13.4311 5.42169 14.1333 5.42169C15.6089 5.42169 16.8 4.21084 16.8 2.71084C16.8 1.21084 15.6089 0 14.1333 0C12.6578 0 11.4667 1.21084 11.4667 2.71084C11.4667 2.92771 11.5022 3.13554 11.5467 3.34337L5.27999 7.05723C4.79999 6.60542 4.16888 6.3253 3.46665 6.3253C1.9911 6.3253 0.799988 7.53614 0.799988 9.03614C0.799988 10.5361 1.9911 11.747 3.46665 11.747C4.16888 11.747 4.79999 11.4669 5.27999 11.0151L11.6089 14.7741C11.5644 14.9639 11.5378 15.1627 11.5378 15.3614C11.5378 16.8163 12.7022 18 14.1333 18C15.5644 18 16.7289 16.8163 16.7289 15.3614C16.7289 13.9066 15.5644 12.7229 14.1333 12.7229Z" fill="white" />
												</svg></Link>
											</div>
											<ul>
												<li><Link href="/#"><i className="fa-brands fa-facebook-f" /></Link></li>
												<li><Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link></li>
												<li><Link href="/#" className="m-0"><i className="fa-brands fa-instagram" /></Link></li>
											</ul>
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/#">Daniel Williams</Link>
											<div className="space14" />
											<p>Services Manager</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					{/*===== TEAM AREA ENDS =======*/}
					{/*===== TESTIMONIAL AREA STARTS =======*/}
					<div className="testimonial1-section-area sp1" style={{ backgroundImage: 'url(assets/img/all-images/bg/bg1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="testimonial-header space-margin60 heading1">
										<h5 data-aos="fade-left" data-aos-duration={800}>Testimonial</h5>
										<div className="space20" />
										<h2 className="text-anime-style-3">A Legacy Of Happy Clients</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="testimonialmain-slider">
										<div className="row align-items-center">
											<div className="col-lg-5">
												<Slider {...settings2} className="images-area2 slider2">
													<div className="img1 image-anime">
														<img src="property/testinomials.webp" alt="Special Pumps" />
													</div>
													<div className="img1 image-anime">
														<img src="property/testinomials.webp" alt="Special Pumps" />
													</div>
													<div className="img1 image-anime">
														<img src="property/testinomials.webp" alt="Special Pumps" />
													</div>
													<div className="img1 image-anime">
														<img src="property/testinomials.webp" alt="Special Pumps" />
													</div>
												</Slider>
											</div>
											<div className="col-lg-7">
    <Slider {...settings1} className="testimonial-slider-area slider1">
        <div className="testimonial-box">
            <img src="/assets/img/icons/quoto-icon1.svg" alt="Special Pumps" />
            <div className="space16" />
            <p>"Special Pumps surveyed our site, sized the right booster, and installed it the same day with a clean, quiet setup that finally stabilized our water pressure across all floors. The team's commissioning checklist and training were clear, and they fine‑tuned the system to cut cycling and noise while improving efficiency during peak hours."</p>
            <div className="space32" />
            <div className="test-images">
                <div className="auhtor-area">
                    <div className="img1">
                        <img src="/assets/img/all-images/testimonial/testimonial-img2.png" alt="Special Pumps" />
                    </div>
                    <div className="text">
                        <Link href="/#">Priya Sharma</Link>
                        <div className="space10" />
                        <p>Homeowner, Coimbatore</p>
                    </div>
                </div>
                <img src="\image.png" alt="Special Pumps" width={100} height={100} className="brand1" />
            </div>
        </div>

        <div className="testimonial-box">
            <img src="/assets/img/icons/quoto-icon1.svg" alt="Special Pumps" />
            <div className="space16" />
            <p>"We needed dependable boosting for our 6-storey retail property. Special Pumps sized the system correctly, coordinated installation after-hours, and delivered stable pressure across all outlets. Their duplex setup with duty/standby logic has run continuously through peak loads with zero downtime."</p>
            <div className="space32" />
            <div className="test-images">
                <div className="auhtor-area">
                    <div className="img1">
                        <img src="/assets/img/all-images/testimonial/testimonial-img3.png" alt="Special Pumps" />
                    </div>
                    <div className="text">
                        <Link href="/#">Rajesh Kumar</Link>
                        <div className="space10" />
                        <p>Facility Manager</p>
                    </div>
                </div>
                <img src="\image.png" alt="Special Pumps" className="brand1" />
            </div>
        </div>

        <div className="testimonial-box">
            <img src="/assets/img/icons/quoto-icon1.svg" alt="Special Pumps" />
            <div className="space16" />
            <p>"We pump abrasive wastewater and Special Pumps recommended the right materials and sealed units. They specified tougher components for our harsh conditions, which stopped leaks and reduced maintenance calls dramatically over the last six months."</p>
            <div className="space32" />
            <div className="test-images">
                <div className="auhtor-area">
                    <div className="img1">
                        <img src="/assets/img/all-images/testimonial/testimonial-img4.png" alt="Special Pumps" />
                    </div>
                    <div className="text">
                        <Link href="/#">Amit Patel</Link>
                        <div className="space10" />
                        <p>Plant Engineer</p>
                    </div>
                </div>
                <img src="\image.png" alt="Special Pumps" className="brand1" />
            </div>
        </div>

        <div className="testimonial-box">
            <img src="/assets/img/icons/quoto-icon1.svg" alt="Special Pumps" />
            <div className="space16" />
            <p>"Their flood-control station upgrade worked flawlessly through the monsoon season. Support has been proactive with checks and alerts, ensuring redundancy that kept our municipal services online without interruptions during critical periods."</p>
            <div className="space32" />
            <div className="test-images">
                <div className="auhtor-area">
                    <div className="img1">
                        <img src="/assets/img/all-images/testimonial/testimonial-img5.png" alt="Special Pumps" />
                    </div>
                    <div className="text">
                        <Link href="/#">S. Krishnan</Link>
                        <div className="space10" />
                        <p>Municipal Engineer</p>
                    </div>
                </div>
                <img src="\image.png" alt="Special Pumps" className="brand1" />
            </div>
        </div>
    </Slider>
</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== TESTIMONIAL AREA ENDS =======*/}
					<div className="space100 d-lg-block d-none" />
					{/* <div className="space50 d-lg-none d-block" /> */}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="cta-bg-area" style={{ backgroundImage: 'url(assets/img/all-images/bg/cta-bg1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
										<div className="row align-items-center">
											<div className="col-lg-5">
												<div className="cta-header">
													<h2 className="text-anime-style-3">Step Into Your Home with Special Pumps</h2>
													<div className="space16" />
													<p data-aos="fade-left" data-aos-duration={1000}>At Special Pumps, we believe your next
														home is more than just a place it's where your future begins you are buy.</p>
												</div>
											</div>
											<div className="col-lg-2" />
											<div className="col-lg-5" data-aos="zoom-in" data-aos-duration={1000}>
												<div className="btn-area1 text-center">
													<Link href="/" className="theme-btn5">Find Your Perfect Pump<span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
