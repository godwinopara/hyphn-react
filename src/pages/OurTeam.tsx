import Card from "../components/shared/Card";
import TeamCard from "../components/team/TeamCard";
import TeamHero from "../components/team/TeamHero";
import MainLayout from "../layouts/MainLayout";
import teamImg from "../images/team.png";
import AboutTeam from "../components/team/AboutTeam";
import Contact from "../components/team/Contact";
import AboutCard from "../components/team/AboutCard";

export default function OurTeam() {
	return (
		<MainLayout>
			<TeamHero />
			<Card />
			<TeamCard />
			<div className="max-w-desktop mx-auto my-14">
				<img src={teamImg} alt="" />
			</div>
			<Card />
			<div className="max-w-[1050px] mx-auto mt-48 mb-32 px-6 md:px-16 lg:px-6 lg:grid lg:grid-cols-2 gap-x-10">
				<AboutCard />
				<AboutCard />
			</div>
			<AboutTeam />
			<Contact />
		</MainLayout>
	);
}
