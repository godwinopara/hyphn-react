import saggyskinImg from "../../images/saggy-skin.png";
import facecontoringImg from "../../images/face-contouring.png";
import doubleChinImg from "../../images/double-chin.png";
import BandACard from "./BandACard";

export default function BandA() {
	return (
		<section className="px-6 py-8 bg-secondary2">
			<h2 className="text-xl font-bold mb-6">B&A</h2>
			<div>
				<BandACard
					img={saggyskinImg}
					title="Saggy Skin"
					subtitle="Accent Prime"
					description="Courtesy of: Karen Sher, Beauty and Laser by Karen, Australia"
				/>
				<BandACard
					img={facecontoringImg}
					title="Face Contouring"
					subtitle="Accent Prime"
					description="Courtesy of:Alma Clinical Department"
				/>
				<BandACard
					img={doubleChinImg}
					title="Double Chin"
					subtitle="Accent Prime"
					description="Courtesy of Clinical Department"
				/>
			</div>
		</section>
	);
}
