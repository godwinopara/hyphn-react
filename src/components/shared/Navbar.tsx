// import phoneWhite from "../../images/phone-white.svg";
// import searchWhite from "../../images/search-white.svg";
// import hamburger from "../../images/hamburger.svg";
// import { Fragment, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import arrow from "../../images/chevron-right.svg";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
	return (
		<>
			<DesktopNav />
			<MobileNav />
		</>
	);
}
