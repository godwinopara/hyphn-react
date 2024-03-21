interface RecognitionProps {
	recognition: string;
	children?: React.ReactNode;
}

export default function Recognition({ recognition, children }: RecognitionProps) {
	return (
		<div className="bg-white p-10 lg:p-14 flex justify-center items-center flex-col gap-y-5 rounded-md shadow-lg">
			<h3 className="text-xl text-center lg:text-2xl xl:text-30 leading-10 font-medium">
				{recognition}
			</h3>
			<div>
				{children}

				<div className="flex justify-center mt-8">
					<button className="uppercase bg-dark4 px-10 py-3 text-lg font-medium text-white">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
}
