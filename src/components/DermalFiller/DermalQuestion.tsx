import React from "react";

type Props = {};

export const DermalQuestion = (props: Props) => {
	return (
		<section className="bg-white py-14">
			<div className="w-5/6 mx-auto flex flex-col gap-4 text-dark3 my-7">
				<h2 className="text-xl font-bold xl:text-3xl xl:font-medium text-center ">
					How Are Dermal Fillers Administered?
				</h2>
				<p className="text-base text-left ">
					Dermal fillers are typically administered using tiny needles, contributing to a relatively
					comfortable and minimally invasive experience for patients. The needles used during the
					procedure are fine-gauge and carefully selected to ensure precision in injecting the
					filler into targeted areas of the face. The small size of these needles helps to minimize
					discomfort and reduce the risk of bruising or swelling at the injection sites.
				</p>
				<p className="text-base text-left ">
					Before the procedure, we apply a topical numbing cream to the treatment areas to further
					enhance client comfort. This numbing agent helps alleviate any potential sensation during
					the injection process. The use of tiny needles and numbing agents contributes to a more
					tolerable experience, making dermal filler treatments accessible to individuals with
					varying pain thresholds.
				</p>
				<p className="text-base text-left ">
					Additionally, many dermal fillers are formulated with lidocaine or other local
					anesthetics, which are integrated into the filler solution. This means that as the filler
					is being injected, the anesthetic component helps to further minimize discomfort. Clients
					often describe the sensation as a slight pinch or pressure, and any temporary discomfort
					is typically brief.
				</p>
			</div>
		</section>
	);
};
