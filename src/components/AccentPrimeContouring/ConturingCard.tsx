import React from "react";
import CustomButton from "../ui/CustomButton";
import { ArrowIcon } from "../../icons/AccentPrimeIcons";
const data = [
	{
		id: 1,
		desc: "Abdomen (belly fat)",
	},
	{
		id: 2,
		desc: "Flanks (love handles)",
	},
	{
		id: 3,
		desc: "Thighs",
	},
	{
		id: 4,
		desc: "Buttocks",
	},
	{
		id: 5,
		desc: "Upper Arms",
	},
	{
		id: 6,
		desc: "Chin and neck area (double chin)",
	},
	{
		id: 7,
		desc: "Back",
	},
];

type Props = {
	white?: boolean;
	consult?: boolean;
	treatment?: boolean;
	title: string;
	desc1?: string;
	desc2?: string;
	skin?: boolean;
};

export const ConturingCard = ({ white, title, consult, desc1, desc2, treatment, skin }: Props) => {
	return (
		<section className={`${white ? "bg-white" : "bg-secondary2"} py-14`}>
			<div className="w-5/6 mx-auto flex flex-col  gap-16">
				<div
					className={`${consult ? "xl:w-[80%] mx-auto" : "w-full"} flex flex-col gap-4 text-dark3`}
				>
					<h2 className="text-3xl font-medium text-center ">{title}</h2>
					<p className="text-base text-left">{desc1}</p>
					{desc2 && <p className="text-base text-left">{desc2}</p>}
					{skin && (
						<ul className="list-disc ml-4">
							<li>The face, neck, and chest</li>
							<li>The arms</li>
							<li>The legs</li>
							<li>The abdomen</li>
						</ul>
					)}
				</div>
				{consult && (
					<div className="mx-auto">
						<CustomButton>Book Your Appointment</CustomButton>
					</div>
				)}
				{treatment && (
					<div className=" mx-auto grid lg:grid-cols-4 items-center gap-x-2 gap-y-6 justify-center ">
						{data.map((item) => (
							<div key={item.id} className="flex items-center gap-1">
								<ArrowIcon />
								<span className="text-base text-dark3">{item.desc}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};
