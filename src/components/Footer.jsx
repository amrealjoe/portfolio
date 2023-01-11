import React from 'react'
import styled from "styled-components"
import Github from "@icons/external.svg"
import Email from "@icons/email.svg"
import Facebook from "@icons/facebook.svg"
import Twitter from "@icons/twitter.svg"
import Linkedin from "@icons/linkedin.svg"
import ReactIcon from "@icons/react.svg"
import vite from "@icons/vite.svg"
import Nodejs from "@icons/nodejs.svg"
import Javascript from "@icons/javascript.svg"
import css3 from "@icons/css3.svg"
import html5 from "@icons/html5.svg"
import Phone from "@icons/phone.svg"
import RRDOM from "@icons/rrdom.svg"

const Container = styled.div`
	min-height: 350px;
	background-color: #0D0D0D;
	display: grid;
	place-items: center;
	align-content: center;
	color: #DEDEDE;
	border-top: solid black;
`

const Section = styled.section`
	margin-bottom: 12px
`
const Title = styled.h3`
	text-align: center;
	color: #A6A6A6;
`
const Anchor = styled.a`
	display: grid;
	place-items:center;
	min-width: 50px;
	min-height: 50px;
	border-radius: 20px/20px;
	margin: 6px;
	border: solid #111111;

	&:hover {
		background-color: #404040;
	}

`
const Image = styled.img`
	min-width: 35px;
	min-height: 35px;
`
const Flexbox = styled.div`
	display: flex;
`



function Footer() {
	return (
		<Container>
			
			<Section>
				<Title>Get In Touch:</Title>
				<Flexbox>
					<Anchor href="https://www.github.com/timtheme"><Image src={`./${Github}`} /></Anchor>
					<Anchor href="https://www.linkedin.com/in/timothytjoe"><Image src={Linkedin} /></Anchor>
					<Anchor href="https://www.twitter.com/realinary"><Image src={Twitter} /></Anchor>
					<Anchor href="mailto:timtheme@yahoo.com"><Image src={Email} /></Anchor>
					<Anchor href="tel:+2310770934646"><Image src={Phone} /></Anchor>
				</Flexbox>
			</Section>

			<Section>
				<Title>Built with:</Title>
				<Flexbox>
					<Anchor title="Vite bundler"><Image  src={vite} /></Anchor>
					<Anchor title="Nodejs - Javascript Runtime"><Image src={Nodejs} /></Anchor>
					<Anchor title="Reactjs - UI Library"><Image src={ReactIcon} /></Anchor>
					<Anchor title="Javascript - Programming langage"><Image src={Javascript} /></Anchor>
					<Anchor title="React Router DOM"><Image src={RRDOM} /></Anchor>
				</Flexbox>
			</Section>
		</Container>
	)
}

export default Footer