import React, { useState, useEffect } from "react";
import SecondsCounter from './component/SecondsCounter.jsx'

//create your first component
const App = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
		  	setSeconds((seconds) => seconds + 1);
		}, 1000);

		return () => clearInterval(interval);
		
	  }, []);

	return (
		<div className="text-center">
			<SecondsCounter seconds={seconds} />
		</div>
	);
};

export default App;
