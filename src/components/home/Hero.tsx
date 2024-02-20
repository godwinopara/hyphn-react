export default function Hero() {
	return (
		<section className="home__hero min-h-[500px] md:min-h-[350px] lg:min-h-[40vh] xl:min-h-[75vh]  flex justify-center xl:justify-start xl:items-center">
			<div className="w-full max-w-desktop flex justify-center mt-16 md:items-center md:mt-0 md:justify-start md:ml-[5%] xl:ml-[10%] ">
				<div className="">
					<h1 className="font-bold text-26 mb-6 md:text-40 xl:text-48 leading-133">
						You are Enough
					</h1>
					<a href="/" className="inline-block text-white py-4 px-8 bg-black">
						Schedule my Visit
					</a>
				</div>
			</div>
		</section>
	);
}
