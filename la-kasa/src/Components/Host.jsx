import React from "react";
import styles from "../Styles/host.module.css";

function Host({ name, picture }) {
	const splitName = name.split(" ");
	return (
		<div className={styles.host}>
			<p>
				{splitName[0]}
				<br />
				{splitName[1]}
			</p>
			<img src={picture} alt="/" />
		</div>
	);
}

export default Host;