// import phoneWhite from "../../images/phone-white.svg";
// import searchWhite from "../../images/search-white.svg";
// import hamburger from "../../images/hamburger.svg";
// import { Fragment, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import arrow from "../../images/chevron-right.svg";

// export default function Navbar() {
// 	const [showNav, setShowNav] = useState(false);

// 	const navLinks = [
// 		{
// 			url: "#",
// 			text: "SERVICES",
// 			sublink: [
// 				{ url: "/womens-health", text: "Women's Health" },
// 				{ url: "/aesthetics", text: "Aesthetics" },
// 				{ url: "/mental-health", text: "Mental Health" },
// 				{ url: "/mental-weight-loss", text: "Mental Weight Loss" },
// 			],
// 		},
// 		{
// 			url: "/aesthetics",
// 			text: "ABOUT",
// 			sublink: [
// 				// { url: "/", text: "Body" },
// 				// { url: "/", text: "Face And Skin" },
// 			],
// 		},
// 		{
// 			url: "/mental-health",
// 			text: "REVIEWS",
// 			sublink: [
// 				// { url: "/", text: "Psychiatric Medication Management" },
// 				// { url: "/", text: "Telepsychiatry" },
// 				// { url: "/", text: "Genetic Testing" },
// 				// { url: "/", text: "ADHD Testing" },
// 				// { url: "/", text: "Anxiety and Depression" },
// 				// { url: "/", text: "Psychotherapy" },
// 			],
// 		},
// 		{
// 			url: "#",
// 			text: "PROVIDERS",
// 			sublink: [
// 				// { url: "/", text: "Physician Supervision" },
// 				// { url: "/", text: "Prescription Medication" },
// 				// { url: "/", text: "GLP-1 Medications" },
// 				// { url: "/", text: "Lipotropic Fat Burners" },
// 				// { url: "/", text: "B-12 Injections" },
// 			],
// 		},
// 		// { url: "/patients", text: "PATIENT RESULTS" },
// 		// {
// 		// 	url: "/our-team",
// 		// 	text: "OUR CENTER & TEAM",
// 		// 	// sublink: [
// 		// 	// 	{ url: "/dr-loliya", text: "Dr. Loliya Idoniboye, DO, MPH " },
// 		// 	// 	{ url: "/", text: "Reword" },
// 		// 	// 	{ url: "/ken", text: "Kenneth Nwogu, PMHNP-BC " },
// 		// 	// ],
// 		// },
// 		{ url: "/dr-ken", text: "DR. KENNETH NWOGU" },
// 		{ url: "/dr-loliya", text: "BOOK WITH DR. LOLIYA IDONIBOYE" },

// 		// {
// 		// 	url: "/patients",
// 		// 	text: "FOR PATIENTS",
// 		// 	sublink: [
// 		// 		{ url: "/", text: "Offers and Promotions" },
// 		// 		{ url: "/", text: "Financing" },
// 		// 		{ url: "/", text: "About your Consultation" },
// 		// 		{ url: "/", text: "Patient Forms and Instructions" },
// 		// 	],
// 		// },
// 		// { url: "/", text: "BLOG" },
// 		// { url: "/", text: "CONTACT" },
// 	];

// 	useEffect(() => {}, []);

// 	return (
// 		<header>
// 			{/* =========== Logo Nav ============= */}

// 			<nav className="lg:flex lg:gap-[122px] py-3.5 ">
// 				<Link to="/" className="flex justify-center xl:justify-end xl:w-[60%]">
// 					<img src={logo} alt="logo" className="w-[40%]" />
// 				</Link>
// 				<div className="hidden xl:flex justify-center items-center gap-4">
// 					<div className="flex items-center gap-5">
// 						<img src={phone} alt="telephone icon" />
// 						<span className="text-black4 leading-150"> 614-321-7856</span>
// 					</div>
// 				</div>
// 			</nav>

// 			{/* ================== Desktop Nav =========== */}

// 			<nav className="hidden xl:block border-t-[1px] border-dark3">
// 				<ul className="flex justify-center items-center gap-4 py-5">
// 					{navLinks.map((link, id) => {
// 						return (
// 							<Fragment key={id}>
// 								<li className="text-dark3 cursor-pointer  relative group">
// 									<Link className="hover:text-secondary" to={link.url}>
// 										{link.text}
// 									</Link>

// 									{link?.sublink && (
// 										<ul className="absolute shadow-md pt-6 top-5 left-0 bg-white w-[300px] hidden group-hover:block">
// 											{link.sublink.map((sub, id) => {
// 												return (
// 													<li
// 														key={id}
// 														className=" py-3 px-4 border-b flex justify-between items-center"
// 													>
// 														<Link className="hover:text-secondary" to={sub?.url}>
// 															{sub?.text}
// 														</Link>
// 														<img src={arrow} alt="arrow" />
// 													</li>
// 												);
// 											})}
// 										</ul>
// 									)}
// 								</li>
// 							</Fragment>
// 						);
// 					})}
// 				</ul>
// 			</nav>

// 			{/* ========== Mobile Nav ================= */}
// 			<nav className="bg-white">
// 				<div className="flex justify-between items-center px-8 py-4 bg-primary xl:hidden">
// 					<div className="flex items-center gap-2">
// 						<img src={searchWhite} alt="search icon" />
// 						<div className="flex items-center gap-2">
// 							<img src={phoneWhite} alt="telephone icon" />
// 							<span className="text-white leading-150">614-321-7856</span>
// 						</div>
// 					</div>
// 					<button onClick={() => setShowNav(!showNav)} className="cursor-pointer hamburger">
// 						<img src={hamburger} alt="" />
// 					</button>
// 				</div>
// 				{showNav && (
// 					<div>
// 						<ul
// 							className="p-5 flex flex-col gap-3 mobileNav fixed w-full left-0 top-[128px] bg-white z-10 md:top-44"
// 							id="mobileNav"
// 						>
// 							{navLinks.map((link, id) => {
// 								return (
// 									<li key={id} className="text-dark3 cursor-pointer hover:underline">
// 										<Link to={link.url}>{link.text}</Link>
// 									</li>
// 								);
// 							})}
// 						</ul>
// 					</div>
// 				)}
// 			</nav>
// 		</header>
// 	);
// }

import { Link } from "react-router-dom";
import logo from "../../images/logo-Kachi.svg";
import phone from "../../images/phone.svg";
import arrow from "../../images/chevron-right.svg";
import { useState } from "react";

export default function Navbar() {
	const [toggleServicesNav, setToggleServicesNav] = useState(false);

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
					<li
						className="text-dark3 relative cursor-pointer hover:text-primary"
						onClick={() => setToggleServicesNav(!toggleServicesNav)}
					>
						SERVICES
						{toggleServicesNav && (
							<ul className="absolute top-12 bg-white shadow-lg pt-8 pb-[5px] z-10 w-[300px] rounded-md">
								<li className="text-dark3 cursor-pointer border-b-[1px] mb-2 hover:text-primary">
									<Link
										className="px-5 pb-3 flex items-center justify-between "
										to="/womens-health"
									>
										Women's Health
										<img src={arrow} alt=" arrow" />
									</Link>
									<ul>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
									</ul>
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
