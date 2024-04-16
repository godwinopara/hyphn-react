import React from "react";

type Props = {};

export const PyschaQuestion = (props: Props) => {
	return (
		<section className="bg-white py-10 xl:py-24">
			<div className="w-5/6 mx-auto flex flex-col gap-4 text-dark3">
				<h2 className="text-xl font-bold xl:text-3xl xl:font-medium text-center ">
					What is Psychiatric Medication Management?
				</h2>
				<p className="text-base text-left ">
					Psychiatric Medication Management is the process of working with a provider to ensure that
					your psychiatric medications are effective and safe. This may include changing doses,
					switching medications, or adding new drugs to help patients achieve the optimal outcomes
					and reduce symptoms associated with mental health conditions such as anxiety, depression
					and others.
				</p>
				<p className="text-base text-left ">
					We understand our patients’ health and safety concerns and provide personalized treatment
					plans.
				</p>
			</div>
		</section>
	);
};
