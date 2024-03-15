import map from "../../images/map.svg";

export default function HomeForthCard() {
	return (
		<section className="max-w-desktop mx-auto grid grid-cols-2 items-center gap-x-20 py-20">
			<div>
				<img src={map} alt="" />
			</div>
			<div className="text-center text-xl bg-contactBg bg-no-repeat bg-center py-10 h-full">
				<h4 className="font-medium text-xl leading-8 mb-3">We Invite You To</h4>
				<h2 className="font-medium text-32 leading-10 mb-3">Contact Our Practice</h2>
				<h3 className="font-medium mb-5">ADDRESS</h3>
				<div className="mb-8">1243 E. Broad St </div>
				<div className="mb-8">Columbus, OH 43205</div>
				<div className="mb-8">
					<strong className="text-xl">PHONE:</strong> 614-321-7856
				</div>
				<div>
					<strong>FAX:</strong> 614-321-7856
				</div>
			</div>
		</section>
	);
}
