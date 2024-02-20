import SharedCard from "../shared/SharedCard";

export default function TeamCard() {
	return (
		<SharedCard title="" dark>
			<h2 className="text-xl md:text-32 leading-10 font-medium mb-6">
				OUR COLUMBUS, OHIO PLASTIC SURGERY <br />
				CENTER & EXPERT TEAM
			</h2>
			<p className="max-w-3xl mx-auto mb-8">
				Lorem ipsum dolor sit amet consectetur. Ridiculus ut cum morbi felis senectus dui vitae
				risus. Congue lorem aliquam diam lacus tortor eget nulla penatibus. Magna praesent nisl id
				sed nisl sed. Felis netus lobortis morbi pellentesque egestas egestas mattis velit faucibus.
			</p>
			<div>
				<button className="bg-white text-dark3 py-4 px-8 font-medium hover:bg-dark3 hover:border hover:border-white hover:text-white">
					Apply to Join our Team
				</button>
			</div>
		</SharedCard>
	);
}
