import React from 'react'
import Logosrc from "/favicon.svg"
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Anchor = styled.span`
	padding: 2px 6px;
	text-decoration: none;
	border-radius: 5px;
	& > a {
		text-decoration: none;
		color: #DEDEDE;
		font-weight: 600;
		font-size: .9rem;
	},
`

function _Link(props) {
	return (
		<Anchor>
			<Link to={props.to}>
				{props.label}
			</Link>
		</Anchor>
	)
}

export default _Link