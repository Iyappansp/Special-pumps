

export default function Cta3() {
	return (
		<>

			<div className="cta4-section-area" style={{ backgroundImage: 'url(assets/img/all-images/bg/bg4.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="cta-header heading2">
								<h2 className="text-anime-style-3">Step Into Performance with Special Pumps</h2>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={900}>At Special Pumps, we believe your next home is more than just a place it's where your future begins you are buy.
								</p>
								<div className="space30" />
								<form data-aos="fade-left" data-aos-duration={1100}>
									<input type="text" placeholder="Email Address" />
									<button type="submit" className="theme-btn5">Subscribe <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
										<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
									</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
										<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
									</svg></span></button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
					<img src="/assets/img/all-images/cta/cta-img1.png" alt="Special Pumps" />
				</div>
			</div>
		</>
	)
}
