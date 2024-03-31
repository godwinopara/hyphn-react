// import phoneWhite from "../../images/phone-white.svg";
// import searchWhite from "../../images/search-white.svg";
// import hamburger from "../../images/hamburger.svg";
// import { Fragment, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import arrow from "../../images/chevron-right.svg";

import { Link } from "react-router-dom";
import logo from "../../images/logo-Kachi.svg";
import phone from "../../images/phone.svg";
import arrow from "../../images/chevron-right.svg";
import { useState } from "react";

export default function Navbar() {
	const [toggleServicesNav, setToggleServicesNav] = useState(false);
	const [toggleWomenHealth, setToggleWomenHealth] = useState(false);

	return (
		<header>
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
				<ul className="flex  justify-center items-center gap-4 py-6">
					<li className="text-dark3 relative cursor-pointer hover:text-primary">
						<div onClick={() => setToggleServicesNav(!toggleServicesNav)}>SERVICES</div>

						{toggleServicesNav && (
							<ul className="absolute top-10 bg-white shadow-lg pt-8 pb-[5px] z-10 w-[300px] rounded-md">
								<li
									onClick={() => setToggleWomenHealth(!toggleWomenHealth)}
									className="text-dark3 px-5 relative pb-3 flex items-center justify-between cursor-pointer border-b-[1px] mb-2 hover:text-primary"
								>
									Women's Health
									<img src={arrow} alt=" arrow" />
									{toggleWomenHealth && (
										<ul className="absolute -top-6  left-[100%] bg-white pt-8 pb-[5px] z-10 w-[300px]">
											<li className="text-dark3 cursor-pointer  mb-2 hover:text-primary">
												<Link
													className="px-5 pb-3 flex items-center justify-between "
													to="/womens-health"
												>
													Women's Health
													<img src={arrow} alt=" arrow" />
												</Link>
											</li>
											<li className="text-dark3  cursor-pointer  mb-2  hover:text-primary">
												<Link
													className="px-5 pb-3 flex items-center justify-between "
													to="/aesthetics"
												>
													Annual Visits
													<img src={arrow} alt=" arrow" />
												</Link>
											</li>

											<li className="text-dark3  cursor-pointer mb-2  hover:text-primary">
												<Link
													className="px-5 pb-3 flex items-center justify-between "
													to="/mental-health"
												>
													Contraception Management
													<img src={arrow} alt=" arrow" />
												</Link>
											</li>
											<li className="text-dark3  cursor-pointer  hover:text-primary">
												<Link
													className="px-5 pb-3 flex items-center justify-between "
													to="/mental-weight-loss"
												>
													Bioidentic Hormone
													<img src={arrow} alt=" arrow" />
												</Link>
											</li>
										</ul>
									)}
								</li>
								<li className="text-dark3  cursor-pointer  border-b-[1px] mb-2  hover:text-primary">
									<Link className="px-5 pb-3 flex items-center justify-between " to="/aesthetics">
										Aesthetics
										<img src={arrow} alt=" arrow" />
									</Link>
								</li>

								<li className="text-dark3  cursor-pointer  border-b-[1px] mb-2  hover:text-primary">
									<Link
										className="px-5 pb-3 flex items-center justify-between "
										to="/mental-health"
									>
										Mental Health
										<img src={arrow} alt=" arrow" />
									</Link>
								</li>
								<li className="text-dark3  cursor-pointer  border-b-[1px] mb-2  hover:text-primary">
									<Link
										className="px-5 pb-3 flex items-center justify-between "
										to="/mental-weight-loss"
									>
										Mental Weight Loss
										<img src={arrow} alt=" arrow" />
									</Link>
								</li>
								<li className="text-dark3  cursor-pointer hover:text-primary">
									<Link className="px-5 pb-3 flex items-center justify-between " to="#">
										Integrative Medicine
										<img src={arrow} alt=" arrow" />
									</Link>
								</li>
							</ul>
						)}
					</li>
					<li className="text-dark3 cursor-pointer hover:text-primary">ABOUT</li>
					<li className="text-dark3 cursor-pointer hover:text-primary">REVIEWS</li>
					<li className="text-dark3 cursor-pointer hover:text-primary">PROVIDERS</li>
					<li className="text-dark3 cursor-pointer hover:text-primary">
						<Link to="/dr-ken">BOOK WITH KENNETH NWOGU</Link>
					</li>
					<li className="text-dark3 cursor-pointer hover:text-primary">
						<Link to="/dr-loliya">BOOK WITH DR LOLIYA IDONIBOYE</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
