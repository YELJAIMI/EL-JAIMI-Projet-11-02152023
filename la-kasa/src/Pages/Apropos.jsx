import React from "react";
import styles from "../Styles/apropos.module.css";
import Accordion from "../Components/Accordion";
import Banner from "../Components/Banner";
import Kalen from "../Assets/kalen.png";
import AboutData from "../AboutData.json";

function Apropos() {
	return (
		<>
			<main>
				<Banner image={Kalen} />
				<div className={styles.custom_accordion}>
					{AboutData.map((elt, idx) => (
						<Accordion key={idx} title={elt.title} children={elt.content} />
					))}
				</div>
			</main>
		</>
	);
}

export default Apropos;