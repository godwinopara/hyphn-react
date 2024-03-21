import { Link } from "react-router-dom";
import img from "../../images/img2.png";
import Card from "../ui/Card";

export default function HomeSecondCard() {
	return (
		<section className="min-h-[384px] relative bg-img5 bg-cover bg-top-mid bg-no-repeat px-6">
			<div className="absolute inset-0 bg-dark5 flex items-center justify-center">
				<div className="z-20 px-6">
					<h3 className="text-center mb-5 text-2xl  lg:text-32 leading-10 text-lime">
						Discover What We Can Do For You
					</h3>
					<div className="flex justify-center items-center">
						<Link
							to="/services"
							className="bg-primary-btn py-4 px-8 text-white leading-6 inline-block"
						>
							View Results
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
