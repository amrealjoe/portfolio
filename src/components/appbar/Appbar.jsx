import React from 'react'
import Container from './Container'
import Logo from "./Logo"
// import {Link} from "react-router-dom"
import Link from "./Link"


const MenuItems = [
	{id: 1, name: "About Me", href: "about"},
	{id: 2, name: "Projects", href: "projects"},
	{id: 3, name: "Skills", href: "skills"},
	{id: 4, name: "Resume", href: 'resume'},
]

function Appbar() {
	return (
		<Container>
			<Logo />
			<div>
				{
					MenuItems.map((item) => (
						<Link to={`/${item.href}`} key={item.id} label={item.name}/>))
				}
			</div>
		</Container>
	)
}

export default Appbar