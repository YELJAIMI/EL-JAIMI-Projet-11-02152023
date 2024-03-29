// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function useFetch(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [url]);

	return [data];
}

export default useFetch;