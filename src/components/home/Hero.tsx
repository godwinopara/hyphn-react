export default function Hero() {
	return (
		<section className="home__hero relative min-h-[400px] md:min-h-[350px] lg:min-h-[40vh] xl:min-h-[80vh]  flex justify-center">
			<div className="absolute inset-0 bg-secondary">
				<div className="w-full max-w-desktop mx-auto flex justify-center mt-16 h-full md:items-center md:mt-0">
					<div className="flex flex-col justify-center items-center text-center ">
						<h1 className="font-quintessential font-bold text-4xl mb-10 text-white z-10 md:text-40 xl:text-8xl leading-133">
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
