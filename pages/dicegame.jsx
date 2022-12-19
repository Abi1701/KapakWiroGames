import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../src/store/actions/authActions";
import {
  Btn,
  Button,
  Button5,
  Button82edge,
  Button82front,
  Button82pushable,
  Button82shadow,
  Container,
  Dice1,
  Dice2,
  Div,
  Footer,
  H1,
  LinkTo,
  Player,
  Root,
  Text,
  TextLink,
  TextScore,
  Win,
} from "../src/component/diceStyled";

export default function DiceGame() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.authReducer.profile);
  let ignore = true;
  useEffect(() => {
    if (ignore) fetchData();
    return () => {
      ignore = false;
    };
  }, []);
  const fetchData = async () => {
    await dispatch(getProfile());
  };
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
    } else if (randomNumber1 < randomNumber2) {
      setWin("Player 2 menang🚩");
      setScore(updateScore - 1);
      setScore2(updateScore2);
    } else {
      setWin("Seri");
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
            <Text>{!profile ? <H1> Player </H1> : <H1> {profile}</H1>}</Text>
            <TextScore>
              <H1>Score : {score}</H1>
            </TextScore>
            <Dice1>
              <Image
                width={300}
                height={300}
                src={img.rand1}
                alt="dice1"
                name="dice1"
              />
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
                <Button82shadow></Button82shadow>
                <Button82edge></Button82edge>
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
