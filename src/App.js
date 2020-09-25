import React from 'react';
import './App.css';
import {Routes} from "./Routes/Routes"
// import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid'
import {Footer} from './Components/Footer'

function App() {
	return (
		<div>
			<Routes key = {uuidv4()}/>
			<Footer key = {uuidv4()}/>
		</div>
	);
}

export default App;
