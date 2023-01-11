import React from 'react'
import SiteWrapper from "@components/Wrapper"
import styled from "styled-components"
import Figure from "./Figure"
import Image from "./Image"
import AutoBio from "./AutoBio"
import Footer from "@components/Footer"
import setTitle from "@utils/setTitle"

let Avatar;

const ContentWrapper = styled.div`
	width: 90%;
	max-width: 800px;
	margin: 0 auto;
	display: flex;
	gap: 12px;
	padding-top: 24px;
	padding-bottom: 24px;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 12px;
	}
`

function About() {
	setTitle("About Me - Timothy T. Joe")
	return (
		<SiteWrapper>
			<ContentWrapper>
				<Figure>
					<Image />
				</Figure>
				<AutoBio />
			</ContentWrapper>
			<Footer />
		</SiteWrapper>
	)
}

export default About