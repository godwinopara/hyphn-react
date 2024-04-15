import React from "react";
import fatReduce from "../../images/fatreduce.png";

const data = [
	{
		id: 1,
		desc: "Arms (tighten ‘bingo wings’)",
	},
	{
		id: 2,
		desc: "Buttocks (reduce fatty areas and smooth cellulite)",
	},
	{
		id: 3,
		desc: "Abdomen (reduce excess skin post pregnancy and tighten skin)",
	},
	{
		id: 4,
		desc: "Legs (reduce cellulite on the upper thighs and tone the skin)",
	},
	{
		id: 5,
		desc: "Flanks (reduce ‘back fat’ in the lower back region)",
	},
	{
		id: 6,
		desc: "Chest (improve the appearance of ‘moobs’ in men)",
	},
	{
		id: 9,
		desc: "Face (treat skin conditions and improve skin tone and texture)",
	},
	{
		id: 7,
		desc: "Chin (reduce unsightly fat under the chin and tone the skin)",
	},
	{
		id: 8,
		desc: "Neck (tone neck wrinkles and tighten the skin)",
	},
];

type Props = {};

export const Treatment = (props: Props) => {
	return (
		<section className="bg-secondary2 py-14 ">
			<div className="px-6 xl:px-0 xl:w-5/6 mx-auto xl:flex  items-center gap-10">
				<div className="mb-10 xl:mb-0 flex-1 flex flex-col gap-4 text-dark3">
					<h1 className="text-2xl font-bold xl:text-3xl xl:font-medium">
						Treatment for fat reduction, cellulite, skin tightening& various skin conditions
						include:
					</h1>
					<ul className="list-disc ml-4">
						{data.map((item) => (
							<li key={item.id} className=" text-base">
								{item.desc}
							</li>
						))}
					</ul>
				</div>
				<div className="flex-1 ">
					<img src={fatReduce} alt="" />
				</div>
			</div>
		</section>
	);
};
