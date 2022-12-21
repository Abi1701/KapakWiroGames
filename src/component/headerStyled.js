import styled from "styled-components";

export const NavContainer = styled.div`
	background: black;
	color: white;
	display: flex;
	min-width: 1280px;
	@media (max-width: 768px) {
	}
`;
export const NavLogo = styled.div`
	color: white;
	display: flex;
	justify-content: flex-start;
	margin-left: 2rem;
	@media (max-width: 768px) {
		font-size: 2em;
	}
`;
export const NavContainerContent = styled.div`
	display: flex;
	margin-left: 50rem;
	@media (max-width: 768px) {
		width: 1000px;
		font-size: 2em;
		margin-left: 20rem;
	}
	@media (min-width: 1024px) {
		margin-left: 38rem;
	}
`;
export const NavContent = styled.div`
	padding-top: 0.5rem;
	margin-right: 2rem;
	margin-left: 2rem;
`;
export const NavContents = styled.div`
	padding-top: 0.5rem;
	margin-left: 2rem;
	margin-right: 1rem;
`;

export const NavAuth = styled.h1``;
export const NavTittle = styled.h1`
	font-size: 1.5em;
	cursor: pointer;
`;
