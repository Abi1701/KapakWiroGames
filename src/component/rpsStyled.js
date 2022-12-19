import styled from "styled-components";

export const Container = styled.div`
background:black;
background-size: cover;
height: 100vh;
width: 100%;
display: flex;
`
export const GameContainer = styled.div`
margin-left:15%;
`
export const PlayerResult = styled.div`
margin-top:4rem;
margin-left:15rem;
position:absolute;
`
export const PlayerChoice = styled.div`
display:flex;
flex-direction: column;
width: 8%;
margin-top:10rem;
margin-left:16rem;
position:absolute;
cursor:pointer;
gap:50px;
`
export const PlayerChoices = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
cursor:pointer;
&:hover{
background-image:  linear-gradient(30deg, #040303 12%, transparent 12.5%, transparent 87%, #040303 87.5%, #040303), linear-gradient(150deg, #040303 12%, transparent 12.5%, transparent 87%, #040303 87.5%, #040303), linear-gradient(30deg, #040303 12%, transparent 12.5%, transparent 87%, #040303 87.5%, #040303), linear-gradient(150deg, #040303 12%, transparent 12.5%, transparent 87%, #040303 87.5%, #040303), linear-gradient(60deg, rgba(4,3,3,0.5) 25%, transparent 25.5%, transparent 75%, rgba(4,3,3,0.5) 75%, rgba(4,3,3,0.5)), linear-gradient(60deg, rgba(4,3,3,0.5) 25%, transparent 25.5%, transparent 75%, rgba(4,3,3,0.5) 75%, rgba(4,3,3,0.5));
background-size: 64px 112px;
background-position: 0 0, 0 0, 32px 56px, 32px 56px, 0 0, 32px 56px;
background-color: #1c1b1b;
background-attachment: fixed;
width:150px;
height:150px;
border-radius:15px;
}
`
export const MiddleContent = styled.div`
font-size:2em;
margin-top:23rem;
margin-left:28rem;
position:absolute;
color:white;
`
export const MiddleContent2 = styled.div`
font-size:2em;
margin-top:25rem;
margin-left:27rem;
position:absolute;
`
export const ComResult = styled.div`
margin-top:4rem;
margin-left:48rem;
position:absolute;
`
export const ComChoice = styled.div`
display:flex;
flex-direction: column;
width: 6%;
margin-top:20rem;
margin-left:47rem;
position:absolute;
`
export const ComChoices = styled.div`
display:flex;
flex-direction: column;
margin-top:3rem;
font-size:1rem;
color:black;
`
export const Refresh = styled.div`
margin-top:34rem;
margin-left:37rem;
position:absolute;
`
export const H1 = styled.div`
font-size: 2em;
color:white;
`
