import Recognition from "../shared/Recognition";

export default function AestheticsRecognition() {
	return (
		<div className="max-w-desktop mx-auto px-6 grid lg:grid-cols-2 gap-6 my-20">
			<Recognition recognition="Body" />
			<Recognition recognition="Fave Skin" />
		</div>
	);
}
