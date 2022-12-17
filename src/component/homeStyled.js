import styled from "styled-components";
//page1
export const Container = styled.section`
background-color: black;
height: auto;
width:100%;
background-size: cover;
min-width: 1440px;
@media (max-width: 768px) {
  height: auto;
  width:100%;
  background-size: cover;
    }
`
export const BarContainer = styled.div`
display: flex;
position: absolute;
margin-left: 21%;
padding-top:3rem;
@media (max-width: 768px) {
    }
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: color 1s ease, border-color 0.7s ease,background-color 0.5s ease-in-out;
`
export const HomeContentTittle = styled.h1`

`
export const HomeBar = styled.div`
  color: white;
  opacity: 50%;
  transition:opacity 0.5s ease-in-out;
  &:hover{
    opacity: 100%;
  }&:focus{
    opacity: 100%;
  }&:active{
    opacity: 100%;
  }
`
export const BigCard = styled.div`
margin-top:5rem;
background-color: transparent;
width: 800px;
height: 500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const BigCardContent = styled.iframe`
position: absolute,
frameBorder: 0;
width="560"
height="315"
`
export const BigCardTittle = styled.h1`
position: absolute,
color:white;
`

export const ParagrafBigCard = styled.p`
font-size:20px;
color:black;
text-align:left;
margin-left:1rem;
margin-right:1rem;
font-weight:600;
color:white;
letter-spacing:1px;
`
export const GameListBotomCard = styled.div`
  width: 100%;
  height:300px;
  border-radius: 15px;
  display:flex;
  flex-direction:row;
  align-items:baseline;
  gap:100px;
  margin-left:17%;
`
export const BotomContent = styled.div`
  text-align: center;
  color:white;
  text-decoration: none;
  transition: color 1s ease, border-color 0.7s ease,background-color 0.5s ease-in;
  width: 300px;
  height: 150px;
  border-radius: 15px;
  margin-botom:2rem;
  &:hover{
    text-decoration: none;
    color: white;
    border-radius: 15px;
    background-color: black;
  }&:focus{
    text-decoration: none;
    color: white;
    border-radius: 15px;
    background-color: black;
  }&:active{
    text-decoration: none;
    color: white;
    border-radius: 15px;
    background-color: black;
  }
`
export const PictureBotomCard = styled.img`
  width: 100%;
  border-radius: 15px;
