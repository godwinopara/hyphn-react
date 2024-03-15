import accu from "../../images/accu.svg";
import accent from "../../images/accent.svg";
import inbody from "../../images/inbody.svg";

export default function Partners() {
	return (
		<section className="max-w-3xl mx-auto grid grid-cols-3 items-center justify-center px-6 my-20 gap-10 md:gap-x-10 xl:px-0 xl:gap-x-20">
			<img src={inbody} alt="hervest logo" />
			<img src={accent} alt="enyata logo" />
			<img src={accu} alt="uba logo" />
		</section>
	);
}
