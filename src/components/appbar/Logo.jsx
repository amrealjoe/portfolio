import React from 'react'
import Logosrc from "/favicon.svg"
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Image = styled.img`
	max-width: 50px;
	max-height: 50px;
`

function Logo() {
	return (
		<Link to="/">
			<Image src={Logosrc}/>
		</Link>
	)
}

export default Logo