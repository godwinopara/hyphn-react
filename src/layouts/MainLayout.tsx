import { ReactNode } from "react";
import Navbar from "../components/shared/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
