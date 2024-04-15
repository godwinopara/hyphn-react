import React from "react";

type Props = {};

export const Question = (props: Props) => {
	return (
		<section className="bg-white py-14">
			<div className="w-5/6 mx-auto ">
				<div className="flex flex-col gap-4 text-dark3">
					<h2 className="text-xl font-bold xl:text-3xl xl:font-medium">
						Is accent prime ultrasonic cavitationpermanent?
					</h2>
					<p className="text-base">
						Results will continue to improve for several weeks following the last treatment session.
						The body will continue to metabolize fat for up to twelve weeks which means that for
						most people the loss can be permanent. This procedure will also leave your skin firmer
						and smoother looking than before.
					</p>
				</div>
			</div>
		</section>
	);
};
