import MainLayout from "../layouts/MainLayout";
import Hero from "../components/drken/Hero";
import AboutCard from "../components/drken/AboutCard";
import DrKenCard1 from "../components/drken/DrKenCard1";
// import AboutCard2 from "../components/drken/AboutCard2";
// import arrow from "../images/arrow-down.svg";
import KenConsulation from "../components/drken/KenConsulation";
import { useState } from "react";
import KenModal from "../components/drken/KenModal";
import Partners from "../components/shared/Partners";

export default function DrKenProfile() {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <MainLayout>
      <Hero />
      <AboutCard />
      <DrKenCard1 />
      {/* <AboutCard2 /> */}

      <KenConsulation openModal={() => setToggleModal(true)} />
      <KenModal
        closeModal={() => setToggleModal(false)}
        toggleModal={toggleModal}
      />
      <Partners />
    </MainLayout>
  );
}
