import React from 'react'
import SiteWrapper from "@components/Wrapper"
import ProjectTiles from "@components/ProjectTiles"
import styled from "styled-components"
import Title from "@tags/H1"
import Subtitle from "@tags/H2"
import Para from "@tags/Para"
import setTitle from "@utils/setTitle"


const Container = styled.div`
	width: 90%;
	max-width: 800px;
	margin: 0 auto;
	padding-top: 24px;
	padding-bottom: 24px;
	@media (max-width: 768px) {
	}
`

const Header = styled.header`
	min-height: 250px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`	


function Projects() {
	setTitle("Projects - Timothy T. Joe")
	return (
		<SiteWrapper>
			<Container>
				<Header>
					<Title>Projects</Title>
					<Para>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et neque velit,
						sequi voluptatum veniam ratione voluptate assumenda ipsa vero magnam eos
						aspernatur sit eaque repellat qui debitis ad? Placeat? Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Debitis in molestiae iusto, error rem ratione
						laudantium a corrupti nam tempore
					</Para>
				</Header>
			</Container>
			<ProjectTiles />
		</SiteWrapper>
	)
}

export default Projects