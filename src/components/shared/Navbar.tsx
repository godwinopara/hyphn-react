import logo from "../../images/logo-Kachi.png";
import phone from "../../images/phone.svg";
import hamburger from "../../images/hamburger.svg";
import { useState } from "react";

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

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
					<li className="text-dark3 cursor-pointer font-bold">
						<a href="/">HOME</a>
					</li>
					<li className="text-dark3 cursor-pointer hover:underline">
						<a href="/service.html">SERVICES</a>
					</li>
					<li className="text-dark3 cursor-pointer hover:underline">
						<a href="/contact.html">CONTACT US</a>
					</li>
					<li className="text-dark3 cursor-pointer hover:underline">
						<a href="/dr-loliya.html">DR LOLIYA</a>
					</li>
					<li className="text-dark3 cursor-pointer hover:underline">
						<a href="/dr-ken.html">DR KEN</a>
					</li>
				</ul>
			</nav>

			{/* ========== Mobile Nav ================= */}
			<nav>
				<div className="flex justify-between items-center px-8 py-4 bg-dark4 lg:hidden">
					<div className="flex items-center gap-2">
						<img src="assets/search-white.svg" alt="search icon" />
						<div className="flex items-center gap-2">
							<img src="assets/phone-white.svg" alt="telephone icon" />
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
							<li className="text-dark3 cursor-pointer font-bold">
								<a href="/">HOME</a>
							</li>
							<li className="text-dark3 cursor-pointer hover:underline">
								<a href="/service.html">SERVICES</a>
							</li>
							<li className="text-dark3 cursor-pointer hover:underline">
								<a href="/contact.html">CONTACT US</a>
							</li>
							<li className="text-dark3 cursor-pointer hover:underline">
								<a href="/dr-loliya.html">DR LOLIYA</a>
							</li>
							<li className="text-dark3 cursor-pointer font-bold hover:underline">
								<a href="/dr-ken.html">DR KEN</a>
							</li>
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
}
