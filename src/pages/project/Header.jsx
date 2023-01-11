import React, {useContext} from 'react'
import Slider from "./Slider"
import SubTitle from "@components/SubTitle"
import Space from "@components/Space"
import ProjectContext from "@context/ProjectContext"
import ImageGallery from 'react-image-gallery';
import SmartSlider from "react-smart-slider";


function Header(props) {
	const {name, screenshots} = useContext(ProjectContext)

	return (
		// new Splide( '.splide' ).mount();
		<>
			 <SmartSlider 
			 	slides={screenshots} 
			 	buttonShape="round" 
			 	autoSlide={true}
			 	height={324}
			 	showIndicators={true}
			 	autoSlideInterval={5000}
			 /> 
			 <Space /> 
			 <SubTitle> {name}</SubTitle> 
		</>
	)
}

export default Header