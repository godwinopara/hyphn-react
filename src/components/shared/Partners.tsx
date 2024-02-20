import ehealth from "../../images/ehealth.svg";
import accu from "../../images/accu.png";
import accent from "../../images/accent.png";
import inbody from "../../images/inbody.png";

export default function Partners() {
	return (
		<section className="max-w-desktop mx-auto grid grid-cols-2 md:grid-cols-4 items-center justify-center px-6 my-20 gap-10 md:gap-x-10 xl:px-0 xl:gap-x-20">
			<img src={inbody} alt="hervest logo" className="max-w-[80%]" />
			<img src={accent} alt="enyata logo" className="max-w-[80%]" />
			<img src={accu} alt="uba logo" className="max-w-[80%]" />
			<img src={ehealth} alt="ehealth logo" className="max-w-[80%]" />
		</section>
	);
}
