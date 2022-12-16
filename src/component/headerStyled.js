import styled from "styled-components";

export const NavContainer = styled.div`
background:black;
color:white;
align-items:baseline;
display: flex;
min-width:1440px
`
export const NavLogo = styled.div`
background:black;
color:white;
align-items:baseline;
display: flex;
justify-content: flex-start;
min-width:1440px
margin-top:1rem;
margin-left:2rem;
`
export const NavContainerContent = styled.div`
display:flex;
margin-left:45rem;
`
export const NavContent = styled.div`
text-decoration: none;
padding: 5px 1rem;
margin: 0 10px;
color: rgb(252, 228, 102);
position: relative;
&::Before{
content: '';
width:100%;
height:100%;
position: absolute;
top: 0;
left: 0;
box-sizing: border-box;
border-top: 2px solid white;
border-left: 2px solid white;
transition: all .4s;
}&::after{
  content: '';
width:100%;
height:100%;
position: absolute;
top: 0;
left: 0;
box-sizing: border-box;
border-top: 2px solid white;
border-left: 2px solid white;
transition: all .4s;
}&:hover:after{
  content: '';
  width:100%;
  height:100%;
  transform:rotate(180deg)
}&:hover:before{
  content: '';
  width:100%;
  height:100%;
  transform:rotate(180deg)
}
`
export const NavContents = styled.div`
text-decoration: none;
padding: 5px 1rem;
margin: 0 10px;
color: rgb(252, 228, 102);
position: relative;
&::Before{
content: '';
width:100%;
height:100%;
position: absolute;
top: 0;
left: 0;
box-sizing: border-box;
border-top: 2px solid white;
border-left: 2px solid white;
transition: all .4s;
}&::after{
  content: '';
width:100%;
height:100%;
position: absolute;
top: 0;
left: 0;
box-sizing: border-box;
border-top: 2px solid white;
border-left: 2px solid white;
transition: all .4s;
}&:hover:after{
  content: '';
  width:100%;
  height:100%;
  transform:rotate(180deg)
}&:hover:before{
  content: '';
  width:100%;
  height:100%;
  transform:rotate(180deg)
}
`

export const NavAuth = styled.h1`

`
export const NavTittle = styled.h1`
font-size:1.5em;
`