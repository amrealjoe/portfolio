import React from 'react'
import styled from "styled-components"

const LinkChip = styled.a`
	display: flex;
	gap: 12px;
	align-items: center;
	justify-content: center;
	padding: 8px 16px;
	font-weight: bold;
	border: solid red;
	border-radius: 17px;
	color: #DEDEDE;
	text-decoration: none;
	border-color: #191919;
	background-color: black;
	min-width: 110px;

	& > * {
		margin-right: 8px
	}
`

export default LinkChip
