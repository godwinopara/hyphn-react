import img from "../../images/book-consulation.png";

export default function BookConsulation() {
	return (
		<section className="max-w-desktop mx-auto px-8 xl:px-0 lg:flex lg:items-center lg:justify-center mb-10">
			<div className="py-24 md:flex">
				<img src={img} alt="" className="mx-auto" />
			</div>

			<div className="rounded-md flex items-center lg:shadow-custom lg:px-10 lg:w-1/2 lg:py-14">
				<div>
					<h2 className="text-26 lg:text-32 text-center mb-2 font-medium leading-10">
						Lorem ipsum dolor sit amet consectetur.
					</h2>
					<hr />
					<h3 className="my-4 leading-8 font-medium">Lorem ipsum dolor sit amet consectetur.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur. Sollicitudin auctor sagittis arcu interdum enim.
						Ullamcorper elit consectetur nullam non pulvinar a blandit aliquam volutpat. Ullamcorper
						eros commodo adipiscing arcu auctor morbi ultrices et. Dui lectus ac pretium viverra sed
						vestibulum. Non massa in massa consectetur. Nisl eget sit sed aliquam semper semper
						tellus semper. Porta lectus tortor natoque nam ultricies pulvinar feugiat magna libero.
						Auctor integer dignissim elementum lacus senectus nisi. Diam nunc morbi non cum.
					</p>
					<button className="bg-gray3 w-full mt-5 py-3 px-4 text-30 text-white leading-10 font-medium text-center">
						Call now to book your Consultation
					</button>
				</div>
			</div>
		</section>
	);
}
