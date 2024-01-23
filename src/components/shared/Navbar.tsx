import logo from "../../images/logo-Kachi.png";
import phone from "../../images/phone.svg";
import phoneWhite from "../../images/phone-white.svg";
import searchWhite from "../../images/search-white.svg";
import hamburger from "../../images/hamburger.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

	const navLinks = [
		{ url: "#", text: "WOMEN'S HEALTH" },
		{ url: "#", text: "AESTHETICS" },
		{ url: "#", text: "MENTAL HEALTH" },
		{ url: "#", text: "MENTAL WEIGHT LOSS" },
		{ url: "#", text: "PATIENT RESULTS" },
		{ url: "#", text: "OUR CENTER & TEAM" },
		{ url: "#", text: "FOR PATIENTS" },
		{ url: "#", text: "BLOG" },
		{ url: "#", text: "CONTACT" },
	];

	return (
		<header>
			{/* =========== Logo Nav ============= */}

			<nav className="xl:flex xl:gap-[122px] py-3.5">
				<div className="flex justify-center xl:justify-end xl:w-[60%]">
					<img src={logo} alt="logo" className="w-[40%]" />
				</div>
				<div className="hidden lg:flex justify-center items-center gap-4">
					<div className="flex items-center gap-5">
						<img src={phone} alt="telephone icon" />
						<span className="text-black4 leading-150"> 614-321-7856</span>
					</div>
				</div>
			</nav>

			{/* ================== Desktop Nav =========== */}

			<nav className="hidden lg:block border-t-[1px] border-dark3">
				<ul className="flex justify-center items-center gap-4 py-5">
					{navLinks.map((link) => {
						return (
							<li className="text-dark3 cursor-pointer hover:underline">
								<Link to={link.url}>{link.text}</Link>
							</li>
						);
					})}
				</ul>
			</nav>

			{/* ========== Mobile Nav ================= */}
			<nav>
				<div className="flex justify-between items-center px-8 py-4 bg-dark4 lg:hidden">
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
							{navLinks.map((link) => {
								return (
									<li className="text-dark3 cursor-pointer hover:underline">
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
