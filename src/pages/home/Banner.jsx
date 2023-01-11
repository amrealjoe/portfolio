import React from 'react'
import styled from "styled-components"
import Title from "@tags/H1"
import Para from "@tags/Para"
// import Container from "./components/Container"
import Content from "./components/Content"

const Container = styled.div`
	min-height: 80vh;
	background-color: #0D0D0D;
	color: #DEDEDE;
	display: grid;
	place-items: center;
`

function Banner() {
	return (
		<Container>
			<Content>
				<Title>Hello, I'm Timothy T. Joe</Title>
				<Para> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et neque velit,
					sequi voluptatum veniam ratione voluptate assumenda ipsa vero magnam eos
					aspernatur sit eaque repellat qui debitis ad? Placeat? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Debitis in molestiae iusto, error rem ratione
					laudantium a corrupti nam tempore, eligendi aut quisquam repudiandae? Aliquam
					modi eligendi deserunt cumque quisquam libero nisi ea iusto iste? Temporibus
					deserunt hic numquam ex officia, laboriosam optio quod porro nulla aut incidunt
					libero? Tenetur, amet voluptas quas, deserunt adipisci voluptatem repellendus
					cupiditate doloremque ut iste. 
				</Para>
			</Content>
		</Container>
	)
}

export default Banner