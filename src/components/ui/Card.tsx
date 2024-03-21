// import img1 from "../../images/dr-loliya1.png";

interface CardProps {
	children: React.ReactNode;
	img: string | undefined;
	heading?: string;
	reverse?: boolean;
	dark?: boolean;
}

//
export default function Card({ children, img, heading, reverse, dark }: CardProps) {
	return (
		<section
			className={` md:flex md:flex-col-reverse lg:grid  lg:grid-cols-2 mx-auto ${
				reverse ? "flex-col-reverse" : ""
			}`}
		>
			<div className={`w-full  ${reverse ? "lg:order-1 " : ""} `}>
				<img src={img} alt="" className="w-full h-full" />
			</div>
			<div
				className={`w-full flex items-center justify-center md:px-14 py-16 xl:px-24 xl:py-14  ${
					dark ? "bg-dark  text-white" : ""
				}`}
			>
				<div className="px-6 md:px-0">
					{heading && (
						<h2 className="text-xl md:text-26 xl:text-32 leading-8 uppercase mb-6 font-bold">
							{heading}
						</h2>
					)}
					<div>{children}</div>
				</div>
			</div>
		</section>
	);
}