` 
//page2 = userChoice
export const GameList = styled.section`
background-image:  linear-gradient(30deg, #040303 12%, transparent 12.5%, transparent 87%, #040303 87.5%, #040303), linear-gradient(150deg, #040303 12%, transparent 12.5%, transparent 87%, #040303 87.5%, #040303), linear-gradient(30deg, #040303 12%, transparent 12.5%, transparent 87%, #040303 87.5%, #040303), linear-gradient(150deg, #040303 12%, transparent 12.5%, transparent 87%, #040303 87.5%, #040303), linear-gradient(60deg, rgba(4,3,3,0.5) 25%, transparent 25.5%, transparent 75%, rgba(4,3,3,0.5) 75%, rgba(4,3,3,0.5)), linear-gradient(60deg, rgba(4,3,3,0.5) 25%, transparent 25.5%, transparent 75%, rgba(4,3,3,0.5) 75%, rgba(4,3,3,0.5));
background-size: 64px 112px;
background-position: 0 0, 0 0, 32px 56px, 32px 56px, 0 0, 32px 56px;
background-color: #1c1b1b;
  background-attachment: fixed;
  height: 90vh;
  background-size: cover;
  min-width: 1440px;
`
export const FlipCard = styled.div`
background-color: transparent;
width: 400px;
height: 400px;
perspective: 500px;
justify-content: space-around;
margin-right: 2rem;
`
export const InnerCard = styled(FlipCard)`
&:hover{
  transform: rotateY(180deg);
}
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
`
export const FrontCard = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
border-radius: 16px;
color: white;
padding-top: 2rem;
`
export const BackCard = styled.div`
background-color: #2C2C2C;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23161616'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
transform: rotateY(180deg);
padding-top: 2rem;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
border-radius: 16px;
`
export const GameListContent = styled.div`
  display: flex;
  flex-direction: column;
` 
export const GameListTittle = styled.p`
  font-size: 2em;
  font-weight: 700;
  color: white;
  padding-left: 5rem;
`
export const GameListPicture = styled.img`
  width: 60%;
`
export const GamelistUser = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: row;
text-align: center;
color: inherit;
text-decoration: none;
transition: color 1s ease, border-color 0.7s ease,background-color 0.5s ease-in-out;
border-radius: 15px;
padding-left: 1rem;
`
export const GameListUserContent = styled.a`
margin-left: 2rem;
padding: 1.5rem;
text-align: center;
color: inherit;
text-decoration: none;
border-radius: 10px;
transition: color 1s ease, border-color 0.7s ease,background-color 0.5s ease-in-out;
width: 400px;
height: auto;
&:hover{
  color: white;
  border-color: #3A4750;
  width: 400px;
  height: auto;
  background-color: #2C2C2C;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23161616'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}&:active{
  color: white;
  border-color: #3A4750;
  width: 400px;
  height: auto;
  background-color: #2C2C2C;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23161616'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}&:focus{
  color: white;
  border-color: #3A4750;
  width: 400px;
  height: auto;
  background-color: #2C2C2C;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23161616'/%3E%3Cstop offset='1' stop-color='%232C2C2C'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
`
//page3 = column GameList Landing
export const GameListLanding = styled.section`
background-color: black;
height: auto;
background-size: cover;
min-width: 1440px;
`
export const GameListColumnGame = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: baseline;
gap:100px;
`
export const ColumnFlipCard = styled.div`
background-color: transparent;
width: 250px;
height: 250px;
perspective: 500px;
margin-top: 1rem;
justify-content: space-around;
margin-right: 2rem;
color:black;
`
export const ColumnInnerCard = styled(FlipCard)`
&:hover{
  transform: rotateY(180deg);
}
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
`
export const ColumnFrontCard = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
border-radius: 16px;
color: white;
padding-top: 2rem;
`
export const ColumnBackCard = styled.div`
background-color: #252525;
opacity: 0.8;
background-image:  linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(60deg, #00000077 25%, transparent 25.5%, transparent 75%, #00000077 75%, #00000077), linear-gradient(60deg, #00000077 25%, transparent 25.5%, transparent 75%, #00000077 75%, #00000077);
background-size: 20px 35px;
background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
color:black;
background-size: cover;
transform: rotateY(180deg);
padding-top: 2rem;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
border-radius: 16px;
`
export const GameListColumn = styled.div`
width: 300px;
padding-top: 2rem;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
color: inherit;
text-decoration: none;
transition: color 1s ease, border-color 0.7s ease,background-color 0.5s ease-in;
border-radius: 15px;
`
export const GameListMiddle = styled.div`
width: 300px;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
color: inherit;
text-decoration: none;
transition: color 1s ease, border-color 0.7s ease,background-color 0.5s ease-in;
border-radius: 15px;
padding-top:2rem;
`
export const GameListColumnContent = styled.div`
  text-decoration: none;
  border-radius: 15px;
  transition: color 1s ease, border-color 0.7s ease,background-color 0.5s ease-in;
 &:hover{
  text-decoration: none;
  color: black;
  border-radius: 15px;
  background-color: white;
  width:300px;
  margin-right:2rem;
  margin-left:2rem;
 }&:focus{
  text-decoration: none;
  color: white;
  border-radius: 15px;
  background-color: black;
 }&:after{
  text-decoration: none;
  color: white;
  border-radius: 15px;
  background-color: black;
 }
`
export const GameColumnListTittle = styled.h3`
text-align:center;
color:white;
`
export const GameTittles = styled.h3`
text-align:center;
`
export const Paragraf = styled.p`
font-size:14px;
color:black;
text-align:left;
margin-left:1rem;
margin-right:1rem;
font-weight:600;
color:white;
`
export const GameListColumnPicture = styled.img`
margin-top: 1rem;
border-radius: 15px;
width: 80%;
margin-left:2rem;
`
export const ButtonWrapper = styled.div`
position:relative;
padding-bottom:1rem;
padding-left:5rem;
margin-top:3rem;
&:hover{
  color: black;
}
`
export const ButtonGameList1 = styled.button`
background-color: black;
color: white;
transition: color 1s ease, border-color 0.7s ease,background-color 0.5s ease-in;
width:70px;
height: 30px;
border-radius: 15px;
&:hover{
  color: black;
  border-color: #3A4750;
  background-color: white;
  border-radius: 15px;
  width: 70px;
  height: 30px;
}&:focus{
  color: black;
  border-color: #3A4750;
  background-color: white;
  border-radius: 15px;
  width: 100px;
  height: 30px;
}&:active{
  color: black;
  border-color: #3A4750;
  background-color: white;
  border-radius: 15px;
  width: 100px;
  height: 30px;
}`

//page4 = promo page
export const PromoPage = styled.section`
height: auto;
background-color: black;
background-size: cover;
display: flex;
min-width: 1440px;
`
export const PromoContentContainer = styled.h1`
margin-left:25%;
`
export const PromoContent = styled.p`
color: white;
text-align: center;
`
export const PromoContents = styled.span`
color: red;
cursor: pointer;
transition:color 0.5s ease-in;
&:hover{
  color: white;
}&:focus{
  color: white;
}&:active{
  color: white;
}
`
//footerLandin
export const Footer = styled.section`
height: 35vh;
width:100%;
background-color: black;
background-size: cover;
display: flex;
min-width: 1440px;
`
export const ContentFooter = styled.div`
color: white;
position: absolute;
@media (max-width: 768px) {
  flex-direction: column;
  position: relative;
}
` 
export const ContentFooter1 = styled.div`
padding-top: 5%;
color: white;
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
text-align: right;
display: flex;
text-transform: uppercase;
color: #FFFFFF;
margin-left: 10rem;
flex-direction: row;
@media (max-width: 768px) {
  margin-left: 1rem;
  overflow:hidden;
}
`

export const FooterContent = styled.a`
text-decoration: none;
color: white;
margin-left: 4rem;
@media (max-width: 768px) {
  margin-left: 2rem;
  overflow:hidden;
  display:flex;
  flex-direction:column;
}
@media (max-width: 1024px) {
  margin-left: 3rem;
  overflow:hidden;
  display:flex;
  flex-direction:column;
}
`
export const Border = styled.div`
margin-left: 4rem;
`
export const FooterContent3 = styled.div`
display: flex;
`
export const FooterContents3 = styled.h1`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.5;
margin-left: 4rem;
`
export const FooterContents4 = styled.h1`
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
text-align: right;
letter-spacing: 0.1em;
text-transform: uppercase;
margin-left: 22.2rem;
color: #FFFFFF;
@media (max-width: 1024px) {
  margin-left: 25 rem;
}
`

