import React from "react";
import styles from "../Styles/banner.module.css";

function Banner({ image, children }) {
	return (
		<div className={styles.banner}>
			<img src={image} alt="/" />
			{children}
		</div>
	);
}

export default Banner;