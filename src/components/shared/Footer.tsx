import logo from "../../images/logo-Kachi.png";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";

export default function Footer() {
	return (
		<footer className="bg-dark4 text-white py-10 px-8 xl:px-0">
			<div className="max-w-desktop mx-auto text-center">
				<img src={logo} alt="" className="mb-6 lg:mb-0 md:w-[60%] lg:w-[40%] mx-auto" />

				<nav className="hidden lg:block border-t-[1px] border-black">
					<ul className="flex justify-center items-center gap-4 py-10">
						<li className="text-white cursor-pointer hover:underline">
							<a href="/">HOME</a>
						</li>
						<li className="text-white cursor-pointer hover:underline">
							<a href="/appointment-with-loliya.html">DR LOLIYA</a>
						</li>
						<li className="text-white cursor-pointer hover:underline">
							<a href="/appointment-with-ken.html">DR KEN</a>
						</li>
					</ul>
				</nav>

				<div className="mb-8">
					<p className="mb-4">1243 E broad Street, Columbus OH 43205 | (614)-321-7856</p>
					<p>We are Authentic Comfortable and Different</p>
				</div>
				<div className="flex justify-center gap-x-5 mb-5">
					<img src={twitter} alt="twitter logo" />
					<img src={instagram} alt="instagram logo" />
					<img src={facebook} alt="facebook logo" />
				</div>

				<div className="text-lg">&copy;2023 Integrative Wellness</div>
			</div>
		</footer>
	);
}
