import React from 'react'
import styled from "styled-components"
import yonblee from "@data/projects/yonblee.json"
import portfolio from "@data/projects/portfolio.json"
import smschat from "@data/projects/smschat.json"
import SlideShow from "react-simple-image-slider";
import "./styles.css"



function Slider(props) {
const thisProject = JSON.stringify(yonblee);
	const handleClick = (arg) => {
		alert(arg)
	} 
	return (
		< >
			<SlideShow
				width={850}
				height={330}
        		showBullets={true}
        		showNavs={true}
				images={props.images}
				autoPlay={true}
				onClick={(index, event)=>{alert(index)} }
			 />
		</>
	)
}

export default Slider