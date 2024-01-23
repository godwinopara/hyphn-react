import heroImg from "../../images/heroImg.png";

export default function Hero() {
	return (
		<section className="min-h-[65vh] lg:min-h-[30vh] xl:min-h-[65vh] bg-gradient pt-16 px-6 xl:px-0">
			<div className="max-w-desktop mx-auto bg-heroBg lg:flex lg:items-center lg:justify-between">
				<div className="text-center mb-10 xl:mb-0 lg:text-left lg:w-1/2">
					<h1 className="font-bold text-26 mb-6 lg:text-40 md:text-48 leading-133">
						You are Enough
					</h1>
					<a href="#" className="inline-block text-white py-4 px-8 bg-black">
						Schedule my Visit
					</a>
				</div>
				<div>
					<img src={heroImg} alt="" />
				</div>
			</div>
		</section>
	);
}
