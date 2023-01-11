import React from 'react'
import styled from "styled-components"
import Title from "@tags/H1"
import GithubIcon from "@icons/github.svg"
import ExternalIcon from "@icons/external.svg"
import LinkChip from "@components/LinkChip"
import Projects from "@data/Projects.json"

const Container = styled.div`
	min-height: 80vh;
	background-color: black;
	color: #DEDEDE;
	display: grid;
	place-items: center;
	align-content: flex-start;
	padding-bottom: 4rem;
	padding-top: 4rem;
`

const Content = styled.div`
	width: 90%;
	max-width: 860px;

`


const AnchorCard = styled.a`
	display: flex;
	text-decoration: none;
	color: #DEDEDE;
	border: solid black;
	padding: 12px;
	background-color: #0A0A0A;
	border-radius: 26px/24px;
	gap: 12px;
	margin-bottom: 17px;

	&:hover {
		border-color:#111111;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		padding-bottom: 50px;
	}
`

const ImageBlock = styled.div`
	max-width: 250px;
	height: 250px;
	border-radius: 26px/24px;
	overflow: hidden;
	flex: 2;
`

const Image = styled.img`	
	width: 100%;
`

const ContentBlock = styled.div`
	width: 100%;
	flex: 3
`

const SubTitle = styled.h2`
	margin: 6px 0;
	line-height: 1.25;
	font-size: 1.6rem
`

const Caption = styled.p`
	font-size: 1rem
`

const Footer = styled.footer`
	position: absolute;
	right: 12px;
	bottom: 12px;
	display: flex;
	gap: 12px;

	@media (max-width: 768px) {
		margin: 0 auto;
		justify-content: center;
		right: inherit;
		width: 98%;
	}
`

const WrapperBlock = styled.div`
	position: relative;
`

const Space = styled.div`
	padding-top: 2rem;
`





function Tiles(props) {
	return (
		<Container>
			<Content>
				<Title>Projects</Title>
				<Space />
				{
				Projects.map((item, index) => (
				<WrapperBlock key={`${++index}`}>
					<AnchorCard href={`/${item.url}`}>
						<ImageBlock>
							<Image src={`${item.image}.svg`} alt={item.image}/>
						</ImageBlock>
						<ContentBlock>
							<SubTitle>{item.name}</SubTitle>
							<Caption >{item.description} </Caption>
						</ContentBlock>
					</AnchorCard>
					<Footer>
						<LinkChip href={`/logo/${item.demo}`} target="_blank">
							<img src={ExternalIcon} />
							Live Demo
						</LinkChip>
						<LinkChip href={`/${item.repo}`}>
							<img src={GithubIcon} />
							Repo
						</LinkChip>
					</Footer>
				</WrapperBlock>
					))
				}
			</Content>
		</Container>
	)
}

export default Tiles