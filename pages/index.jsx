import { useSelector } from "react-redux";
import { Verified, VerifiedUser } from "@mui/icons-material";
import { Divider, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import {
  GameTittles,
  Paragraf,
  Container,
  HomeContent,
  BarContainer,
  BigCard,
  Border,
  BotomContent,
  ButtonGameList,
  ButtonGameList1,
  ContentFooter,
  ContentFooter1,
  Footer,
  FooterContent,
  FooterContent3,
  FooterContents3,
  FooterContents4,
  GameList,
  GameListBotomCard,
  GameListColumn,
  GameListColumnContent,
  GameListColumnGame,
  GameListColumnPicture,
  GameListUserContent,
  GameListContent,
  GameListLanding,
  GameListMiddle,
  GameListPicture,
  GameListRightContent,
  GameListTittle,
  GameColumnListTittle,
  GameListUserPrice,
  GameListUserTittle,
  GameTittle,
  HomeBar,
  PictureBigCard,
  PictureBotomCard,
  PictureRightCard,
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
          <SearchBar>
            <CssTextField
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            />
          </SearchBar>
          <HomeBar>
            <h1>Kapak Wiro</h1>
          </HomeBar>
          <Divider
            sx={{ height: 25, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <HomeBar>
            <h1>Best Game</h1>
          </HomeBar>
          <Divider
            sx={{ height: 25, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <HomeBar>
            <h1>Game List</h1>
          </HomeBar>
        </BarContainer>
        <HomeContent>
          <CarouselContainer>
            <Carousel showArrows={true} an width={"700px"}>
              <CarouselContent>
                <CarouselContentImage src="/assets/AC.png" alt="Asassins Creed" />
                <p className="legend">Image 1</p>
              </CarouselContent>
              <CarouselContent>
                <CarouselContentImage src="/assets/COD.jpg" alt="Call of Duty" />
                <p className="legend">Image 2</p>
              </CarouselContent>
              <CarouselContent>
                <CarouselContentImage src="/assets/SW.png" alt="Star Wars" />
                <p className="legend">Image 3</p>
              </CarouselContent>
              <CarouselContent>
                <CarouselContentImage src="/assets/TW.jpg" alt="the Witcher" />
                <p className="legend">Image 4</p>
              </CarouselContent>
              <CarouselContent>
                <CarouselContentImage src="/assets/WZ.jpg" alt="Warzone" />
                <p className="legend">Image 5</p>
              </CarouselContent>
            </Carousel>
          </CarouselContainer>
          <GameListRightContent>
            <RightContent>
              <PictureRightCard src="/assets/LOS.jpg" alt="RPS" />
              <p>Last Of Us</p>
            </RightContent>
            <RightContent href="https://nextjs.org/docs">
              <PictureRightCard src="/assets/DS.jpg" alt="RPS" />
              <p>Dark Souls</p>
            </RightContent>
            <RightContent href="https://nextjs.org/docs">
              <PictureRightCard src="/assets/GOW.jpg" alt="RPS" />
              <p>God of War</p>
            </RightContent>
          </GameListRightContent>
        </HomeContent>
        <GameListBotomCard>
          <BotomContent>
            <PictureBotomCard src="/assets/AC.png" alt="RPS" />
            <p>Assasins Creed Brother Hood</p>
          </BotomContent>
          <BotomContent>
            <PictureBotomCard src="/assets/BF.jpg" alt="RPS" />
            <p>BattleField : 2042</p>
          </BotomContent>
          <BotomContent>
            <PictureBotomCard src="/assets/SW.png" alt="RPS" />
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
                  <GameListPicture src="/assets/dice.logo.png" />
                  <h3>DICE</h3>
                </FrontCard>
                <BackCard>
                  <p>
                    Play The Game <br /> And Be the Best Player
                  </p>
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
                  <GameListPicture src="/assets/LOS.jpg" />
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
                  <GameListPicture src="/assets/CP.jpeg" />
                  <GameTittles>Cyberpunk 2077</GameTittles>
                </ColumnFrontCard>
                <ColumnBackCard>
                  <Paragraf>
                  Players assume the first-person perspective of a customisable
                  mercenary known as V.
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
                  <GameListPicture src="/assets/GOW.jpg" />
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
          <Divider
            sx={{ height: 800, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <GameListMiddle>
            <GameColumnListTittle>Developer's Choices</GameColumnListTittle>
          </GameListMiddle>
          <Divider
            sx={{ height: 800, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <GameListMiddle>
            <GameColumnListTittle>Actions</GameColumnListTittle>
          </GameListMiddle>
        </GameListColumnGame>
      </GameListLanding>
      <PromoPage>
        <div>
          <PromoContent>
            if you want to play the FREE GAME just{" "}
            <PromoContents>CLICK HERE!</PromoContents>
            <br />
            do the <PromoContents>REGISTER</PromoContents> and{" "}
            <PromoContents> LOGIN </PromoContents>
            first and you can enjoy THE GAME for FREE
          </PromoContent>
        </div>
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
              <img src="/assets/facebook.svg" alt="facebook" />
            </FooterContent>
            <FooterContent>
              <img src="/assets/twitter.svg" alt="twitter" />
            </FooterContent>
            <FooterContent>
              <img src="/assets/youtube.svg" alt="youtube" />
            </FooterContent>
            <FooterContent>
              <img src="/assets/twitch.svg" alt="twitch" />
            </FooterContent>
          </ContentFooter1>
          <Border src="/assets/border.svg" alt="border" />
          <FooterContent3>
            <FooterContents3>
              {" "}
              © This Project made by Muhammad Nabil Amran and Mohamad Iqbal
              Tamalaka <br />
              and this web for education purpose only
            </FooterContents3>
            <FooterContents4>
              Privacy Policy | Terms of Services | Code of Conduct{" "}
            </FooterContents4>
          </FooterContent3>
        </ContentFooter>
      </Footer>
    </>
  );
}
