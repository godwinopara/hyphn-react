export default function Hero() {
	return (
		<section className="home__hero relative min-h-[500px] md:min-h-[350px] lg:min-h-[40vh] xl:min-h-[75vh]  flex justify-center">
			<div className="absolute inset-0 bg-dark5">
				<div className="w-full max-w-desktop mx-auto flex justify-center mt-16 h-full md:items-center md:mt-0">
					<div className="flex flex-col justify-center items-center text-center ">
						<h1 className="font-bold text-26 mb-6 text-lime z-10 md:text-40 xl:text-48 leading-133">
							You are Enough
						</h1>
						<a href="/" className="inline-block text-white py-4 px-8 bg-black">
							Schedule my Visit
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
