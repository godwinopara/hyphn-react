import React from "react";

interface CardProps {
	desc: string;
	img: string | undefined;
	heading?: string;
	reverse?: boolean;
	dark?: boolean;
}

export const AccentPrimeCard = ({ desc, img, heading, reverse, dark }: CardProps) => {
	return (
		<section className="bg-secondary2 py-14 ">
			<div
				className={`px-6 xl:px-0 xl:w-5/6 mx-auto xl:flex  items-center gap-10 ${
					reverse ? "flex-row-reverse" : ""
				}`}
			>
				<div className="mb-10 xl:mb-0 flex-1 flex flex-col gap-4 text-dark3">
					<h1 className="font-bold text-2xl xl:text-3xl xl:font-medium">{heading}</h1>
					<p className="text-base ">{desc}</p>
				</div>
				<div className="flex-1 ">
					<img src={img} alt="" />
				</div>
			</div>
		</section>
	);
};
