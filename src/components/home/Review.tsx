import { Link } from "react-router-dom";
import rating from "../../images/rating.svg";

export default function Review() {
	return (
		<section className="bg-dark4 text-lime py-20">
			<div className="max-w-desktop mx-auto text-center">
				<h3 className="mb-5 text-xl">Check Out Our</h3>
				<h2 className="mb-5 text-32 font-medium leading-10">Patient Testimonial</h2>
				<p className="max-w-[947px] mx-auto mb-5">
					Dr ken is a great guy he truly will explain to you everything you want to know. The place
					is really peaceful and amazing. if you looking for a best doctor try to reach Dr ken you
					won’t regret I guarantee you?
				</p>
				<span className="block">M.G.</span>
				<span className="block font-medium mb-5">Google</span>
				<div className="flex gap-x-4 justify-center items-center mb-8">
					<img src={rating} alt="" />
					<span className="leading-6">5 Average Rating</span>
				</div>

				<Link to="/review" className="bg-dark3 py-4 px-8 text-white leading-6 inline-block">
					All Reviews
				</Link>
			</div>
		</section>
	);
}
