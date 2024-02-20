import Recognition from "../shared/Recognition";

export default function AestheticsRecognition() {
	return (
		<div className="max-w-desktop mx-auto px-6 grid lg:grid-cols-2 gap-6 my-20">
			<Recognition recognition="Body">
				<p>
					Aesthetic body procedures balance anatomic realities with aspirational goals. At
					Integrative Wellness, we bring together surgical and nonsurgical expertise to offer a
					comprehensive approach to body contouring. We focus on proportion, harmony, silhouettes
					and curves.{" "}
				</p>
			</Recognition>
			<Recognition recognition="Face and Skin">
				From the operations that sculpt and refine, to the non-invasive techniques that rejuvenate
				and refresh, we are dedicated to providing tailored solutions that empower you to put your
				best face forward. Explore our full array of surgical facial procedures and non-surgical
				treatments designed to enhance your natural beauty.
			</Recognition>
		</div>
	);
}
