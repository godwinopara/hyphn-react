import React from "react";

type Props = {};

export const DarmalFillerCTA = (props: Props) => {
	return (
		<section className="min-h-[50vh] xl:min-h-[80vh] relative bg-dermalMobile bg-[30%_10%] xl:bg-dermal xl:bg-cover bg-no-repeat flex items-center justify-center ">
			<div className="flex flex-col gap-2 xl:gap-6">
				<h2 className="text-secondary2 font-medium text-2xl xl:text-6xl">Better Shaped Lips</h2>
				<p className="text-sm font-normal mb-5 xl:mb-0 xl:text-32 xl:font-medium text-green-200">
					With Juvederm Volbella XC Filler
				</p>
				<div className="mx-auto ">
					<button
						className={`w-fit  px-8 flex items-center justify-center h-14 bg-primary-btn text-white text-base`}
					>
						Book Your Consultation
					</button>
				</div>
			</div>
		</section>
	);
};
