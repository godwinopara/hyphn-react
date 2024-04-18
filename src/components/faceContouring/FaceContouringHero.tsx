import contourMobile from "../../images/contouring-mobile.png";
import contourDesktop from "../../images/contouring-desktop.png";
import CustomButton from "../ui/CustomButton";

export default function FaceContouringHero() {
	return (
		<section className="relative">
			<div>
				<img src={contourMobile} alt="" className="xl:hidden" />
				<img src={contourDesktop} alt="" className="hidden xl:block" />
			</div>
			<div className="absolute top-6 left-8 max-w-desktop mx-auto text-[#FFF5E9] xl:left-[52%] xl:top-[30%]">
				<h1 className="text-2xl leading-8 mb-3 xl:hidden">Contour Attractive, Sleek Curves</h1>
				<h1 className="text-[4rem] font-light leading-[64px] mb-5">Face Contouring</h1>
				<p className="text-sm xl:text-xl xl:font-medium xl:mb-8">
					Tightening skin, improving laxity, wrinkles and rhytids.
				</p>
				<div className="hidden xl:block">
					<CustomButton>Top Products</CustomButton>
				</div>
			</div>
			<div className="absolute bottom-10 left-8 xl:hidden">
				<CustomButton>Book Now</CustomButton>
			</div>
		</section>
	);
}
