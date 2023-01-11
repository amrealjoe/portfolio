import React from 'react'
import Banner from "./Banner"
// import Tiles from "./Tiles"
import Footer from "@components/Footer"
import Tiles from "@components/ProjectTiles"
import setTitle from "@utils/setTitle"


function Home() {
	setTitle("Portfolio - Timothy T. Joe")
	return (
		<div>
			<Banner />
			<Tiles />
			<Footer />
		</div>
	)
}

export default Home