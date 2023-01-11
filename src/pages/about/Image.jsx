import styled from "styled-components"

const ImageTag = styled.img`
	width: 100%;
	height: 100%;
`
function Image() {
	return (
		<>
			<ImageTag src={"timothy.svg"} alt="Timothy T. Joe" />
		</>
	)
}

export default Image