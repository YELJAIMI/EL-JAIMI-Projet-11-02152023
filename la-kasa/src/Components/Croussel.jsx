import React, { useState } from "react";
import styles from "../Styles/caroussel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Carousel({ pictures }) {
	const [current, setCurrent] = useState(0);
	const length = pictures.length;

	function nextSlide() {
		// setCurrent(current === length - 1 ? 0 : current + 1);
		setCurrent((prevCurrent) => {
			return prevCurrent === length - 1 ? 0 : prevCurrent + 1;
		});
	}

	function prevSlide() {
		setCurrent((prevCurrent) => { 
			return prevCurrent === 0 ? length - 1 : current - 1;
		});
		}

	return (
		<>
			<div className={styles.carousel}>
				<button
					className={styles.prevSlide}
					onClick={() => {
						prevSlide();
					}}
				>
					<FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
				</button>
				<div className={styles.slide}>
					<img src={pictures[current]} alt="/"/>
				</div>
				<button
					className={styles.nextSlide}
					onClick={() => {
						nextSlide();
					}}
				>
					<FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
				</button>
			</div>
			<div className={styles.counter}>
					<span className={styles.current}>{current + 1}</span> /{" "}
					<span className={styles.total}>{length}</span>
			</div>
		</>
	);
}

export default Carousel;
