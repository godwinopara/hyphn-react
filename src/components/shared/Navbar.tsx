import logo from "../../images/logo-Kachi.png";
import phone from "../../images/phone.svg";
import phoneWhite from "../../images/phone-white.svg";
import searchWhite from "../../images/search-white.svg";
import hamburger from "../../images/hamburger.svg";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/chevron-right.svg";

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

	const navLinks = [
		{
			url: "/womens-health",
			text: "WOMEN'S HEALTH",
			sublink: [
				{ url: "/", text: "Aesthetics" },
				{ url: "/", text: "Mental Health" },
				{ url: "/", text: "Mental Weight Loss" },
			],
		},
		{
			url: "/",
			text: "AESTHETICS",
			sublink: [
				{ url: "/", text: "Body" },
				{ url: "/", text: "Face And Skin" },
			],
		},
		{
			url: "/",
			text: "MENTAL HEALTH",
			sublink: [
				{ url: "/", text: "Psychiatric Medication Management" },
				{ url: "/", text: "Telepsychiatry" },
				{ url: "/", text: "Genetic Testing" },
				{ url: "/", text: "ADHD Testing" },
				{ url: "/", text: "Anxiety and Depression" },
				{ url: "/", text: "Psychotherapy" },
			],
		},
		{
			url: "/",
			text: "MENTAL WEIGHT LOSS",
			sublink: [
				{ url: "/", text: "Physician Supervision" },
				{ url: "/", text: "Prescription Medication" },
				{ url: "/", text: "GLP-1 Medications" },
				{ url: "/", text: "Lipotropic Fat Burners" },
				{ url: "/", text: "B-12 Injections" },
			],
		},
		{ url: "/", text: "PATIENT RESULTS" },
		{
			url: "/",
			text: "OUR CENTER & TEAM",
			sublink: [
				{ url: "/dr-loliya", text: "Dr. Loliya Idoniboye, DO, MPH " },
				{ url: "/", text: "Reword" },
				{ url: "/ken", text: "Kenneth Nwogu, PMHNP-BC " },
			],
		},
		{
			url: "/",
			text: "FOR PATIENTS",
			sublink: [
				{ url: "/", text: "Offers and Promotions" },
				{ url: "/", text: "Financing" },
				{ url: "/", text: "About your Consultation" },
				{ url: "/", text: "Patient Forms and Instructions" },
			],
		},
		{ url: "/", text: "BLOG" },
		{ url: "/", text: "CONTACT" },
	];

	useEffect(() => {}, []);

	return (
		<header>
			{/* =========== Logo Nav ============= */}

			<nav className="lg:flex lg:gap-[122px] py-3.5">
				<div className="flex justify-center xl:justify-end xl:w-[60%]">
					<img src={logo} alt="logo" className="w-[40%]" />
				</div>
				<div className="hidden xl:flex justify-center items-center gap-4">
					<div className="flex items-center gap-5">
						<img src={phone} alt="telephone icon" />
						<span className="text-black4 leading-150"> 614-321-7856</span>
					</div>
				</div>
			</nav>

			{/* ================== Desktop Nav =========== */}

			<nav className="hidden xl:block border-t-[1px] border-dark3">
				<ul className="flex justify-center items-center gap-4 py-5">
					{navLinks.map((link, id) => {
						return (
							<Fragment key={id}>
								<li className="text-dark3 cursor-pointer  relative group">
									<Link className="hover:opacity-50" to={link.url}>
										{link.text}
									</Link>

									{link.sublink && (
										<ul className="absolute pt-6 top-5 left-0 bg-white w-[300px] hidden group-hover:block">
											{link.sublink.map((sub, id) => {
												return (
													<li
														key={id}
														className=" py-3 px-4 border-b flex justify-between items-center"
													>
														<Link className="hover:opacity-50" to={sub.url}>
															{sub.text}
														</Link>
														<img src={arrow} alt="arrow" />
													</li>
												);
											})}
										</ul>
									)}
								</li>
							</Fragment>
						);
					})}
				</ul>
			</nav>

			{/* ========== Mobile Nav ================= */}
			<nav>
				<div className="flex justify-between items-center px-8 py-4 bg-dark4 xl:hidden">
					<div className="flex items-center gap-2">
						<img src={searchWhite} alt="search icon" />
						<div className="flex items-center gap-2">
							<img src={phoneWhite} alt="telephone icon" />
							<span className="text-white leading-150">614-321-7856</span>
						</div>
					</div>
					<button onClick={() => setShowNav(!showNav)} className="cursor-pointer hamburger">
						<img src={hamburger} alt="" />
					</button>
				</div>
				{showNav && (
					<div>
						<ul
							className="p-5 flex flex-col gap-3 mobileNav fixed w-full left-0 top-[128px] bg-white z-10 md:top-44"
							id="mobileNav"
						>
							{navLinks.map((link, id) => {
								return (
									<li key={id} className="text-dark3 cursor-pointer hover:underline">
										<Link to={link.url}>{link.text}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
}
