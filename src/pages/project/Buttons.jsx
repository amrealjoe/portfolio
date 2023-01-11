import React from 'react'
import GithubIcon from "@icons/github.svg"
import ExternalIcon from "@icons/external.svg"
import LinkChip from "@components/LinkChip"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	gap: 12px;
	padding: 16px 0;
	/*justify-content: right;*/
`

function Buttons(props) {
	return (
		<Container>
		<LinkChip href={props.demo} target="_blank">
			<img src={ExternalIcon} /> Live Demo 
		</LinkChip>
		<LinkChip href={props.repo} target="_blank"> 
			<img src={GithubIcon} /> Repo
		</LinkChip>	
		</Container>
	)
}

export default Buttons