import MainLayout from "../layouts/MainLayout";
import Hero from "../components/drken/Hero";
import AboutCard from "../components/drken/AboutCard";
import DrKenCard1 from "../components/drken/DrKenCard1";
import AboutCard2 from "../components/drken/AboutCard2";
import arrow from "../images/arrow-down.svg";
import KenConsulation from "../components/drken/KenConsulation";
import { useState } from "react";
import KenModal from "../components/drken/KenModal";

export default function DrKenProfile() {
	const [toggleModal, setToggleModal] = useState(false);
	return (
		<MainLayout>
			<Hero />
			<AboutCard />
			<DrKenCard1 />
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
						Associates of Dr. Ken
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
						Articles From Dr. Ken
					</h3>
					<img src={arrow} alt="arrow" className="cursor-pointer" />
				</div>
			</div>
			<KenConsulation openModal={() => setToggleModal(true)} />
			<KenModal closeModal={() => setToggleModal(false)} toggleModal={toggleModal} />
		</MainLayout>
	);
}
