import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Footer from "./components/footer";

// require('./css/main.css');
require("./css/index.scss");

ReactDOM.render(
	<div> 
		<Header />
		<Footer />
	</div>, 
	document.getElementById('root')
);