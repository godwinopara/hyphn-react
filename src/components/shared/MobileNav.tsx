import { GoChevronRight } from "react-icons/go";
import phoneWhite from "../../images/phone-white.svg";
import searchWhite from "../../images/search-white.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function MobileNav() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [serviceDropdown, setServiceDropdown] = useState(false);
	const [womenhealth, setWomenHealth] = useState(false);
	const [aesthetics, setAesthetics] = useState(false);
	const [mentalHealth, setMentalHealth] = useState(false);
	const [mentalWeightLoss, setMentalWeightLoss] = useState(false);
	const [integrativeMedicine, setIntegrativeMedicine] = useState(false);
	const [provider, setProvider] = useState(false);

	const [body, setBody] = useState(false);
	const [bodySculping, setBodySculping] = useState(false);
	const [faceAndSkin, setFaceAndSkin] = useState(false);
	const [filler, setFiller] = useState(false);

	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
			document.documentElement.style.overflow = "visible";
		}

		return () => {
			document.body.style.overflow = "visible";
			document.documentElement.style.overflow = "visible";
		};
	}, [isNavOpen]);

	return (
		<header className="md:hidden ">
			<div className="bg-primary px-6 py-5">
				<div className="flex justify-between items-center text-white">
					<div className="flex items-center gap-x-2">
						<img src={phoneWhite} alt="" />
						{/* <img src={searchWhite} alt="" /> */}
						<span>614-321-7856</span>
					</div>

					<div className="cursor-pointer text-3xl" onClick={() => setIsNavOpen(!isNavOpen)}>
						{!isNavOpen && <RxHamburgerMenu />}
						{isNavOpen && <IoCloseOutline />}
					</div>
				</div>
			</div>
			{isNavOpen && (
				<ul className="bg-white fixed top-[71px] left-0 z-50 w-full">
					<li
						onClick={() => setServiceDropdown(!serviceDropdown)}
						className="border-b-[1px] border-primary px-6 cursor-pointer"
					>
						<div className="flex items-center justify-between py-5">
							<div>SERVICES</div>
							<div className="text-2xl">
								<GoChevronRight />
							</div>
						</div>
					</li>
					{serviceDropdown && (
						<ul className="bg-white w-full px-6">
							<li
								onClick={() => setWomenHealth(!womenhealth)}
								className="flex items-center justify-between py-3  cursor-pointer"
							>
								Women's Health
								<div className="text-2xl">
									<GoChevronRight />
								</div>
							</li>
							{womenhealth && (
								<ul className="bg-white w-full px-2">
									<li className="flex items-center justify-between py-3  cursor-pointer">
										<Link to="/womens-health">Women's Health</Link>
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Annual Visit
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Contraception Management
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Bioidentical Hormone
									</li>
								</ul>
							)}
							<li
								onClick={() => setAesthetics(!aesthetics)}
								className="flex items-center justify-between py-3 cursor-pointer"
							>
								Aesthetics
								<div className="text-2xl">
									<GoChevronRight />
								</div>
							</li>
							{aesthetics && (
								<ul className="bg-white w-full px-2">
									<li className="flex items-center justify-between py-3  cursor-pointer">
										<Link to="/aesthetics">Aesthetics</Link>
									</li>
									<li
										onClick={() => setBody(!body)}
										className="flex items-center justify-between py-3  cursor-pointer"
									>
										<div>Body</div>
										<div className="text-2xl">
											<GoChevronRight />
										</div>
									</li>
									{body && (
										<ul className="bg-white w-full px-2">
											<li
												onClick={() => setBodySculping(!bodySculping)}
												className="flex items-center justify-between py-3  cursor-pointer"
											>
												<div>Body Sculping</div>
												<div className="text-2xl">
													<GoChevronRight />
												</div>
											</li>
											{bodySculping && (
												<ul className="bg-white w-full">
													<li className="flex items-center justify-between py-3  cursor-pointer">
														<Link to="/accent-prime">
															Accent Prime Ultrasound & Radiofrequuency
														</Link>
													</li>
													<li className="flex items-center justify-between py-3  cursor-pointer">
														Accent Prime Face Body Contouring
													</li>
												</ul>
											)}
										</ul>
									)}

									<li
										onClick={() => setFaceAndSkin(!faceAndSkin)}
										className="flex items-center justify-between py-3 cursor-pointer"
									>
										<div>Face and Skin</div>
										<div className="text-2xl">
											<GoChevronRight />
										</div>
									</li>

									{faceAndSkin && (
										<ul className="bg-white w-full px-2">
											<li className="flex items-center justify-between py-3  cursor-pointer">
												<Link to="#">Face Contouring</Link>
											</li>
											<li
												onClick={() => setFiller(!filler)}
												className="flex items-center justify-between py-3  cursor-pointer"
											>
												<div>Fillters</div>
												<div className="text-2xl">
													<GoChevronRight />
												</div>
											</li>
											{filler && (
												<ul className="bg-white w-full px-2">
													<li className="flex items-center justify-between py-3  cursor-pointer">
														<Link to="/lip-filler">Lip Fillers</Link>
													</li>
													<li className="flex items-center justify-between py-3  cursor-pointer">
														<Link to="/dermal-filler">Dermal Fillers</Link>
													</li>
												</ul>
											)}
											<li className="flex items-center justify-between py-3  cursor-pointer">
												<Link to="#">Wrinkle Relaxers</Link>
											</li>
										</ul>
									)}
								</ul>
							)}
							<li
								onClick={() => setMentalHealth(!mentalHealth)}
								className="flex items-center justify-between py-3 cursor-pointer"
							>
								Mental Health
								<div className="text-2xl">
									<GoChevronRight />
								</div>
							</li>
							{mentalHealth && (
								<ul className="bg-white w-full px-2">
									<li className="flex items-center justify-between py-3 cursor-pointer">
										<Link to="/mental-health">Mental Health</Link>
									</li>
									<li className="flex items-center justify-between py-3  cursor-pointer">
										<Link to="/pyschatric-medication-management">
											Psychiatric Medication Management
										</Link>
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Telepsychiatry
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Genetic Testing
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										ADHD Testing
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Anxiety and Depression
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Psychotherapy
									</li>
								</ul>
							)}
							<li
								onClick={() => setMentalWeightLoss(!mentalWeightLoss)}
								className="flex items-center justify-between py-3 cursor-pointer"
							>
								Mental Weight Loss
								<div className="text-2xl">
									<GoChevronRight />
								</div>
							</li>
							{mentalWeightLoss && (
								<ul className="bg-white w-full px-4">
									<li className="flex items-center justify-between py-3  cursor-pointer">
										<Link to="/mental-weight-loss">Mental Weight Loss</Link>
									</li>
									<li className="flex items-center justify-between py-3  cursor-pointer">
										Physician Supervision
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Prescription Medication
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										GLP-1 Medications
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Lipotropic Fat Burners
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										B-12 Injections
									</li>
								</ul>
							)}
							<li
								onClick={() => setIntegrativeMedicine(!integrativeMedicine)}
								className="flex items-center justify-between py-3 cursor-pointer"
							>
								Integrative Medicine
								<div className="text-2xl">
									<GoChevronRight />
								</div>
							</li>
							{integrativeMedicine && (
								<ul className="bg-white w-full px-4">
									<li className="flex items-center justify-between py-3  cursor-pointer">
										What is Integrative Medicine
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Bioidentical Hormone Replacement
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										Preimenopausal Treatments
									</li>
									<li className="flex items-center justify-between py-3 cursor-pointer">
										TRT Replacement & Hormone Therapy for Men
									</li>
								</ul>
							)}
						</ul>
					)}
					<li className="flex items-center justify-between py-5 border-b-[1px] border-primary px-6 cursor-pointer">
						ABOUT
						<div className="text-2xl">
							<GoChevronRight />
						</div>
					</li>
					<li className="flex items-center justify-between py-5 border-b-[1px] border-primary px-6 cursor-pointer">
						REVIEWS
						<div className="text-2xl">
							<GoChevronRight />
						</div>
					</li>
					<li
						onClick={() => setProvider(!provider)}
						className="flex items-center justify-between py-5 px-6 cursor-pointer"
					>
						PROVIDERS
						<div className="text-2xl">
							<GoChevronRight />
						</div>
					</li>
					{provider && (
						<ul className="bg-white w-full px-6">
							<li className="flex items-center justify-between py-3  cursor-pointer">
								<Link to="/dr-ken">Book with Kenneth Nwogu</Link>
							</li>
							<li className="flex items-center justify-between py-3 cursor-pointer">
								<Link to="/dr-loliya">Book with Dr Loliya Idoniboye</Link>
							</li>
						</ul>
					)}
				</ul>
			)}
		</header>
	);
}
