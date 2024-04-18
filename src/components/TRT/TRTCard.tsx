import CustomButton from "../ui/CustomButton";

interface TRTCardProps {
	img: string;
	title: string;
	description: string;
	btn: boolean;
}

export default function TRTCard({ img, title, description, btn }: TRTCardProps) {
	return (
		<div className="shadow-lg px-4 py-8 mb-8">
			<div className="mb-5">
				<img src={img} alt="" />
			</div>
			<div>
				<h3 className="text-xl font-bold leading-8 mb-5">{title}</h3>
				<p className="mb-5">{description}</p>
			</div>
			{btn && (
				<div className="flex justify-center">
					<CustomButton>Book a Discovery Call</CustomButton>
				</div>
			)}
		</div>
	);
}
