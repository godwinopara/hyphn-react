import harvest from "../../images/hervest.svg";
import enyata from "../../images/enyata.svg";
import uba from "../../images/uba.svg";
import ehealth from "../../images/ehealth.svg";

export default function Partners() {
	return (
		<section className="max-w-desktop mx-auto flex items-center justify-center px-8 my-10 gap-x-4 md:gap-x-10 md:px-0 xl:gap-x-14">
			<img src={harvest} alt="hervest logo" className="w-20 md:w-[15%]" />
			<img src={enyata} alt="enyata logo" className="w-20 md:w-[20%]" />
			<img src={uba} alt="uba logo" className="w-20 md:w-[15%]" />
			<img src={ehealth} alt="ehealth logo" className="w-20 md:w-[15%]" />
		</section>
	);
}
