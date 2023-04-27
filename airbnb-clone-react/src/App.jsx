import React from "react"
import Card from "./components/Card.jsx"
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import data from './data.jsx'
const App = () => {
	const cards = data.map(items => {
		return(
			
			<Card  
			{...items}
			key={items.key}
			
			/>
		)
	}
		)
	return (
		
		<div className="container__main">
			<Navbar />
			<Hero />
			<section className="card-list">
				{cards}
			</section>
			{/* <Card /> */}
		</div>
	)
}

export default App
