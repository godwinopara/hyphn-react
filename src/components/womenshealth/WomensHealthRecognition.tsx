import arrow from "../../images/arrow-down.svg";

export default function WomensHealthRecognition() {
	return (
		<div className="max-w-desktop mx-auto px-6 grid lg:grid-cols-2 gap-6 my-20">
			<div className="bg-gray1 p-10 lg:p-14 flex justify-center items-center flex-col gap-y-3">
				<h3 className="text-xl lg:text-2xl xl:text-32 leading-10 font-medium">
					Awards & Distinctions
				</h3>
				<img src={arrow} alt="arrow" className="cursor-pointer" />
			</div>
			<div className="bg-gray1 p-10 lg:p-14 flex justify-center items-center flex-col gap-y-3">
				<h3 className="text-xl lg:text-2xl xl:text-32 leading-10 font-medium">
					Associates of Dr. Loliya
				</h3>
				<img src={arrow} alt="arrow" className="cursor-pointer" />
			</div>
			<div className="bg-gray1 p-10 lg:p-14 flex justify-center items-center flex-col gap-y-3">
				<h3 className="text-xl lg:text-2xl xl:text-32 leading-10 font-medium">In The Community</h3>
				<img src={arrow} alt="arrow" className="cursor-pointer" />
			</div>
			<div className="bg-gray1 p-10 lg:p-14 flex justify-center items-center flex-col gap-y-3">
				<h3 className="text-xl lg:text-2xl xl:text-32 leading-10 font-medium">
					Articles From Dr. Loliya
				</h3>
				<img src={arrow} alt="arrow" className="cursor-pointer" />
			</div>
		</div>
	);
}
