import React from "react";
import how from "../../images/howitworks.png";

type Props = {};

export const How = (props: Props) => {
	return (
		<section className="">
			<div className="min-h-20 bg-primary xl:h-28 flex items-center justify-center ">
				<h1 className="font-bold text-2xl xl:text-3xl text-white xl:font-medium">
					HOW DOES IT WORK?
				</h1>
			</div>
			<div className="bg-secondary2 py-14">
				<div className="px-6 xl:px-0 xl:w-5/6 mx-auto xl:flex  items-center gap-10">
					<div className="mb-10 xl:mb-0 flex-1 flex flex-col gap-6 text-dark3">
						<span className="text-base">
							{" "}
							Accent Prime utilises controlled radiofrequency energy (RF) and a combined, new type
							of ultrasound technology ( Cold Ultrasound Shear technology ) that selectively targets
							fat cells, while leaving surrounding tissue unharmed.
						</span>
						<span className="text-base">
							{" "}
							The combined ultrasound uses waves which are dispersed homogeneously throughout the
							treatment area. This technology selectively damages fatty cell membranes so that the
							fat components are then released into the bloodstream and are dispersed via the
							lymphatic system. The ultrasound applicator has been developed to offer high speed
							body contouring. Typically, a treatment with the ultrasound device will last around 20
							minutes, depending on the areas required.
						</span>
						<span className="text-base">
							Radiofrequency is used to heat carefully selected levels of the skin. This results in
							new collagen formation, fat cell breakdown and skin remodelling. It provides no
							downtime which means that following the treatment, you can return to your daily
							activities with no discomfort or side-effects.
						</span>
					</div>
					<div className="flex-1 ">
						<img src={how} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};
