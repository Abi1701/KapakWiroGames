import styled from "styled-components";

export const ContainerPage = styled.section`
	display: flex;
	background-color: black;
	height: 100vh;
	width: 100%;
	background-size: cover;
	min-width: 1440px;
	@media (max-width: 768px) {
		height: 100vh;
		width: 100%;
		background-size: cover;
	}
`;
export const ContentContainer = styled.div`
	gap: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ProfileContent = styled.div`
	width: 700px;
	height: 400px;
	margin-left: 10%;
	margin-top: 5%;
	border-radius: 15px;
	background-color: black;
	display: flex;
	flex-direction: column;
	gap: 50px;
`;
export const DataProfile = styled.input`
	margin-right: $ruler/2;
	box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
	width: 100%;
	box-sizing: border-box;
	transition: all 0.2s ease-in-out;
	appearance: none;
	-webkit-appearance: none;
`;
