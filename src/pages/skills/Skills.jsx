import React from 'react'
import Banner from "@components/Banner"
import Wrapper from "@components/Wrapper"
import Container from "@components/Container"
import styled from "styled-components"
import Tile from "./Tile"
import SkillList from "@data/Skills.json"
import Footer from "@components/Footer"
import setTitle from "@utils/setTitle"



let title = "Skills & Tech Stacks"
let body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et neque velit, sequi voluptatum veniam ratione voluptate assumenda ipsa vero magnam eos aspernatur sit eaque repellat qui debitis ad? Placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in molestiae iusto, error rem ratione laudantium a corrupti nam tempore"

const Flexbox = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	padding-bottom: 12px;

	@media (max-width: 768px) {
		justify-content: center;
	}
`


function Skills() {
	setTitle("Skills & Tech Stacks - Timothy T. Joe")
	return (
		<Wrapper>
			<Container>
				<Banner title={title} body={body} />
				<Flexbox>
					{
					SkillList.map((skill, index) => (
						<Tile 
							key={index}
							icon={`/icons/${skill.icon}.svg`} 
							name={skill.name} 
							definition={skill.definition} />
						))
					}
				</Flexbox>
			</Container>
			<Footer />
		</Wrapper>
	)
}

export default Skills