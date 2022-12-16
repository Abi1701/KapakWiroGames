import { VerifiedUser } from "@mui/icons-material";
import { Divider, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import {BorderImg} from "../public/assets/border.svg"
import {
  GameTittles,
  Paragraf,
  Container,
  HomeContent,
  BarContainer,
  BigCard,
  Border,
  ButtonGameList1,
  ContentFooter,
  ContentFooter1,
  Footer,
  FooterContent,
  FooterContent3,
  FooterContents3,
  FooterContents4,
  GameList,
  GameListColumn,
  GameListColumnGame,
  GameListContent,
  GameListLanding,
  GameListMiddle,
  GameListRightContent,
  GameListTittle,
  GameColumnListTittle,
  HomeBar,
  PromoContent,
  PromoContents,
  PromoPage,
  RightContent,
  SearchBar,
  GamelistUser,
  ButtonWrapper,
  FlipCard,
  InnerCard,
  FrontCard,
  BackCard,
  ColumnFlipCard,
  ColumnInnerCard,
  ColumnFrontCard,
  ColumnBackCard,
  GameListBotomCard,
  BotomContent,
  PromoContentContainer,
  HomeContentTittle,
  BigFlipCard,
  BigInnerCard,
  BigFrontCard,
  BigBackCard,
  ParagrafBigCard,
} from "../src/component/homeStyled";
export default function Home() {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "black",
      borderColor: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
        // color: "white",
      },
      "&:hover fieldset": {
        border: "none",
        color: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "none",
        color: "white",
      },
    },
  });

  return (
    <>
      <Container>
        <BarContainer>
          <HomeBar>
            <HomeContentTittle>Kapak Wiro</HomeContentTittle>
          </HomeBar>
          <Divider
            sx={{ height: 30, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <HomeBar>
            <HomeContentTittle>Best Game</HomeContentTittle>
          </HomeBar>
          <Divider
            sx={{ height: 30, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <HomeBar>
            <HomeContentTittle>Game List</HomeContentTittle>
          </HomeBar>
        </BarContainer>
        <HomeContent>
          <BigFlipCard>
            <BigInnerCard>
              <BigFrontCard>
                <Image
                  width={600}
                  height={300}
                  src="/assets/SM.jpg"
                  alt="dice"
                />
                <h3>Spider Man</h3>
              </BigFrontCard>
              <BigBackCard>
                <ParagrafBigCard>
                  In the latest adventure in the Marvel Spider-Man universe,
                  teenager Miles Morales is adjusting to his new home while
                  following in the footsteps of his mentor, Peter Parker, as a
                  new Spider-Man. But when a fierce power struggle threatens to
                  destroy his new home, the aspiring hero realizes that with
                  great power, there must also come great responsibility. To
                  save all of Marvel New York, Miles must take up the mantle of
                  Spider-Man and own it.
                </ParagrafBigCard>
              </BigBackCard>
            </BigInnerCard>
          </BigFlipCard>
        </HomeContent>
        <GameListBotomCard>
          <BotomContent>
            <Image width={200} height={100} src="/assets/AC.png" alt="RPS" />
            <p>Assasins Creed Brother Hood</p>
          </BotomContent>
          <BotomContent>
            <Image width={200} height={100} src="/assets/BF.jpg" alt="RPS" />
            <p>BattleField : 2042</p>
          </BotomContent>
          <BotomContent>
            <Image width={200} height={100} src="/assets/SW.png" alt="RPS" />
            <p>Star Wars : Jedi Fallen Order</p>
          </BotomContent>
        </GameListBotomCard>
      </Container>
      <GameList>
        <GameListContent>
          <GameListTittle>
            Most Played by Users <VerifiedUser />{" "}
          </GameListTittle>
          <GamelistUser>
            <FlipCard href="/dicegame">
              <InnerCard>
                <FrontCard>
                  <Image
                    width={300}
                    height={300}
                    src="/assets/dice.logo.png"
                    alt="dice"
                  />
                  <h3>DICE</h3>
                </FrontCard>
                <BackCard>
                  <Paragraf>
                    Play The Game <br /> And Be the Best Player
                  </Paragraf>
                </BackCard>
              </InnerCard>
            </FlipCard>
            <FlipCard href="/dicegame">
              <InnerCard>
                <FrontCard>
                  <Image
                    width={300}
                    height={300}
                    src="/assets/RPS.logo.png"
                    alt="RPS"
                  />
                  <h3>Rock Papper Scissors</h3>
                </FrontCard>
                <BackCard>
                  <Paragraf>
                    Backgammon is one of the oldest games in the world with
                    roots going back over 5,000 years to ancient Persia and
                    Mesopotamia. It is the favorite game of the famous investor
                    Warren Buffet. The game combines the elements of both luck
                    and skill.
                  </Paragraf>
                </BackCard>
              </InnerCard>
            </FlipCard>
          </GamelistUser>
        </GameListContent>
      </GameList>
      <GameListLanding>
        <GameListColumnGame>
          <GameListColumn>
            <GameColumnListTittle>Adventures RPG</GameColumnListTittle>
            <ColumnFlipCard href="/dicegame">
              <ColumnInnerCard>
                <ColumnFrontCard>
                  <Image
                    width={300}
                    height={150}
                    src="/assets/LOS.jpg"
                    alt="games"
                  />
                  <GameTittles>Last of Us</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                    The Last of Us is a 2013 action-adventure game developed by
                    Naughty Dog and published by Sony Computer Entertainment.
                  </Paragraf>
                  <ButtonWrapper>
                    <ButtonGameList1>Game</ButtonGameList1>
                    <ButtonGameList1>Detail</ButtonGameList1>
                  </ButtonWrapper>
                </ColumnBackCard>
              </ColumnInnerCard>
            </ColumnFlipCard>
            <ColumnFlipCard href="/dicegame">
              <ColumnInnerCard>
                <ColumnFrontCard>
                  <Image
                    width={300}
                    height={150}
                    src="/assets/CP.jpeg"
                    alt="games"
                  />
                  <GameTittles>Cyberpunk 2077</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                    Players assume the first-person perspective of a
                    customisable mercenary known as V.
                  </Paragraf>
                  <ButtonWrapper>
                    <ButtonGameList1>Game</ButtonGameList1>
                    <ButtonGameList1>Detail</ButtonGameList1>
                  </ButtonWrapper>
                </ColumnBackCard>
              </ColumnInnerCard>
            </ColumnFlipCard>
            <ColumnFlipCard>
              <ColumnInnerCard>
                <ColumnFrontCard>
                  <Image
                    width={300}
                    height={150}
                    src="/assets/GOW.jpg"
                    alt="games"
                  />
                  <GameTittles>God of War Ragnarök</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                    From Santa Monica Studio comes the sequel to the critically
                    acclaimed God of War (2018).
                  </Paragraf>
                  <ButtonWrapper>
                    <ButtonGameList1>Game</ButtonGameList1>
                    <ButtonGameList1>Detail</ButtonGameList1>
                  </ButtonWrapper>
                </ColumnBackCard>
              </ColumnInnerCard>
            </ColumnFlipCard>
          </GameListColumn>
          <GameListMiddle>
            <GameColumnListTittle>Developer Choices</GameColumnListTittle>
            <ColumnFlipCard>
              <ColumnInnerCard>
                <ColumnFrontCard>
                  <Image
                    width={300}
                    height={150}
                    src="/assets/COD.jpg"
                    alt="games"
                  />
                  <GameTittles>Call of Duty : Modern Warfare III</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                    NEW GAMEPLAY INNOVATIONS. ALL-NEW GUN HANDLING. ADVANCED AI.
                    MODERN WARFARE® II BRINGS YOU A GLOBAL CAMPAIGN, IMMERSIVE
                    MULTIPLAYER COMBAT AND NARRATIVE-DRIVEN SPECIAL OPS.
                  </Paragraf>
                  <ButtonWrapper>
                    <ButtonGameList1>Game</ButtonGameList1>
                    <ButtonGameList1>Detail</ButtonGameList1>
                  </ButtonWrapper>
                </ColumnBackCard>
              </ColumnInnerCard>
            </ColumnFlipCard>
            <ColumnFlipCard>
              <ColumnInnerCard>
                <ColumnFrontCard>
                  <Image
                    width={300}
                    height={150}
                    src="/assets/BF.jpg"
                    alt="games"
                  />
                  <GameTittles>Battle Field : 2042</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                    Call the shots in a new Season. Come face to face with the
                    enemy in the northern Swedish wilderness and dominate ground
                    warfare with the new EMKV90-TOR railgun tank and Vault
                    weapons.
                  </Paragraf>
                  <ButtonWrapper>
                    <ButtonGameList1>Game</ButtonGameList1>
                    <ButtonGameList1>Detail</ButtonGameList1>
                  </ButtonWrapper>
                </ColumnBackCard>
              </ColumnInnerCard>
            </ColumnFlipCard>
            <ColumnFlipCard>
              <ColumnInnerCard>
                <ColumnFrontCard>
                  <Image
                    width={300}
                    height={150}
                    src="/assets/SW.png"
                    alt="games"
                  />
                  <GameTittles>Star Wars : Jedi Fallen Order</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                    a 2019 action-adventure game developed by Respawn
                    Entertainment and published by Electronic Arts. The story is
                    set in the Star Wars universe, five years after Star Wars:
                    Episode III Revenge of the Sith.
                  </Paragraf>
                  <ButtonWrapper>
                    <ButtonGameList1>Game</ButtonGameList1>
                    <ButtonGameList1>Detail</ButtonGameList1>
                  </ButtonWrapper>
                </ColumnBackCard>
              </ColumnInnerCard>
            </ColumnFlipCard>
          </GameListMiddle>
          <GameListMiddle>
            <GameColumnListTittle>Actions</GameColumnListTittle>
            <ColumnFlipCard>
              <ColumnInnerCard>
                <ColumnFrontCard>
                  <Image
                    width={300}
                    height={150}
                    src="/assets/LOS.jpg"
                    alt="games"
                  />
                  <GameTittles>Last of Us</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                    The Last of Us is a 2013 action-adventure game developed by
                    Naughty Dog and published by Sony Computer Entertainment.
                  </Paragraf>
                  <ButtonWrapper>
                    <ButtonGameList1>Game</ButtonGameList1>
                    <ButtonGameList1>Detail</ButtonGameList1>
                  </ButtonWrapper>
                </ColumnBackCard>
              </ColumnInnerCard>
            </ColumnFlipCard>
            <ColumnFlipCard>
              <ColumnInnerCard>
                <ColumnFrontCard>
                  <Image
                    width={300}
                    height={150}
                    src="/assets/LOS.jpg"
                    alt="games"
                  />
                  <GameTittles>Last of Us</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                    The Last of Us is a 2013 action-adventure game developed by
                    Naughty Dog and published by Sony Computer Entertainment.
                  </Paragraf>
                  <ButtonWrapper>
                    <ButtonGameList1>Game</ButtonGameList1>
                    <ButtonGameList1>Detail</ButtonGameList1>
                  </ButtonWrapper>
                </ColumnBackCard>
              </ColumnInnerCard>
            </ColumnFlipCard>
            <ColumnFlipCard>
              <ColumnInnerCard>
                <ColumnFrontCard>
                  <Image
                    width={300}
                    height={150}
                    src="/assets/LOS.jpg"
                    alt="games"
                  />
                  <GameTittles>Last of Us</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                    The Last of Us is a 2013 action-adventure game developed by
                    Naughty Dog and published by Sony Computer Entertainment.
                  </Paragraf>
                  <ButtonWrapper>
                    <ButtonGameList1>Game</ButtonGameList1>
                    <ButtonGameList1>Detail</ButtonGameList1>
                  </ButtonWrapper>
                </ColumnBackCard>
              </ColumnInnerCard>
            </ColumnFlipCard>
          </GameListMiddle>
        </GameListColumnGame>
      </GameListLanding>
      <PromoPage>
        <PromoContentContainer>
          <PromoContent>
            if you want to play the FREE GAME just{" "}
            <PromoContents>CLICK HERE!</PromoContents>
            <br />
            do the <PromoContents>REGISTER</PromoContents> and{" "}
            <PromoContents> LOGIN </PromoContents>
            first and you can enjoy THE GAME for FREE
          </PromoContent>
        </PromoContentContainer>
      </PromoPage>
      <Footer>
        <ContentFooter>
          <ContentFooter1>
            <FooterContent>MAIN</FooterContent>
            <FooterContent>about</FooterContent>
            <FooterContent>game features</FooterContent>
            <FooterContent>System requirements</FooterContent>
            <FooterContent>quotes</FooterContent>
            <FooterContent>
              <Image width={20} height={20} src="/assets/facebook.svg" alt="facebook" />
            </FooterContent>
            <FooterContent>
              <Image width={20} height={20} src="/assets/twitter.svg" alt="twitter" />
            </FooterContent>
            <FooterContent>
              <Image width={20} height={20} src="/assets/youtube.svg" alt="youtube" />
            </FooterContent>
            <FooterContent>
              <Image width={20} height={20} src="/assets/twitch.svg" alt="twitch" />
            </FooterContent>
          </ContentFooter1>
          <Border><Image width={1200} height={10} src="/assets/border.svg" alt="border" /></Border>
          <FooterContent3>
            <FooterContents3>
              {" "}
              © This Project made by Muhammad Nabil Amran and Mohamad Iqbal
              Tamalaka <br />
              and this web for education purpose only
            </FooterContents3>
            <FooterContents4>
              Privacy Policy | <br /> Terms of Services | <br /> Code of Conduct{" "}
            </FooterContents4>
          </FooterContent3>
        </ContentFooter>
      </Footer>
    </>
  );
}
