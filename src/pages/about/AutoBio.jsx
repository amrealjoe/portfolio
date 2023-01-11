import React from 'react'
import styled from "styled-components"

const Title = styled.h3`
	margin:  24px 0;
	font-size: 1.7rem;
	line-height: 1.25;
`

const Para = styled.p`
	font-size: 1.2rem;
`

const Divider = styled.hr`
	margin: 24px 0;
	border-color: #DEDEDE;
	border-style: solid;
`

const ImageBox = styled.div`
	margin: 24px;
	border-radius: 16px/16px;
	width: auto;
	height: 100px;
	border: solid red;
`


function AutoBio() {
	return (
		<Para>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et neque velit,
sequi voluptatum veniam ratione voluptate assumenda ipsa vero magnam eos
aspernatur sit eaque repellat qui debitis ad? Placeat? Lorem ipsum dolor sit
amet consectetur adipisicing elit. 
<Title>
	Debitis in molestiae iusto, error rem ratione
</Title>
laudantium a corrupti nam tempore, eligendi aut quisquam repudiandae? Aliquam
modi eligendi deserunt cumque quisquam libero nisi ea iusto iste? Temporibus
deserunt hic numquam ex officia, 
<Divider />
laboriosam optio quod porro nulla aut incidunt
libero? Tenetur, amet voluptas quas, deserunt adipisci voluptatem repellendus
cupiditate doloremque ut iste,
	<ImageBox ></ImageBox>
 distinctio inventore ipsum dicta id molestiae
provident? Corporis necessitatibus veritatis praesentium, dolore cupiditate
alias blanditiis ea sint odit laboriosam debitis, temporibus possimus porro quia
quidem, culpa quo voluptatum?
		</Para>
	)
}

export default AutoBio