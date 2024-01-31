import React from "react";

interface LoliyaModalProps {
	toggleModal: boolean;
	closeModal: () => void;
}

export default function LoliyaModal({ toggleModal, closeModal }: LoliyaModalProps) {
	return (
		<>
			{toggleModal && (
				<div
					id="myModal"
					className="modal fixed w-screen h-full inset-0 flex items-center justify-center"
				>
					<div className="modal-overlay absolute w-full h-full bg-gray opacity-50"></div>
					<div className="bg-white border border-green m-20 mx-auto rounded shadow-lg z-50">
						<div className="h-auto lg:w-[800px]">
							<div className="flex items-center gap-x-5 justify-between p-5">
								<h2 className="font-medium text-lg xl:text-xl">
									Book with Dr. Loliya Idoniboye D.O., Obesity Medicine Specialist
								</h2>
								<button
									onClick={closeModal}
									className="modal-close pl-2 pt-3 py-1 block rounded-lg cursor-pointer focus:outline-none"
								>
									<svg
										className="fill-current text-black"
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										viewBox="0 0 18 18"
									>
										<path d="M6.6 5.6l4.6 4.6-1.4 1.4-4.6-4.6-4.6 4.6-1.4-1.4 4.6-4.6-4.6-4.6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4-4.6 4.6z"></path>
									</svg>
								</button>
							</div>
							<div className="w-full">
								<div className="h-[60vh]">
									<iframe
										title="Book online appointments with Loliya Idoniboye D.O., Obesity Medicine Specialist"
										height="100%"
										width="100%"
										frameBorder="0"
										src="https://www.patientfusion.com/external/appointment/f0fc40bd-3608-412a-bc14-df5c5001a3b6?origin=doctor"
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
