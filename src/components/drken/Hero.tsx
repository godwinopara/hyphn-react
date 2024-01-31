import heroImg from "../../images/ken-hero.png";

export default function Hero() {
	return (
		<section className="px-6 py-16 max-w-desktop mx-auto rounded-md flex flex-col-reverse xl:px-0 xl:flex-row xl:py-20">
			<div className="bg-white flex items-center justify-center xl:shadow-custom xl:w-1/2 xl:px-20">
				<div>
					<h2 className="text-32 text-center font-medium leading-10">MEET DR. KEN NWOGU</h2>
				</div>
			</div>
			<div className="mb-10 xl:mb-0 xl:w-1/2">
				<img src={heroImg} alt="" className="mx-auto xl:m-0" />
			</div>
		</section>
	);
}
