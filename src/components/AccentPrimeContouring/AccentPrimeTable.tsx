import React from "react";
import { GreenCheckIcon, RedCheckIcon } from "../../icons/AccentPrimeIcons";

const data = [
	{
		id: 1,
		desc: "REDUCES FAT WITHOUT SURGERY",
		accent: "Eliminates fat cells using Cold Shear Wave technology to induce lipolysis",
		coolsculpting: "Eliminates fat cells using Cold Shear Wave technology to induce lipolysis",
		icon: <GreenCheckIcon />,
		not: <RedCheckIcon />,
		right: true,
		wrong: false,
	},
	{
		id: 2,
		desc: "TIGHTENS SKIN",
		coolsculpting: "CoolSculpting is FDA cleared to tighten skin only in the submental region",
		icon: <GreenCheckIcon />,
		not: <RedCheckIcon />,
		right: true,
		wrong: false,
	},
	{
		id: 3,
		desc: "REDUCES CELLULITE",
		coolsculpting: "CoolSculpting is NOT FDA cleared to reduce cellulite.",
		icon: <GreenCheckIcon />,
		not: <RedCheckIcon />,
		right: true,
		wrong: false,
	},
	{
		id: 4,
		desc: "REDUCES APPEARANCE OF STRETCH MARKS",
		coolsculpting: "CoolSculpting is NOT FDA cleared to reduce stretch marks.",
		icon: <GreenCheckIcon />,
		not: <RedCheckIcon />,
		right: true,
		wrong: false,
	},
	{
		id: 5,
		desc: "REJUVENATES SKIN",
		coolsculpting: "CoolSculpting is NOT FDA cleared to rejuvenate skin.",
		icon: <GreenCheckIcon />,
		not: <RedCheckIcon />,
		right: true,
		wrong: false,
	},
	{
		id: 6,
		desc: "TREATMENT AREAS:",
		accent:
			"Face contouringChin and Neck areaAbdomen (belly)Flanks (love handles)ButtocksThighsBackUpper arms",
		coolsculpting:
			"Submental regionAbdomen (belly)Flanks (love handles)ButtocksThighsBackArmpitsUpper arms",
	},
	{
		id: 7,
		desc: "TREATMENT TIME:",
		accent: "30-minutes to 60-minutes",

		coolsculpting: "35-minutes to 90-minutes(depending on treatment area)",
	},
	{
		id: 8,
		desc: "NO DOWNTIME:",
		accent: "No downtime required",

		coolsculpting: "Some downtime required",
	},
	{
		id: 9,
		desc: "SIDE EFFECTS:",
		accent: "No side effects",

		coolsculpting:
			"Bruising, swelling, tenderness, discoloration. Small risk of a side effect known as paradoxical adipose hyperplasia.",
	},
	{
		id: 10,
		desc: "APPLICATORS:",
		accent:
			"Machine equipped with multiple applicators, including special applicators designed for face contouring.",

		coolsculpting:
			"Machine equipped with different sized applicators. Applicators can only treat the body and submental region.",
	},
	{
		id: 11,
		desc: "TECHNOLOGIES:",
		accent:
			"Multiple technologies, including Cold Shear Wave (Ultrasound,) Unipolar Radio Frequency (RF,) and focused depth control for comprehensive body contouring",

		coolsculpting: "One energy technology: controlled cooling to induce cryolipolysis.",
	},
	{
		id: 12,
		desc: "COST",
		accent:
			"Accent Prime is about 43% less expensive than CoolSculpting. Average cost for complete Accent Prime treatment package is $1,600 (according to Realself)",

		coolsculpting:
			"Average cost for complete CoolSculpting treatment package is $2,475 (according to Realself)",
	},
];

type Props = {};

