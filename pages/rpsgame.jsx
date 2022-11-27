import { ArrowBackIos, Refresh } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import * as Components from "./../styles/styled";
import Batu from "./../public/assets/Batu.png";
import Gunting from "./../public/assets/Gunting.png";
import Kertas from "./../public/assets/Kertas.png";
import Image from "next/image"
import Link from "next/link"
import { useParams } from "react-router-dom";
import axios from './../src/utility/axios'

export default function Game() {
  const {id} = useParams()
  const [userChoice, setUserChoice] = useState("");
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
    setComputerChoice(randomChoice);
  };

  console.log(computerChoice);
  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    async function fetchData(){
      const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "GuntingKertas" ||
        comboMoves === "BatuGunting" ||
        comboMoves === "KertasBatu"
      ) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User Win!");
        await axios.post(`/score/create/${id}`, {
          score: "WIN"
        })
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
        await axios.post(`/score/create/${id}`, {
          score: "LOSE",
        });
        if (updatedComputerPoints === 1) {
          setResult("Computer Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      } else {
        setTurnResult("Draw");
        await axios.post(`/score/create/${id}`, {
          score: "DRAW",
        });
      }
    }}
    fetchData();}, [computerChoice, userChoice]);
  return (
    <>
      <Components.Root>
        <Components.Navbar>
          <Components.NavbarContents1>
            <Link href="#">
            <ArrowBackIos fontSize="large"/>
            </Link>
          </Components.NavbarContents1>
          <Components.NavbarContents2><Link href="#">Home Page</Link></Components.NavbarContents2>
        </Components.Navbar>
        <Components.PlayerResult><h1> Player: {userPoints} </h1></Components.PlayerResult>
        {choices.map((choice, index) => (
          <Components.PlayerChoice
            key={index}
            onClick={() => handleClick(choice)}
            disabled={gameOver}
          >
            <Components.PlayerChoices>
              <Image src={Gunting} width={100} alt="Gunting" name="Gunting" />
            </Components.PlayerChoices>
            <Components.PlayerChoices>
              <Image src={Batu} width={100} alt="Batu" name="Batu" />
            </Components.PlayerChoices>
            <Components.PlayerChoices>
              <Image src={Kertas} width={100} alt="Kertas" name="Kertas" />
            </Components.PlayerChoices>
          </Components.PlayerChoice>
        ))}
        <Components.MiddleContent>{turnResult}</Components.MiddleContent>
        <Components.MiddleContent2>{result}</Components.MiddleContent2>
        <Components.ComResult><h1> Computer: {computerPoints} </h1></Components.ComResult>
        <Components.ComChoice>
          <Components.ComChoices> {computerChoice} </Components.ComChoices>
        </Components.ComChoice>
        {gameOver && (
          <Components.Refresh onClick={() => reset()}>
            <Refresh fontSize="large" />
          </Components.Refresh>
        )}
      </Components.Root>
    </>
  );
}
