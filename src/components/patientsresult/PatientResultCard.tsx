import patientImg from "../../images/patient1.png";
import arrow from "../../images/arrow-right1.svg";

export default function PatientResultCard() {
	return (
		<div className="flex flex-col items-center justify-center text-center bg-gray1 py-10 rounded-xl px-1 mb-10 lg:mb-0">
			<div className="px-10 mb-5">
				<img src={patientImg} alt="" className="w-[192px] h-[256px]" />
			</div>
			<h2 className="font-medium text-xl  lg:text-30 lg:leading-10 mb-3">
				Bioidentical Hormone Replacement
			</h2>
			<img src={arrow} alt="" />
		</div>
	);
}
