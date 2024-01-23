import img1 from "../../images/img1.png";

export default function Card1() {
	return (
		<section className="max-w-desktop mx-auto px-8 xl:px-0 lg:flex lg:items-center lg:justify-center my-12">
			<div className="py-24 md:flex">
				<img src={img1} alt="" className="mx-auto" />
			</div>

			<div className="rounded-md flex items-center lg:shadow-custom lg:px-10 lg:w-1/2 lg:py-14">
				<div>
					<h2 className="text-26 lg:text-32 text-center mb-2 font-medium leading-10">
						Integrative Medicine In Columbus Ohio
					</h2>
					<hr />
					<h3 className="my-4 leading-8 font-medium">Find out what makes us Integrative.</h3>
					<p>
						Through experience, we've discovered that one's outward appearance often mirrors one's
						inner well-being. Dr. Idoniboye, board-certified in obesity medicine, recognizes the
						impact of unhealthy weight on overall health, along with the significance of balanced
						hormones and nurtured mental health. Addressing not just diagnoses but the root causes
						of conditions, Kenneth Nwogu, a board-certified psychiatric nurse, empowers you to
						overcome challenges. His practical and caring approach emphasizes that you are part of a
						compassionate team genuinely interested in your wellness. We consistently affirm, "You
						are Enough," recognizing that each person harbors the internal tools needed to become
						their best selves. Let us guide you towards this realization and support your journey to
						optimal well-being.
					</p>
				</div>
			</div>
		</section>
	);
}
