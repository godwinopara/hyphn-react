import ehealth from "../../images/ehealth.svg";
import accu from "../../images/accu.svg";
import accent from "../../images/accent.svg";
import inbody from "../../images/inbody.svg";

export default function Partners() {
	return (
		<section className="max-w-desktop mx-auto flex items-center justify-center px-8 my-8 gap-x-4 md:gap-x-10 md:px-0 xl:gap-x-14">
			<img src={inbody} alt="hervest logo" className="w-20 md:w-[12%]" />
			<img src={accent} alt="enyata logo" className="w-20 md:w-[12%]" />
			<img src={accu} alt="uba logo" className="w-20 md:w-[18%]" />
			<img src={ehealth} alt="ehealth logo" className="w-20 md:w-[12%]" />
		</section>
	);
}
