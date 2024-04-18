import saggyskinImg from "../../images/saggy-skin.png";
import facecontoringImg from "../../images/face-contouring.png";
import doubleChinImg from "../../images/double-chin.png";
import BandACard from "./BandACard";

export default function BandA() {
	return (
		<section className="px-6 py-8 bg-secondary2 mb-20 xl:py-20">
			<div className=" max-w-desktop mx-auto">
				<h2 className="text-xl font-bold mb-6 xl:text-center xl:mb-12 xl:text-32 xl:font-normal">
					B&A
				</h2>
				<div className="xl:grid xl:grid-cols-3 gap-x-10">
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
			</div>
		</section>
	);
}
