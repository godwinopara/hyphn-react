import { Link } from "react-router-dom";
import logo from "../../images/logo-Kachi.svg";
import phone from "../../images/phone.svg";
import arrow from "../../images/chevron-right.svg";

export default function DesktopNav() {
	return (
		<header className="hidden md:block">
			<nav>
				<div className="lg:flex lg:gap-[122px] py-3.5 ">
					<Link to="/" className="flex justify-center xl:justify-end xl:w-[60%]">
						<img src={logo} alt="logo" className="w-[40%]" />
					</Link>

					<div className="hidden xl:flex justify-center items-center gap-4">
						<div className="flex items-center gap-5">
							<img src={phone} alt="telephone icon" />
							<span className="text-black4 leading-150"> 614-321-7856</span>
						</div>
					</div>
				</div>
				<ul className="flex  justify-center items-center gap-y-4 gap-x-16 py-6 relative z-[1000px]">
					<li className="services text-dark3 relative cursor-pointer hover:text-primary">
						<div>SERVICES</div>

						<ul className=" services-sub absolute top-6 bg-white shadow-lg pt-8 pb-[5px] z-10 w-[300px] rounded-md">
							<li className="womenhealth text-dark3 px-5 relative pb-3 flex items-center justify-between cursor-pointer border-b-[1px] mb-2 hover:text-primary">
								Women's Health
								<img src={arrow} alt=" arrow" />
								<ul className="womenhealth-sub absolute -top-6  left-[100%] bg-white pt-8 pb-[5px] z-10 w-[300px]">
									<li className="text-dark3 cursor-pointer  mb-2 hover:text-primary">
										<Link
											to="/womens-health"
											className="px-5 pb-3 flex items-center justify-between"
										>
											Women's Health
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  mb-2  hover:text-primary">
										<Link className="px-5 pb-3 flex items-center justify-between " to="#">
											Annual Visits
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>

									<li className="text-dark3  cursor-pointer mb-2  hover:text-primary">
										<Link className="px-5 pb-3 flex items-center justify-between " to="#">
											Contraception Management
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  hover:text-primary">
										<Link
											className="px-5 pb-3 flex items-center justify-between "
											to="/mental-weight-loss"
										>
											Bioidentic Hormone
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
								</ul>
							</li>
							<li className="aesthetic text-dark3   px-5 pb-3   cursor-pointer flex items-center justify-between  border-b-[1px] mb-2  hover:text-primary">
								<Link to="/aesthetics">Aesthetics</Link>

								<img src={arrow} alt=" arrow" />
								<ul className="aesthetic-sub absolute top-0 left-[100%] bg-white pt-8 pb-[5px] z-10 w-[200px]">
									<li className="body text-dark3 px-5 pb-2 flex items-center justify-between cursor-pointer  mb-2 hover:text-primary">
										Body
										<ul className="body-sub absolute top-0 left-[100%] bg-white pt-8 pb-[5px] z-10 w-[200px]">
											<li className="text-dark3 px-5 pb-2 flex items-center justify-between cursor-pointer  mb-2 hover:text-primary">
												Body Sculpting
												<ul className="body-sculpt absolute top-0 left-[100%] bg-white pt-8 pb-[5px] z-10 w-[250px]">
													<li className="text-dark3 px-5 pb-2 flex items-center justify-between cursor-pointer  mb-2 hover:text-primary">
														<Link to="/accent-prime">
															Accent Prime Ultrasound & Radiofrequuency
														</Link>
													</li>
													<li className="text-dark3 px-5 pb-2 flex items-center justify-between cursor-pointer  mb-2 hover:text-primary">
														<Link to="/accent-prime-contouring">
															Accent Prime Face Body Contouring
														</Link>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li className="face text-dark3 px-5 pb-2 flex items-center justify-between  cursor-pointer  mb-2  hover:text-primary">
										Face and Skin
										<ul className="face-sub absolute top-0 left-[100%] bg-white pt-8 pb-[5px] z-10 w-[200px]">
											<li className="text-dark3 px-5 pb-2 flex items-center justify-between cursor-pointer  mb-2 hover:text-primary">
												Face Contouring
											</li>
											<li className="filler text-dark3 px-5 pb-2 flex items-center justify-between cursor-pointer  mb-2 hover:text-primary">
												Fillers
												<ul className="filler-sub body-sculpt absolute top-0 left-[100%] bg-white pt-8 pb-[5px] z-10 w-[200px]">
													<li className="text-dark3 px-5 pb-2 flex items-center justify-between cursor-pointer  mb-2 hover:text-primary">
														<Link to="/lip-filler">Lip Fillers</Link>
													</li>
													<li className="text-dark3 px-5 pb-2 flex items-center justify-between cursor-pointer  mb-2 hover:text-primary">
														<Link to="/dermal-filler">Dermal Fillers</Link>
													</li>
												</ul>
											</li>
											<li className="text-dark3 px-5 pb-2 flex items-center justify-between cursor-pointer  mb-2 hover:text-primary">
												Wrinkle Relaxers
											</li>
										</ul>
									</li>
								</ul>
							</li>

							<li className="mental-health text-dark3   px-5 pb-3   cursor-pointer flex items-center justify-between  border-b-[1px] mb-2  hover:text-primary">
								<Link to="/mental-health">Mental Health</Link>
								<img src={arrow} alt=" arrow" />
								<ul className="mental-health-sub absolute top-0 left-[100%] bg-white pt-8 pb-[5px] z-10 w-[350px] h-auto">
									<li className="text-dark3 cursor-pointer  mb-2 hover:text-primary">
										<Link
											className="px-5 pb-2 flex items-center justify-between "
											to="/pyschatric-medication-management"
										>
											Psychiatric Medication Management
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  mb-2  hover:text-primary">
										<Link className="px-5 pb-2 flex items-center justify-between " to="#">
											Telepsychiatry
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  mb-2  hover:text-primary">
										<Link className="px-5 pb-2 flex items-center justify-between " to="#">
											Genetic Testing
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  mb-2  hover:text-primary">
										<Link className="px-5 pb-2 flex items-center justify-between " to="#">
											ADHD Testing
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  mb-2  hover:text-primary">
										<Link className="px-5 pb-2 flex items-center justify-between " to="#">
											Anxiety and Depression
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  pb-5  hover:text-primary">
										<Link className="px-5 pb-2 flex items-center justify-between " to="#">
											Psychotherapy
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
								</ul>
							</li>
							<li className="weight-loss text-dark3   px-5 pb-3   cursor-pointer flex items-center justify-between  border-b-[1px] mb-2  hover:text-primary">
								<Link to="/medical-weight-loss">Medical Weight Loss</Link>
							</li>
							<li className="integrative-medicine text-dark3 px-5 pb-3 cursor-pointer flex items-center justify-between hover:text-primary z-50">
								Integrative Medicine
								<img src={arrow} alt=" arrow" />
								<ul className="integrative-medicine-sub absolute top-0 left-[100%] bg-white pt-8 pb-[5px] z-10 w-[350px]">
									<li className="text-dark3 cursor-pointer  mb-2 hover:text-primary">
										<Link className="px-5 pb-2 flex items-center justify-between " to="#">
											What is Integrative Medicine
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  mb-2  hover:text-primary">
										<Link className="px-5 pb-2 flex items-center justify-between " to="#">
											Bioidentical Hormone Replacement
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  mb-2  hover:text-primary">
										<Link className="px-5 pb-2 flex items-center justify-between " to="#">
											Preimenopausal Treatments
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
									<li className="text-dark3  cursor-pointer  mb-2  hover:text-primary">
										<Link className="px-5 pb-2 flex items-center justify-between " to="#">
											TRT Replacement & Hormone Therapy for Men
											{/* <img src={arrow} alt=" arrow" /> */}
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="text-dark3 cursor-pointer hover:text-primary">ABOUT</li>
					<li className="text-dark3 cursor-pointer hover:text-primary">REVIEWS</li>
					<li className="services text-dark3 relative cursor-pointer hover:text-primary">
						<div>PROVIDERS</div>

						<ul className="services-sub absolute top-6 bg-white shadow-lg pt-8 pb-[5px] z-10 w-[350px] rounded-md">
							<li className="womenhealth text-dark3 px-5 relative pb-3 flex items-center justify-between cursor-pointer border-b-[1px] mb-2 hover:text-primary">
								<Link to="/dr-ken">BOOK WITH KENNETH NWOGU</Link>
							</li>
							<li className="womenhealth text-dark3 px-5 relative pb-3 flex items-center justify-between cursor-pointer mb-2 hover:text-primary">
								<Link to="/dr-loliya">BOOK WITH DR LOLIYA IDONIBOY</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
}
