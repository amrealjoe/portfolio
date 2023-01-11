import styled from "styled-components"

const Figure = styled.div`
	width: 250px;
	min-width: 250px;
	height: 250px;
	min-height: 250px;
	border-radius: 40px/40px;
	overflow: hidden;
	object-fit: contain;

	@media (max-width: 768px) {
		border-radius: 16px/16px;
	}
`

export default Figure