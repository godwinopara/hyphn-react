import Recognition from "../shared/Recognition";

export default function MentalWeightRecognition() {
	return (
		<section className="max-w-desktop mx-auto px-6 grid lg:grid-cols-2 gap-6 my-20">
			<Recognition recognition="Physician Supervision" />
			<Recognition recognition="Prescription medication" />
			<Recognition recognition="GLP-1 Medications" />
			<Recognition recognition="Lipotropic Fat Burners" />
			<Recognition recognition="B-12 Injections" />
			<Recognition recognition="Psychotherapy" />
		</section>
	);
}
