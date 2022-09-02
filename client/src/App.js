import React from 'react';
import { Router, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home';
import Profil from '../src/pages/Profil';
import Trending from '../src/pages/Trending';

 
const Index = ()=>{
	return(
	<Router>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/Profil" element={<Profil />}/>
			<Route path="/Trending" element={<Trending />}/>
 
		</Routes>
	</Router>
	);
};

export default Index;
