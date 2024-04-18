import CustomButton from "../ui/CustomButton";
import heroImg from "../../images/trt-img.png";

export default function TRTHero() {
	return (
		<header className="relative">
			<img src={heroImg} alt="" />
			<div className="absolute top-[40%] left-[20%] xl:top-[60%] xl:left-[40%]">
				<CustomButton>Schedule a Discover Call</CustomButton>
			</div>
		</header>
	);
}
