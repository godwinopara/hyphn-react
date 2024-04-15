import React from "react";
import CustomButton from "../ui/CustomButton";
import { CheckMarkIcon } from "../../icons/AccentPrimeIcons";

const data = [
	{
		id: 1,
		desc: "Remove fat, improve skin texture and tone, and enhance the contours of the body without invasive surgery.",
	},
	{
		id: 2,
		desc: "Tighten, smooth and re-contour your skin from the inside out, leading to improved overall skin firmness, texture and tone.",
	},
	{
		id: 3,
		desc: "Skin rejuvenation and lightening.",
	},
	{
		id: 4,
		desc: "Improve the appearance of stretch marks, scars and melasma.",
	},
	{
		id: 5,
		desc: "Reduce and re-contour fatty areas in various parts of the body as well as improve the appearance of cellulite.",
	},
	{
		id: 6,
		desc: "Production of collagen.",
	},
	{
		id: 7,
		desc: "Accent can also be used following procedures such as liposuction to help with swelling and to smooth out the skin for the best possible outcome.",
	},
	{
		id: 8,
		desc: "Gradual continued improvement up to 3 months after treatments.",
	},
	{
		id: 9,
		desc: "No down time or discomfort.",
	},
];

type Props = {};

export const Benefits = (props: Props) => {
	return (
		<section className="bg-white py-14">
			<div className="w-5/6 mx-auto flex flex-col gap-16">
				<div className="flex flex-col gap-8 text-dark3">
					<h2 className="text-2xl font-bold xl:text-3xl xl:font-medium">
						Benefits of Integrative Wellness ultrasound & radiofrequency
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-5">
						{data?.map((item) => (
							<div key={item.id} className="flex  gap-1">
								<div className="">
									<CheckMarkIcon />
								</div>
								<span className="text-dark3 text-base max-w-[391px] mt-2">{item.desc}</span>
							</div>
						))}
					</div>
				</div>
				<div className="mx-auto">
					<CustomButton>Book Your Appointment</CustomButton>
				</div>
			</div>
		</section>
	);
};
