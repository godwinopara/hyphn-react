import diagnosisImg from "../../images/diagnosis-img.png";

export default function Diagnosis() {
	return (
		<section className="px-6 py-20 xl:px-0 xl:grid xl:grid-cols-2 xl:items-center xl:gap-x-20 max-w-desktop mx-auto">
			<div className="mb-8">
				<h2 className="font-bold mb-5 text-xl xl:font-medium xl:text-32 xl:leading-10">
					Diagnosing Low Testosterone
				</h2>
				<div>
					<p>
						A low testosterone consultation involves a discussion with one of our health
						professionals regarding the signs and symptoms you are currently experiencing. Your
						complete medical history will be evaluated, and questions will be asked about various
						lifestyle factors. You will also be asked to take lab tests to measure your testosterone
						levels.
					</p>
					<br />
					<p>
						After the cause of your low testosterone has been determined, your healthcare
						professional will recommend a course of treatment. In many cases, the best treatment
						option will be one of our three testosterone replacement therapies.
					</p>
				</div>
			</div>
			<div>
				<img src={diagnosisImg} alt="" />
			</div>
		</section>
	);
}
