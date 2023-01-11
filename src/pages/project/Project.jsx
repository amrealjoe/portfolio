import React, {useState} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import capitalizeFirstLetter from "@utils/capitalizeFirstLetter"
import setTitle from "@utils/setTitle"
import Wrapper from "@components/Wrapper"
import Container from "@components/Container"
import Header from "./Header"
import Buttons from "./Buttons"
import Description from "./Description"
import Footer from "@components/Footer"
import {ProjectContextProvider} from"@context/ProjectContext"

// import Yonblee from "@data/projects/yonblee.json"
// import Smschat from "@data/projects/smschat.json"
// import Portfolio from "@data/projects/portfolio.json"



function Project() {
// 	let theProject, pathname;
// 
// 	const {projectName} = useParams();
// 	pathname = useLocation().pathname.replace("/", "")
// 	pathname = capitalizeFirstLetter(pathname)
// 	setTitle(pathname + " - Project");
// 
// 	if(pathname === "Yonblee") {
// 		theProject = Yonblee
// 	} else if (pathname === "Smschat") {
// 		theProject = Smschat
// 	} else if (pathname === "Portfolio") {
// 		theProject = Portfolio
// 	}

	return (
		<ProjectContextProvider>
		<Wrapper>
			<Container>
				<Header  />
				<Buttons /> 
				<Description />
			</Container>
			{/* {alert(JSON.stringify(theProject))} */}
			<Footer />
		</Wrapper>
		</ProjectContextProvider>

	)
}

export default Project