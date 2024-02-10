import arrow from "../../images/arrow-down.svg";

export default function Recognition({ recognition }: { recognition: string }) {
	return (
		<div className="bg-gray1 p-10 lg:p-14 flex justify-center items-center flex-col gap-y-5 rounded-md shadow-lg">
			<h3 className="text-xl lg:text-2xl xl:text-32 leading-10 font-medium text-center ">
				{recognition}
			</h3>
			<img src={arrow} alt="arrow" className="cursor-pointer" />
		</div>
	);
}
