import React from "react";
import Card from "../ui/Card";
import img from "../../images/psychaimg.png";
import { CheckMarkIcon } from "../../icons/AccentPrimeIcons";

type Props = {};

const data = [
	{
		id: 1,
		desc: "A thorough New Patient Evaluation that reviews your medical history, current and past medications, and symptoms causing you distress",
	},
	{
		id: 2,
		desc: "Individually designed treatment plans including recommendations for for medications, psychotherapy and other available options",
	},
	{
		id: 3,
		desc: "Periodic review of lab testing/studies as needed",
	},
	{
		id: 4,
		desc: "Ongoing monitorng of medication/treatment effectiveness, symptoms and side effects",
	},
	{
		id: 5,
		desc: "Compassionate and supportive office staff",
	},
];

export const Process = (props: Props) => {
	return (
		<div className={` bg-white `}>
			<Card reverse img={img}>
				<div className="flex flex-col gap-5 text-dark3 max-w-[464px] mx-auto">
					<h1 className="text-xl font-bold xl:text-[32px] xl:font-medium">Our Process:</h1>
					<p className="text-base ">
						If you struggle with any mental health symptoms such as anxiety or depression, and want
						to explore medication management alongside therapy as a solution,  we have a team of
						specialized providers to help! We prescribe a therapeutic medication schedule that will
						best meet the needs of each individual patient.{" "}
					</p>
					<div className="grid grid-cols-1 gap-5">
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
			</Card>
			<div className="flex items-center justify-center h-24">
				<p className="text-dark3 text-xl font-bold px-6 text-center xl:text-left xl:px-0  xl:text-32 xl:font-medium">
					We believe patients deserve access to real time mental health care
				</p>
			</div>
		</div>
	);
};
