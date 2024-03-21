import { useState } from "react";
import AboutCard from "../components/drloliya/AboutCard";
import Card1 from "../components/drloliya/DrLoliyaFirstCard";
import Card2 from "../components/drloliya/DrLoliyaSecondCard";
import Card3 from "../components/drloliya/DrLoliyaThirdCard";
import Hero from "../components/drloliya/Hero";
import LoliyaModal from "../components/drloliya/LoliyaModal";

import MainLayout from "../layouts/MainLayout";
import LoliyaConsulation from "../components/drloliya/LoliyaConsulation";
import AboutCard2 from "../components/drloliya/AboutCard2";
// import arrow from "../images/arrow-down.svg";
import Partners from "../components/shared/Partners";

export default function DrLoliyaProfile() {
	const [toggleModal, setToggleModal] = useState(false);

	return (
		<MainLayout>
			<Hero />
			<AboutCard />
			<Card1 />
			<Card2 />
			<Card3 />
			<AboutCard2 />
			<LoliyaConsulation openModal={() => setToggleModal(true)} />
			<LoliyaModal closeModal={() => setToggleModal(false)} toggleModal={toggleModal} />
			<Partners />
		</MainLayout>
	);
}
