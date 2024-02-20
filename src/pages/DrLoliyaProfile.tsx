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
import arrow from "../images/arrow-down.svg";

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
			<div className="max-w-desktop mx-auto px-6 grid lg:grid-cols-2 gap-6 mt-20">
				<div className="bg-gray1 p-10 lg:p-14 flex justify-center items-center flex-col gap-y-3">
					<h3 className="text-xl lg:text-2xl xl:text-32 leading-10 font-medium">
						Awards & Distinctions
					</h3>
					<img src={arrow} alt="arrow" className="cursor-pointer" />
				</div>
				<div className="bg-gray1 p-10 lg:p-14 flex justify-center items-center flex-col gap-y-3">
					<h3 className="text-xl lg:text-2xl xl:text-32 leading-10 font-medium">
						Associates of Dr. Loliya
					</h3>
					<img src={arrow} alt="arrow" className="cursor-pointer" />
				</div>
				<div className="bg-gray1 p-10 lg:p-14 flex justify-center items-center flex-col gap-y-3">
					<h3 className="text-xl lg:text-2xl xl:text-32 leading-10 font-medium">
						In The Community
					</h3>
					<img src={arrow} alt="arrow" className="cursor-pointer" />
				</div>
				<div className="bg-gray1 p-10 lg:p-14 flex justify-center items-center flex-col gap-y-3">
					<h3 className="text-xl lg:text-2xl xl:text-32 leading-10 font-medium">
						Articles From Dr. Loliya
					</h3>
					<img src={arrow} alt="arrow" className="cursor-pointer" />
				</div>
			</div>
			<LoliyaConsulation openModal={() => setToggleModal(true)} />
			<LoliyaModal closeModal={() => setToggleModal(false)} toggleModal={toggleModal} />
		</MainLayout>
	);
}
