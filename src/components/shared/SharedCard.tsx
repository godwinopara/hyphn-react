interface Card2Props {
	title: string;
	dark?: boolean;
	children: React.ReactNode;
}

export default function SharedCard({ title, dark, children }: Card2Props) {
	return (
		<section className={`py-14 px-6 xl:px-0 ${dark ? "bg-dark3 text-white" : ""}`}>
			<div className="max-w-desktop grid place-items-center mx-auto">
				<div className="text-center">
					<h2 className="text-xl md:text-32 leading-10 font-medium mb-6">{title}</h2>
					<div className="max-w-3xl mx-auto">{children}</div>
				</div>
			</div>
		</section>
	);
}
