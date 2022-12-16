import React, { useState } from "react";
import Image from "next/image";
import {Btn,Button,Button5,Button82edge,Button82front,Button82pushable,Button82shadow,Container,Dice1,Dice2,Div,Footer,H1,LinkTo,Player,Root,Text,TextLink,TextScore,Win} from "../src/component/diceStyled";

export default function DiceGame() {
  // const {id} = useParams()
  const [img, setImg] = useState({
    rand1: require("./../public/assets/dice6.png"),
    rand2: require("./../public/assets/dice6.png"),
  });
  const [win, setWin] = useState("Roll the dice!");
  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const clickButton = async () => {
    const randomNumber1 = Math.floor(Math.random() * 6 + 1);
    const randomNumber2 = Math.floor(Math.random() * 6 + 1);

    setImg({
      rand1: require(`./../public/assets/dice${randomNumber1}.png`),
      rand2: require(`./../public/assets/dice${randomNumber2}.png`),
    });

    const updateScore = score + 1;
    const updateScore2 = score2 + 1;
    if (randomNumber1 > randomNumber2) {
      if (score && score2) setWin("🚩Player 1 menang");
      setScore(updateScore);
      setScore2(updateScore2 - 1);
      //  await axios.post(`/score/create/${id}`, {
      //   score: "WIN"
      // })
    } else if (randomNumber1 < randomNumber2) {
      setWin("Player 2 menang🚩");
      setScore(updateScore - 1);
      setScore2(updateScore2);
      // await axios.post(`/score/create/${id}`, {
      //   score: "LOSE",
      // });
    } else {
      setWin("Seri");
      // await axios.post(`/score/create/${id}`, {
      //   score: "DRAW",
      // });
    }
  };
  return (
      <Root>
        <Container>
        <Win>
          <H1>{win}</H1>
        </Win>
        <Player>
          <Div>
            <Text>
              <H1>Player 1</H1>
            </Text>
            <TextScore>
              <H1>Score : </H1>
            </TextScore>
            <Dice1>
              <Image width={300} height={300} src={img.rand1} alt="dice1" name="dice1" />
            </Dice1>
          </Div>
          <Div>
            <Text>
              <H1>Player 2</H1>
            </Text>
            <TextScore>
              <H1>Score : {score2}</H1>
            </TextScore>
            <Dice2>
              <Image width={300} height={300} src={img.rand2} alt="dice2" />
            </Dice2>
          </Div>
        </Player>
        <Button onClick={() => clickButton()}>
          <Btn>
                <Button5>
                <Button82pushable>
                  <Button82shadow>
                    
                  </Button82shadow>
                  <Button82edge>
                    
                  </Button82edge>
                  <Button82front>
                    <H1> Roll The Dice </H1>
                  </Button82front>
              </Button82pushable>
                </Button5>
          </Btn>
        </Button>
        <Footer>www 🎲 App Binar 🎲 com</Footer>
        </Container>
      </Root>
  );
}
