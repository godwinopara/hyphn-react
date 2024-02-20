interface HeroCardProps {
	heading: string;
	img: string | undefined;
}

export default function HeroCard({ heading, img }: HeroCardProps) {
	return (
		<section className="px-6 my-10 flex flex-col-reverse md:my-0  md:px-0 md:flex-row ">
			<div className="bg-white flex items-center justify-center md:w-1/2">
				<div>
					<h2 className="text-32 md:text-40 uppercase text-center font-bold leading-[64px]">
						{heading}
					</h2>
				</div>
			</div>
			<div className="mb-8 md:mb-0 md:w-1/2">
				<img src={img} alt="" className="mx-auto w-full h-full xl:m-0" />
			</div>
		</section>
	);
}
