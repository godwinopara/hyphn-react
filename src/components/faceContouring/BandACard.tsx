interface BandACardProps {
	img: string;
	title: string;
	subtitle: string;
	description: string;
}

export default function BandACard({ img, title, subtitle, description }: BandACardProps) {
	return (
		<div className="mb-8 xl:mb-0">
			<div className="mb-8">
				<img src={img} alt="" />
			</div>
			<div>
				<h3 className="font-medium text-2xl leading-7 mb-5">{title}</h3>
				<p className="mb-4">{subtitle}</p>
				<p>{description}</p>
			</div>
		</div>
	);
}
