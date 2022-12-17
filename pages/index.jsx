import { VerifiedUser } from "@mui/icons-material";
import { Divider, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  BigCardTittle,
  BigCardTittleContent,
  BigCardContent,
} from "../src/component/homeStyled";
export default function Home() {
  const [value, setValue] = useState(false);
  const handleMouse = (e) => {
    setValue(true);
  };
  const handleMouseOut = (e) => {
    setValue(false);
  };
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
          <BigCard onMouseOver={handleMouse} onMouseOut={handleMouseOut}>
            {!value ? (
              <iframe
                width="560"
                height="315"
                frameborder="0"
                src="https://www.youtube.com/embed/cqGjhVJWtEg?version=3&amp;controls=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ) : (
              <BigCardTittle>
                <ParagrafBigCard>
                  Miles Morales IS Spider-Man! What is the secret behind his
                  powers, and how will he master them? What new and familiar
                  enemies will rise to challenge this all-new Spider-Man? And
                  will Miles live up to Peter Parker legacy?
                </ParagrafBigCard>
              </BigCardTittle>
            )}
          </BigCard>
        </HomeContent>
        <GameListBotomCard>
          <BotomContent>
            <iframe
              width="280"
              height="157"
              src="https://www.youtube.com/embed/NTunTURbyUU?controls=0&amp;rel=0&amp;autoplay=1&amp;loop=10&amp;mute=1&amp;"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </BotomContent>
          <BotomContent>
            <iframe
              width="280"
              height="157"
              src="https://www.youtube.com/embed/qIQ3xNqkVC4?controls=0&amp;rel=0&amp;autoplay=1&amp;loop=10&amp;mute=1&amp;"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </BotomContent>
          <BotomContent>
            <iframe
              width="280"
              height="157"
              src="https://www.youtube.com/embed/T03PxxuCfDA?controls=0&amp;rel=0&amp;autoplay=1&amp;loop=10&amp;mute=1&amp;"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </BotomContent>
        </GameListBotomCard>
      </Container>
      <GameList>
        <GameListContent>
          <GameListTittle>
            Most Played by Users <VerifiedUser />{" "}
          </GameListTittle>
          <GamelistUser>
            <Link href="/dicegame">
              <FlipCard>
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
            </Link>
            <Link href="/rpsGame">
              <FlipCard>
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
                      Mesopotamia. It is the favorite game of the famous
                      investor Warren Buffet. The game combines the elements of
                      both luck and skill.
                    </Paragraf>
                  </BackCard>
                </InnerCard>
              </FlipCard>
            </Link>
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
              <Image
                width={20}
                height={20}
                src="/assets/facebook.svg"
                alt="facebook"
              />
            </FooterContent>
            <FooterContent>
              <Image
                width={20}
                height={20}
                src="/assets/twitter.svg"
                alt="twitter"
              />
            </FooterContent>
            <FooterContent>
              <Image
                width={20}
                height={20}
                src="/assets/youtube.svg"
                alt="youtube"
              />
            </FooterContent>
            <FooterContent>
              <Image
                width={20}
                height={20}
                src="/assets/twitch.svg"
                alt="twitch"
              />
            </FooterContent>
          </ContentFooter1>
          <Border>
            <Image
              width={1200}
              height={10}
              src="/assets/border.svg"
              alt="border"
            />
          </Border>
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
