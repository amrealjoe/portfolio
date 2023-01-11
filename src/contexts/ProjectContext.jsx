import React, { createContext, useState } from 'react';
import {useParams, useLocation} from 'react-router-dom'
import capitalizeFirstLetter from "@utils/capitalizeFirstLetter"
import setTitle from "@utils/setTitle"

import Yonblee from "@data/projects/yonblee.json"
import Smschat from "@data/projects/smschat.json"
import Portfolio from "@data/projects/portfolio.json"

export const ProjectContext = createContext(null)

export const ProjectContextProvider = ({children}) => {
	let theProject, pathname;

	const {projectName} = useParams();
	pathname = useLocation().pathname.replace("/", "")
	pathname = capitalizeFirstLetter(pathname)
	setTitle(pathname + " - Project");

	if(pathname === "Yonblee") {
		theProject = Yonblee
	} else if (pathname === "Smschat") {
		theProject = Smschat
	} else if (pathname === "Portfolio") {
		theProject = Portfolio
	} else {
		theProject = Yonblee
	}

	const contexts = {
		name: theProject[0].name,
		about: theProject[0].about,
		purpose: theProject[0].purpose,
		abouttechstack: theProject[0].abouttechstack,
		techstack: theProject[0].techstack,
		screenshots: theProject[0].screenshots,
		url: theProject[0].url
	}
	return (
		<ProjectContext.Provider value={contexts}>
			{children}
		</ProjectContext.Provider>
	)
}

export default ProjectContext