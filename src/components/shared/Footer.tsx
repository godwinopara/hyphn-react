// import logo from "../../images/logo-Kachi.png";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-primary2 text-white py-10 px-8 xl:px-0">
			<div className="grid xl:grid-cols-2 gap-x-24 max-w-desktop mx-auto">
				<form>
					<h2 className="mb-5">Request Your Consultation Today</h2>

					<div>
						<div className="mb-5">
							<input
								type="text"
								name="firstname"
								placeholder="First Name*"
								className="py-3 pl-5 rounded-lg text-gray w-full"
							/>
						</div>
						<div className="mb-5">
							<input
								type="text"
								name="lastname"
								placeholder="Last Name*"
								className="py-3 pl-5 rounded-lg text-gray w-full"
							/>
						</div>
						<div className="mb-5">
							<input
								type="text"
								name="email"
								placeholder="Email Address*"
								className="py-3 pl-5 rounded-lg w-full text-gray"
							/>
						</div>
						<div className="mb-5">
							<input
								type="text"
								name="phone"
								placeholder="Phone*"
								className="py-3 pl-5 rounded-lg w-full text-gray"
							/>
						</div>
						<select name="appointment" className="mb-5 py-3 pl-5 rounded-lg text-gray w-full">
							<option value="">Have you scheduled an appointment with us before?*</option>
							<option value="Yes">Yes - I am an Existing Patient</option>
							<option value="No">No - I am a New Patient</option>
						</select>
						<div className="mb-5 w-full">
							<p className="text-center mb-5">I'm intrested in...(Required)</p>
							<select name="intrest" className="w-full py-3 pl-5 rounded-lg text-gray">
								<option>Please Select</option>
								<option value="breast-procedures">Breast Procedures</option>
								<option value="face-procedures">Face Procedures</option>
								<option value="body-procedures">Body Procedures</option>
								<option value="sexual-wellness">Sexual Wellness</option>
								<option value="laser-services">Laser Services</option>
								<option value="medspa-services">Laser Services</option>
								<option value="acne-treatment">Acne Treatment</option>
							</select>
						</div>

						<div className="mb-5 text-center">
							<p className="mb-5">
								What you select will give our team an idea of your goals, but it’s okay if you are
								not 100% sure yet.
							</p>
							<p>
								Do You Have Any Questions Or Details About Your Goals That You Would Like Us To Know
								(Required)
							</p>
						</div>
						<textarea
							className="mb-5 w-full p-5 text-gray"
							name="message"
							cols={30}
							rows={10}
							placeholder="Let Us Know Here"
						></textarea>

						<div>
							<button className="bg-primary-btn text-white px-8 py-4" type="submit">
								Submit
							</button>
						</div>
					</div>
				</form>
				<div className="max-w-desktop mx-auto mt-20 xl:mt-0">
					<div className="grid xl:grid-cols-2">
						<div className="mb-10 xl:mb-0">
							<h2 className="mb-3 font-medium text-2xl">Contact Information</h2>
							<ul className="text-lg">
								<li>1243 E Broad Street, Columbus OH 43205</li>
								<li>
									<span className="font-medium">PHONE:</span> 614-321-7856
								</li>
							</ul>

							<div className="flex items-center gap-x-5 my-5">
								<img src={twitter} alt="twitter logo" />
								<img src={instagram} alt="instagram logo" />
								<img src={facebook} alt="facebook logo" />
							</div>
						</div>
						<nav className="mt-8 xl:mt-0">
							<h2 className="mb-3 text-2xl font-medium xl:ml-20">Links</h2>
							<ul className="flex flex-col gap-y-3 xl:ml-20">
								<li className="text-white cursor-pointer hover:underline">
									<Link to="#">WOMEN'S HEALTH</Link>
								</li>
								<li className="text-white cursor-pointer hover:underline">
									<Link to="#">AESTHETICS</Link>
								</li>
								<li className="text-white cursor-pointer hover:underline">
									<Link to="#">MENTAL HEALTH</Link>
								</li>
								<li className="text-white cursor-pointer hover:underline">
									<Link to="#">MENTAL WEIGHT LOSS</Link>
								</li>
								<li className="text-white cursor-pointer hover:underline">
									<Link to="#">PATIENT RESULTS</Link>
								</li>
								<li className="text-white cursor-pointer hover:underline">
									<Link to="#">OUR CENTER & TEAM</Link>
								</li>
								<li className="text-white cursor-pointer hover:underline">
									<Link to="#">FOR PATIENTS</Link>
								</li>
								<li className="text-white cursor-pointer hover:underline">
									<Link to="#">BLOG</Link>
								</li>
								<li className="text-white cursor-pointer hover:underline">
									<Link to="#">CONTACT</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className="text-xl text-center mt-20">&copy;2024 Integrative Wellness</div>
				</div>
			</div>
		</footer>
	);
}
