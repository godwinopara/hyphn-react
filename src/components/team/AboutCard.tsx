import user from "../../images/user.png";

export default function AboutCard() {
	return (
		<div className="relative px-6 md:px-20 py-32 rounded-xl bg-gray1 flex flex-col items-center justify-center text-center mb-44 lg:mb-0 last:mb-0">
			<img src={user} alt="" className="absolute -top-24 h-[192px] w-[192px]" />
			<h2 className="font-medium text-2xl md:text-32 leading-10 mb-6">
				Dr. Loliya Idoniboye, DO, MPH 
			</h2>
			<p>
				Dr. Idoniboye is a highly accomplished medical professional, board-certified in Family
				Practice and Obesity Medicine. Her journey in the medical field has been marked by a
				commitment to excellence and a deep passion for promoting women's health and combating
				obesity. She completed her residency at Niagara Falls Memorial in NY, and pursued further
				specialization through a fellowship in women's health at Cornell Weill/Lincoln Hospital NY,
				.
			</p>
		</div>
	);
}
