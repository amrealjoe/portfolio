import React from 'react'
import SiteWrapper from "@components/Wrapper"
import ProjectTiles from "@components/ProjectTiles"
import styled from "styled-components"
import Title from "@tags/H1"
import Subtitle from "@tags/H2"
import Para from "@tags/Para"


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


function Banner(props) {
	return (
			<Container>
				<Header>
					<Title>{props.title}</Title>
					<Para>{props.body}</Para>
				</Header>
			</Container>
	)
}

export default Banner