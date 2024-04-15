import React from "react";
import { DownTownIcon, EuroIcon, ResultIcon, TimeIcon } from "../../icons/AccentPrimeIcons";

type Props = {};

export const AccentPrimeFaceCard = (props: Props) => {
	return (
		<section className="bg-primary xl:h-28 flex items-center ">
			<div className="w-4/6 mx-auto xl:flex items-center justify-between">
				<div className="flex gap-3 items-center my-5 xl:my-0">
					<EuroIcon />
					<div className="flex flex-col xl:gap-2">
						<span className="text-xl font-medium text-white">Pricing</span>
						<span className="text-base text-white">from £198 </span>
					</div>
				</div>
				<div className="flex gap-3 items-center my-5 xl:my-0">
					<TimeIcon />
					<div className="flex flex-col xl:gap-2">
						<span className="text-xl font-medium text-white">Procedure Time</span>
						<span className="text-base text-white">30-60 mins </span>
					</div>
				</div>
				<div className="flex gap-3 items-center my-5 xl:my-0">
					<DownTownIcon />
					<div className="flex flex-col xl:gap-2">
						<span className="text-xl font-medium text-white">Downtime</span>
						<span className="text-base text-white">None </span>
					</div>
				</div>
				<div className="flex mb-5  gap-3 items-center xl:my-0">
					<ResultIcon />
					<div className="flex flex-col xl:gap-2">
						<span className="text-xl font-medium text-white">Results last for</span>
						<span className="text-base text-white">Long Term </span>
					</div>
				</div>
			</div>
		</section>
	);
};
