import React from 'react'
import styled from "styled-components"


const Container = styled.div`
	border-radius: 16px/16px;
	border: solid rgba(255,255,255,.09);
	width: 143.4px;
	height: 100px;
	position: relative;
	text-align: center;
	overflow: hidden;
	padding: 4px;
	background-color: #0A0A0A;

	&:hover > #sheet {
		transform: translateX(0);
	}

	@media (max-width: 768px) {
		width: 120px;
		height: 100px;
	}
`

const Image = styled.img`
	width: 50px;
	height: 50px;
	background-color: rgba(255,255,255,.04);
	border-radius: 20px/20px;
	overflow: hidden;
	object-fit: contain;
	/*padding-top: .4rem;*/

`
const Name = styled.h4`
	margin: 0;
	font-size: .8rem;
	letter-spacing: 1px;
`
const Sheet = styled.section`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	min-height: 50%;
	background-color: #111111;
	font-size: .8rem;
	letter-spacing: 1px;
	line-height: 1.2;
	transition: .3s ease-in;
	transform: translateY(200%);
	padding-top: 4px;
`

function Tile(props) {
	return (
		<Container>
			<Image src={props.icon}/>
			<Name>{props.name}</Name>
			<Sheet id="sheet">{props.definition}</Sheet>
		</Container>
	)
}

export default Tile