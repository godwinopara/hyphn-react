import TeamCard from "../components/team/TeamCard";
import TeamHero from "../components/team/TeamHero";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/ui/Card";
import drLoliyaImg from "../images/dr-loliya1.png";
import drKenImg from "../images/ken1.png";
import teamImg from "../images/img4.png";
import groupImg from "../images/team.png";
import KenConsulation from "../components/drken/KenConsulation";
import LoliyaConsulation from "../components/drloliya/LoliyaConsulation";
import { useState } from "react";

export default function OurTeam() {
	const [modal, setModal] = useState(false);
	const openModal = () => {
		setModal(true);
	};

	return (
		<MainLayout>
			<TeamHero />
			<TeamCard />
			<div className="max-w-desktop mx-auto">
				<img src={groupImg} alt="" />
			</div>
			<div className="">
				<div className="">
					<Card img={drLoliyaImg} heading="About DR. LOLIYA" reverse>
						<h3 className="font-semibold text-lg my-4">OBESITY MEDICINE SPECIALIST</h3>
						<p>
							Dr. Loliya is a highly accomplished medical professional, board-certified in Family
							Practice and Obesity Medicine. Her journey in the medical field has been marked by a
							commitment to excellence and a deep passion for promoting women's health and combating
							obesity.
						</p>
						<a
							className="border-2 font-medium hover:bg-dark3 hover:text-white border-dark inline-block px-14 py-3 mt-6"
							href="/dr-loliya"
						>
							Learn More
						</a>
					</Card>
				</div>
				<div className=" bg-dark3 text-white">
					<Card img={drKenImg} heading="About DR.KEN">
						<h3 className="font-semibold text-lg my-4">
							PSYCHIATRIC MENTAL HEALTH NURSE PRACTITIONER
						</h3>
						<p>
							Dr. Loliya is a highly accomplished medical professional, board-certified in Family
							Practice and Obesity Medicine. Her journey in the medical field has been marked by a
							commitment to excellence and a deep passion for promoting women's health and combating
							obesity.
						</p>
						<a
							className="border-2 font-medium hover:bg-white hover:text-dark3 border-white inline-block px-14 py-3 mt-6"
							href="/dr-ken"
						>
							Learn More
						</a>
					</Card>
				</div>
				<div>
					<Card img={teamImg} heading="OUR TEAM" reverse>
						<h3 className="font-semibold text-lg my-4">PROVIDING ALL PROCEDURES</h3>
						<p>
							Integrative Wellness team combines skill, creativity, mastery of anatomy and awareness
							of the latest trends, devices and products. With specializations in Morpheus8,
							CoolSculpting, Avéli® for cellulite, Botox and filler injections, our providers
							expertly enhance natural beauty — without surgery.
						</p>
					</Card>
				</div>
			</div>
			<KenConsulation openModal={openModal} />
			<LoliyaConsulation openModal={openModal} />
		</MainLayout>
	);
}
