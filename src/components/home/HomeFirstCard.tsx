// import Card from "../ui/Card";
// import img from "../../images/img1.png";
import building from "../../images/building.png";
import { Link } from "react-router-dom";

export default function HomeFirstCard() {
	return (
		<section className="px-6 lg:flex lg:gap-x-8 items-center max-w-desktop mx-auto py-20">
			<div className="pb-8 lg:w-[45%]  border-b-4 lg:border-b-0 lg:border-e-4 border-black">
				<img src={building} alt="" className="mx-auto" />
			</div>

			<div className="lg:w-[55%] lg:ml-5 pt-8">
				<h2 className="font-medium text-xl leading-8 mb-1">Welcome To</h2>
				<h3 className="text-2xl  lg:text-3xl leading-10 font-medium mb-1">
					Integrative Wellness in Columbus Ohio
				</h3>
				<p className="mb-8 lg:mb-3">
					Welcome to Integrative Wellness, where our team specializes in behavioral health services,
					weight loss programs, health & wellness, and aesthetic medicine. We are committed to
					supporting you through your healthcare journey with treatments that are tailored to your
					specific needs. Utilizing advanced methods and state-of-the-art Alma technology, our team
					offers lipotropic injections, behavioral medication management, cellulite reduction, and
					more. We strive to help you heal from the inside out. Schedule your appointment at our
					Columbus, OH office today.
				</p>
				<Link to="/about" className="bg-dark3 py-4 px-8 text-white leading-6 inline-block">
					About us
				</Link>
			</div>
		</section>
	);
}
