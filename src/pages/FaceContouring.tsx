import React, { useState, useRef } from "react";
// import "./Slider.css"; // Assuming you have styles for Slider component
import img1 from "../images/book-consulation.png";
import img2 from "../images/team.png";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function FaceContouring() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [sliderPosition, setSliderPosition] = useState<number>(0);

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !containerRef.current) return;

		const containerRect = containerRef.current.getBoundingClientRect();
		const newX = e.clientX - containerRect.left;
		const normalizedX = Math.max(0, Math.min(newX, containerRect.width));

		const leftImageWidth = (normalizedX / containerRect.width) * 100;

		setSliderPosition(leftImageWidth);

		const leftImage = document.getElementById("left-image") as HTMLImageElement;
		const rightImage = document.getElementById("right-image") as HTMLImageElement;
		if (leftImage && rightImage) {
			leftImage.style.width = `${leftImageWidth}%`;
			rightImage.style.width = `${100 - leftImageWidth}%`;
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	return (
		<div
			ref={containerRef}
			className="relative w-[600px] h-[600px] mx-auto"
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
		>
			<div
				id="slider"
				className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-gray-500 cursor-pointer"
			></div>
			<img
				id="left-image"
				className="absolute top-0 left-0 w-1/2 h-full object-cover"
				src={img1}
				alt="Left Image"
			/>
			<img
				id="right-image"
				className="absolute top-0 right-0 w-1/2 h-full object-cover"
				src={img2}
				alt="Right Image"
			/>
			<div
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				style={{ left: `${sliderPosition}%` }}
			>
				<MdArrowBack className="text-white mr-4 cursor-pointer" />
				<MdArrowForward className="text-white cursor-pointer" />
			</div>
		</div>
	);
}