// export const AccentPrimeTable = (props: Props) => {
// 	return (
// 		<section className="bg-white py-14 overflow-hidden">
// 			<div className="xl:w-5/6 mx-auto">
// 				<table className="w-full">
// 					<thead className="text-center  px-4">
// 						<tr className=" px-4 ">
// 							<th className="pt-7 pb-5 xl:text-xl font-semibold text-[#333] "></th>
// 							<th className="pt-7 pb-5 text-sm xl:text-xl font-semibold text-[#333] ">
// 								ACCENT PRIME
// 							</th>
// 							<th className="pt-7 pb-5 text-sm xl:text-xl font-semibold text-[#333] ">
// 								COOLSCULPTING
// 							</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{data.map((item, index) => (
// 							<tr
// 								key={item.id}
// 								className={`h-[72px] ${
// 									index % 2 === 0 ? "bg-secondary2" : "bg-white"
// 								}  text-sm font-normal text-[#333333] px-4 `}
// 							>
// 								<td className="px-4 border w-[33%] xl:max-w-[321px] text-center text-dark3 text-[0.5rem] xl:text-xl font-medium py-5">
// 									{item.desc}
// 								</td>
// 								<td className="py-5 border w-[33%]">
// 									<div className="flex flex-col  text-center gap-0.5">
// 										{item.right && !item.wrong && <div className="mx-auto">{item.icon}</div>}

// 										<span className="max-w-[364px] text-[0.5rem] xl:text-base text-dark3">
// 											{item.accent}
// 										</span>
// 									</div>
// 								</td>
// 								<td className="py-5 px-4 border w-[33%]">
// 									<div className="flex flex-col text-center gap-0.5">
// 										{item.right && item.wrong && <div className="mx-auto">{item.icon}</div>}
// 										{/* {!item.right && !item.wrong && <div className="mx-auto">{item.not}</div>} */}

// 										<span className="xl:max-w-[364px] text-[0.5rem] xl:text-base text-dark3">
// 											{item.coolsculpting}
// 										</span>
// 									</div>
// 								</td>
// 							</tr>
// 						))}
// 					</tbody>
// 				</table>
// 				<p className="text-base text-center text-dark3">
// 					The best way to determine which body contouring treatment is right for you is to schedule
// 					a free consultation with the Wellife Center.
// 				</p>
// 			</div>
// 		</section>
// 	);
// };
export const AccentPrimeTable = (props: Props) => {
	return (
		<section className="bg-white py-14 overflow-hidden">
			<div className="xl:w-5/6 mx-auto">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="text-center px-4">
							<tr className="px-4">
								<th className="pt-7 pb-5 xl:text-xl font-semibold text-[#333] "></th>
								<th className="pt-7 pb-5 text-sm xl:text-xl font-semibold text-[#333] ">
									ACCENT PRIME
								</th>
								<th className="pt-7 pb-5 text-sm xl:text-xl font-semibold text-[#333] ">
									COOLSCULPTING
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item, index) => (
								<tr
									key={item.id}
									className={`h-[72px] ${
										index % 2 === 0 ? "bg-secondary2" : "bg-white"
									}  text-sm font-normal text-[#333333] px-4 `}
								>
									<td className="px-4 w-[33%] xl:max-w-[321px] text-center text-dark3 text-[0.5rem] xl:text-xl font-medium py-5">
										{item.desc}
									</td>
									<td className="py-5 w-[33%]">
										<div className="flex flex-col  text-center gap-0.5">
											{item.right && !item.wrong && <div className="mx-auto">{item.icon}</div>}

											<span className="max-w-[364px] text-[0.5rem] xl:text-base text-dark3 sm:text-sm">
												{item.accent}
											</span>
										</div>
									</td>
									<td className="py-5 px-4  w-[33%]">
										<div className="flex flex-col text-center gap-0.5">
											{item.right && item.wrong && <div className="mx-auto">{item.icon}</div>}

											<span className="xl:max-w-[364px] text-[0.5rem] xl:text-base text-dark3 sm:text-sm">
												{item.coolsculpting}
											</span>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<p className="text-base text-center text-dark3">
					The best way to determine which body contouring treatment is right for you is to schedule
					a free consultation with the Wellife Center.
				</p>
			</div>
		</section>
	);
};

export default AccentPrimeTable;
