//import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Styles/location.module.css";
import Carousel from "../Components/Croussel";
import Tags from "../Components/Tags";
import Host from "../Components/Host";
import Rating from "../Components/Rating";
import Accordion from "../Components/Accordion";
import { Navigate } from "react-router-dom";

function LocationInfo({ locations }) {
	const { id } = useParams();

	const location = locations.filter((location) => location.id === id).shift();

	if (location === undefined) {
		return <Navigate to="/404" />;
	}

	return (
		<>
			<main>
				<div>
					<Carousel pictures={location.pictures} />
					<section>
						<div className={styles.description}>
							<div>
								<h2>{location.title}</h2>
								<h3>{location.location}</h3>
								<Tags tags={location.tags} />
							</div>
							<div className={styles.host}>
								<Host name={location.host.name} picture={location.host.picture} />
								<Rating rating={location.rating} />
							</div>
						</div>
						<div className={styles.custom_accordion}>
							<Accordion title="Description">{location.description}</Accordion>
							<Accordion title="Équipements">
								{location.equipments.map((elt, idx) => (
									<li key={idx}>{elt}</li>
								))}
							</Accordion>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}

export default LocationInfo;
