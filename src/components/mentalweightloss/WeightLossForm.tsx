export default function WeightLossForm() {
	return (
		<form className="px-6 max-w-4xl mx-auto">
			<h2 className="mb-5 font-bold text-center text-xl leading-10">
				It’s easy to get started with Options Medical Weight Loss™ simply fill out this brief form
				and a Options representative will contact you shortly.
			</h2>

			<div>
				<div className="mb-5">
					<input
						type="text"
						name="firstname"
						placeholder="First Name*"
						className="py-3 pl-5  w-full text-dark3 border border-dark3"
						required
					/>
				</div>
				<div className="mb-5">
					<input
						type="text"
						name="lastname"
						placeholder="Last Name*"
						className="py-3 pl-5 text-dark3 w-full border border-dark3"
					/>
				</div>
				<div className="mb-5">
					<input
						type="text"
						name="email"
						placeholder="Email Address*"
						className="py-3 pl-5 w-full text-dark3 border border-dark3"
					/>
				</div>
				<div className="mb-5">
					<input
						type="text"
						name="phone"
						placeholder="Phone*"
						className="py-3 pl-5  w-full text-dark3 border border-dark3"
					/>
				</div>

				<div className="mb-5 w-full">
					<p className="text-center mb-5 font-medium text-xl">I'm intrested in...(Required)</p>
					<select
						name="intrest"
						className="w-full py-3 pl-5 bg-white text-dark3 border border-dark3 font-bold text-center"
					>
						<option>Please Select</option>
						<option value="breast-procedures">Breast Procedures</option>
						<option value="face-procedures">Face Procedures</option>
						<option value="body-procedures">Body Procedures</option>
						<option value="sexual-wellness">Sexual Wellness</option>
						<option value="laser-services">Laser Services</option>
						<option value="medspa-services">Laser Services</option>
						<option value="acne-treatment">Acne Treatment</option>
					</select>
				</div>

				<div className="mb-5 text-center">
					<p className="font-medium text-xl">
						Do You Have Any Questions Or Details About Your Goals (Required)
					</p>
				</div>
				<textarea
					className="mb-5 w-full p-5 text-dark3 border border-dark3"
					name="message"
					cols={30}
					rows={10}
					placeholder="Let Us Know Here"
				></textarea>

				<div>
					<button className="bg-black text-white px-8 py-4" type="submit">
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}
