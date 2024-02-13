import PatientCard from "../components/patientsresult/PatientCard";
import PatientResultCard from "../components/patientsresult/PatientResultCard";
import PatientsResultHero from "../components/patientsresult/PatientsResultHero";
import Card from "../components/shared/Card";
import Partners from "../components/shared/Partners";
import MainLayout from "../layouts/MainLayout";

export default function PatientsResult() {
	return (
		<MainLayout>
			<PatientsResultHero />
			<Card />
			<PatientCard />
			<div className="px-6 md:grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-[1200px] py-16 mx-auto">
				<PatientResultCard />
				<PatientResultCard />
				<PatientResultCard />
				<PatientResultCard />
				<PatientResultCard />
				<PatientResultCard />
			</div>
			<Partners />
		</MainLayout>
	);
}
