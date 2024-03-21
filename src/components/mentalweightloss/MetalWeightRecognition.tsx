import Recognition from "../shared/Recognition";

export default function MentalWeightRecognition() {
	return (
		<section className="bg-secondary2 py-20">
			<div className="max-w-desktop mx-auto px-6 grid lg:grid-cols-2 gap-6">
				<Recognition recognition="Physician Supervision">
					<p>
						No two bodies are the same; so no two weight loss programs should be the same either. At
						Options Medical Weight Loss, our board-certified obesity doctors design custom-tailored
						programs for each individual that walks through our doors. Using the patient’s unique
						biomarkers and medical history…
					</p>
				</Recognition>
				<Recognition recognition="Prescription medication">
					<p>
						Options Medical Weight loss is proud to prescribe a variety of FDA approved medications
						for appetite suppression. With 2 out of 3 adults overweight and 1 out of 3 adults obese,
						the need for weight loss intervention is great. FDA approved medication for weight loss
						works by suppressing appetite…
					</p>
				</Recognition>
				<Recognition recognition="GLP-1 Medications">
					<p>
						GLP-1 medications (glucagon-like peptide 1s) are one of the most effective drug classes
						for long-term weight loss on the market. Research has shown that patients using GLP-1s
						can lose between 15% and 20% of their bodyweight. 
					</p>
				</Recognition>
				<Recognition recognition="Lipotropic Fat Burners">
					<p>
						Do you need something to help burn fat faster along with your well-balanced diet and
						exercise? Try our Lipotropic fat burning injections at Options Medical Weight loss.
						Lipotropic (lipo) shots are fat burning injections of vitamins and amino acids that
						encourage the body to burn fat. These compounds help accelerate…
					</p>
				</Recognition>
				<Recognition recognition="B-12 Injections">
					<p>
						B12 (Cobalamin), is one of the eight B vitamins that is needed to ensure the proper
						functioning and health of nerve tissue, brain function and the production of red blood
						cells. (Basically, an energy booster with vitamins.)…
					</p>
				</Recognition>
				<Recognition recognition="Psychotherapy">
					<p>
						No two bodies are the same; so no two weight loss programs should be the same either. At
						Options Medical Weight Loss, our board-certified obesity doctors design custom-tailored
						programs for each individual that walks through our doors. Using the patient’s unique
						biomarkers and medical history…
					</p>
				</Recognition>
			</div>
		</section>
	);
}
