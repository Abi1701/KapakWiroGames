import Image from "next/image";
import { Refresh } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {
  ComChoice,
  ComChoices,
  ComResult,
  Container,
  H1,
  MiddleContent, PlayerChoice,
  PlayerChoices,
  PlayerResult,
} from "../styles/styledRps";
import Batu from "./../public/assets/Batu.svg";
import Gunting from "./../public/assets/Gunting.svg";
import Kertas from "./../public/assets/Kertas.svg";
import withAuth from "../src/withAuth";

 function Game() {
  const profile = useSelector((state) => state.authReducer.profile)
  const [userChoice, setUserChoice] = useState("");
  const [img, setImg] = useState({
    random: require("../public/assets/Batu.svg"),
  });
  const [computerChoice, setComputerChoice] = useState("Batu");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
  const choices = ["Batu", "Kertas", "Gunting"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setImg({
      random: require(`../public/assets/${randomChoice}.svg`),
    });
    setComputerChoice(randomChoice);
  };
  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    async function fetchData() {
      const comboMoves = userChoice + computerChoice;
      if (userPoints <= 10 && computerPoints <= 10) {
        if (
          comboMoves === "GuntingKertas" ||
          comboMoves === "BatuGunting" ||
          comboMoves === "KertasBatu"
        ) {
          const updatedUserPoints = userPoints + 1;
          setUserPoints(updatedUserPoints);
          setTurnResult("User Win!");
          if (updatedUserPoints === 1) {
            setResult("User Wins");
            const gameOff = true;
            setGameOver(gameOff);
          }
        } else if (
          comboMoves === "KertasGunting" ||
          comboMoves === "GuntingBatu" ||
          comboMoves === "KertasBatu"
        ) {
          const updatedComputerPoints = computerPoints + 1;
          setComputerPoints(updatedComputerPoints);
          setTurnResult("Computer Win!");
          if (updatedComputerPoints === 1) {
            setResult("Computer Wins");
            const gameOff = true;
            setGameOver(gameOff);
          }
        } else {
          setTurnResult("Draw");
        }
      }
    }
    fetchData();
  }, [computerChoice, userChoice]);
  return (
    <Container>
      <PlayerResult>
        <H1 profile={profile?.username}> Player: {userPoints} </H1>
      </PlayerResult>
      {choices.map((choice, index) => (
        <PlayerChoice
          key={index}
          onClick={() => handleClick(choice)}
          disabled={gameOver}
        >
          <PlayerChoices>
            <Image src={Gunting} width={100} alt="Gunting" name="Gunting" />
          </PlayerChoices>
          <PlayerChoices>
            <Image src={Batu} width={100} alt="Batu" name="Batu" />
          </PlayerChoices>
          <PlayerChoices>
            <Image src={Kertas} width={100} alt="Kertas" name="Kertas" />
          </PlayerChoices>
        </PlayerChoice>
      ))}
      <MiddleContent>{turnResult}</MiddleContent>
      {/* <MiddleContent2>{result}</MiddleContent2> */}
      <ComResult>
        <H1> Computer: {computerPoints} </H1>
      </ComResult>
      <ComChoice>
        <Image src={img.random} alt="Batu" name="Batu" />
        <ComChoices> {computerChoice} </ComChoices>
      </ComChoice>
      {gameOver && (
        <Refresh onClick={() => reset()}>
          <Refresh fontSize="large" />
        </Refresh>
      )}
    </Container>
  );
}
export default withAuth(Game)