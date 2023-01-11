import React, {useContext} from 'react'
import ProjectContext from "@context/ProjectContext"
import styled from "styled-components"
import Chip from "@components/Chip"
import Flexbox from "@components/Flexbox"
import Icon from "@components/Icon"
import Line from "@components/Line"
import Note from "@components/Note"
import SubTitle from "@components/SubTitle"

const Container = styled.article`
	font-size: 1.05rem;
	line-height: 1.45;
`
const Header = styled.header`
	border-left: 15px solid #D9D9D9;
	padding: 12px;
	background-color: #191919;
	border-radius: 3px;
	line-height: 1.25;
`
const Para = styled.p``



function Description(props) {
	const {about, purpose, abouttechstack, techstack} = useContext(ProjectContext)
	return (
		<Container>
			<Header>
				{about}
			</Header>
			<SubTitle> 
				Purpose
			</SubTitle>
			<Line />
				<Para>
					{purpose} 
				</Para>
			<SubTitle>
				Technology Stacks
			</SubTitle> 
			<Para>
				{abouttechstack}
			</Para>
			{/* <Line /> */}
			<Flexbox>
				{/* {alert(JSON.stringify(techstack))}  */}
				 { 
				 	techstack.map((tech, index) => ( 
				 	<Chip key={index}> 
				 		<Icon src={`/icons/${tech.icon}.svg`} /> {tech.name} 
				 	</Chip> )) 
				 }
			</Flexbox>
			<Para>
				laboriosam optio quod porro nulla aut incidunt
				libero? Tenetur, amet voluptas quas, laboriosam optio quod porro nulla aut incidunt
				libero? Tenetur, amet voluptas quas, laboriosam optio quod porro nulla aut incidunt
				libero? Tenetur, amet voluptas quas, 
			</Para>
		</Container>
	)
}

export default Description