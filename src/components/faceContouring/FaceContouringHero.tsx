import contourMobile from "../../images/contouring-mobile.png";
import CustomButton from "../ui/CustomButton";

export default function FaceContouringHero() {
	return (
		<section className="relative">
			<img src={contourMobile} alt="" />
			<div className="absolute top-6 left-8 text-[#FFF5E9]">
				<h1 className="text-2xl leading-8 mb-3">Contour Attractive, Sleek Curves</h1>
				<p className="text-sm">Tightening skin, improving laxity, wrinkles and rhytids.</p>
			</div>
			<div className="absolute bottom-10 left-8">
				<CustomButton>Book Now</CustomButton>
			</div>
		</section>
	);
}
