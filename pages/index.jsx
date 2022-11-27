import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { Verified, VerifiedUser } from "@mui/icons-material";
import { Divider, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Home() {
  const profile = useSelector((state) => state.authReducer.profile);
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
      <section className={styles.container}>
        <div className={styles.barContainer}>
          <div className={styles.searchBar}>
            <CssTextField
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            />
          </div>
          <a href="" className={styles.homeBar}>
            <h1>Kapak Wiro</h1>
          </a>
          <Divider
            sx={{ height: 25, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <a href="" className={styles.homeBar}>
            <h1>Best Game</h1>
          </a>
          <Divider
            sx={{ height: 25, mt: 3, ml: 2, mr: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <a href="#Gamelist" className={styles.homeBar}>
            <h1>Game List</h1>
          </a>
        </div>
        <div className={styles.home}>
          <a href="" className={styles.bigCard}>
            <img
              className={styles.pictureBigCard}
              src="/assets/COD.jpg"
              alt="RPS"
            />
            <p>Call of Duty: Modern Warfare</p>
          </a>
          <div className={styles.GamelistContentRight}>
            <a href="https://nextjs.org/docs" className={styles.rightContent}>
              <img
                className={styles.pictureRightCard}
                src="/assets/LOS.jpg"
                alt="RPS"
              />
              <p>Last Of Us</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.rightContent}>
              <img
                className={styles.pictureRightCard}
                src="/assets/DS.jpg"
                alt="RPS"
              />
              <p>Dark Souls</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.rightContent}>
              <img
                className={styles.pictureRightCard}
                src="/assets/GOW.jpg"
                alt="RPS"
              />
              <p>God of War</p>
            </a>
          </div>
        </div>
        <div className={styles.GamelistContentBotom}>
          <a href="https://nextjs.org/docs" className={styles.botomContent}>
            <img
              className={styles.pictureBotomCard}
              src="/assets/TW.jpg"
              alt="RPS"
            />
            <p>The Witcher.</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.botomContent}>
            <img
              className={styles.pictureBotomCard}
              src="/assets/CP.jpeg"
              alt="RPS"
            />
            <p>CyberPunk.</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.botomContent}>
            <img
              className={styles.pictureBotomCard}
              src="/assets/SW.png"
              alt="RPS"
            />
            <p className={styles.gameContent}>Star Wars</p>
          </a>
        </div>
      </section>
      <section className={styles.Gamelist}>
        <div className={styles.GamelistContent}>
          <p className={styles.GamelistTittle}>
            Most Played by Users <VerifiedUser />{" "}
          </p>
          <div className={styles.GamelistUser}>
          <div class={styles.flipCard}>
            <div class={styles.flipCardInner}>
              <div class={styles.flipCardFront}>
                <img className={styles.pict} src="/assets/AC.png" />
                <h3 className={styles.h3}>Assassin's Creed Brotherhood</h3>
              </div>
              <div class={styles.flipCardBack}>
                <img src="/assets/AC.png" />
                <p>
                {" "}
                USER CHOICE <Verified />
                <br />
                <span>Rp. 750.000</span>
              </p>
                <button className={styles.buttonFlipCard}>Buy Now</button>
              </div>
            </div>
          </div>
            <a href="https://nextjs.org/docs" className={styles.cardGamelist}>
              <h2>Cyber Punk</h2>
              <img className={styles.picture} src="/assets/CP.jpeg" alt="RPS" />
              <p>
                {" "}
                USER CHOICE <Verified />
                <br />
                <span>Rp. 850.000</span>
              </p>
              <button className={styles.buttonGamelist}>Buy Now</button>
            </a>
            <a href="https://nextjs.org/docs" className={styles.cardGamelist}>
              <h2>The Witcher: Wild Hunt III</h2>
              <img className={styles.picture} src="/assets/TW.jpg" alt="RPS" />
              <p>
                {" "}
                USER CHOICE <Verified />
                <br />
                <span>Rp. 750.000</span>
              </p>
              <button className={styles.buttonGamelist}>Buy Now</button>
            </a>
          </div>
        </div>
      </section>
      <section id="Gamelist" className={styles.rowGame}>
        <div className={styles.GamelistColGame}>
          <div className={styles.GamelistCol}>
            <h1 className={styles.tittle}>Adventures RPG</h1>
            <a
              href="https://nextjs.org/docs"
              className={styles.GamelistColContent}
            >
              <img
                className={styles.GamelistPicture}
                src="/assets/LOS.jpg"
                alt="RPS"
              />
              <p>
                Last Of Us
                <br />
                <span>Rp.500.000</span>
                <br />
                <button className={styles.buttonGamelist1}>Buy Now</button>
              </p>
            </a>
            <a
              href="https://nextjs.org/docs"
              className={styles.GamelistColContent}
            >
              <img
                className={styles.GamelistPicture}
                src="/assets/DS.jpg"
                alt="RPS"
              />
              <p>
                Dark Souls
                <br />
                <span>Rp.500.000</span>
                <br />
                <button className={styles.buttonGamelist1}>Buy Now</button>
              </p>
            </a>
            <a
              href="https://nextjs.org/docs"
              className={styles.GamelistColContent}
            >
              <img
                className={styles.GamelistPicture}
                src="/assets/GOW.jpg"
                alt="RPS"
              />
              <p>
                God of War
                <br />
                <span>Rp.500.000</span>
                <br />
                <button className={styles.buttonGamelist1}>Buy Now</button>
              </p>
            </a>
          </div>
          <Divider
            sx={{ height: 800, mt: 3, ml: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <div className={styles.GamelistCol1}>
            <h1 className={styles.tittle}>Developer's Choices</h1>
            <a
              href="https://nextjs.org/docs"
              className={styles.GamelistColContent}
            >
              <img
                className={styles.GamelistPicture}
                src="/assets/UC.jpg"
                alt=""
              />
              <p>
                Uncharted 4: A Thief's End
                <br />
                <span>Rp.500.000</span>
                <br />
                <button className={styles.buttonGamelist1}>Buy Now</button>
              </p>
            </a>
            <a
              href="https://nextjs.org/docs"
              className={styles.GamelistColContent}
            >
              <img
                className={styles.GamelistPicture}
                src="/assets/AC.png"
                alt="RPS"
              />
              <p>
                Assassin's Creed Brotherhood
                <br />
                <span>Rp.500.000</span>
                <br />
                <button className={styles.buttonGamelist1}>Buy Now</button>
              </p>
            </a>
            <a
              href="https://nextjs.org/docs"
              className={styles.GamelistColContent}
            >
              <img
                className={styles.GamelistPicture}
                src="/assets/SM.jpg"
                alt="RPS"
              />
              <p>
                Marvel's Spider-Man: Miles Morales
                <br />
                <span>Rp.500.000</span>
                <br />
                <button className={styles.buttonGamelist1}>Buy Now</button>
              </p>
            </a>
          </div>
          <Divider
            sx={{ height: 800, mt: 3, ml: 2 }}
            color="white"
            orientation="vertical"
            flexItem
          />
          <div className={styles.GamelistCol1}>
            <h1 className={styles.tittle}>Actions</h1>
            <a
              href="https://nextjs.org/docs"
              className={styles.GamelistColContent}
            >
              <img
                className={styles.GamelistPicture}
                src="/assets/SR.jpg"
                alt="RPS"
              />
              <p>
                Sky Rim
                <br />
                <span>Rp.500.000</span>
                <br />
                <button className={styles.buttonGamelist1}>Buy Now</button>
              </p>
            </a>
            <a
              href="https://nextjs.org/docs"
              className={styles.GamelistColContent}
            >
              <img
                className={styles.GamelistPicture}
                src="/assets/BF.jpg"
                alt="RPS"
              />
              <p>
                Battle Field: 2042
                <br />
                <span>Rp.500.000</span>
                <br />
                <button className={styles.buttonGamelist1}>Buy Now</button>
              </p>
            </a>
            <a
              href="https://nextjs.org/docs"
              className={styles.GamelistColContent}
            >
              <img
                className={styles.GamelistPicture}
                src="/assets/WZ.jpg"
                alt="RPS"
              />
              <p>
                Call of Duty WARZONE <br />
                <span>Rp.500.000</span>
                <br />
                <button className={styles.buttonGamelist1}>Buy Now</button>
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.promo}>
        <div>
          <h1 className={styles.promoContent}>
            if you want to play the FREE GAME just{" "}
            <span className={styles.spanContents}>CLICK HERE!</span>
            <br />
            do the <span className={styles.spanContents}>
              REGISTER
            </span> and{" "}
            <span href="/" className={styles.spanContents}>
              {" "}
              LOGIN{" "}
            </span>
            first and you can enjoy THE GAME for FREE
          </h1>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <a to="/" className={styles.contents1}>
              MAIN
            </a>
            <a to="/work" className={styles.contents1}>
              about
            </a>
            <a to="/feature" className={styles.contents1}>
              game features
            </a>
            <a to="/requirement" className={styles.contents1}>
              System requirements
            </a>
            <a to="/topscore" className={styles.contents1}>
              quotes
            </a>
            <a className={styles.contents1}>
              <img src="/assets/facebook.svg" alt="facebook" />
            </a>
            <a className={styles.contents1}>
              <img src="/assets/twitter.svg" alt="twitter" />
            </a>
            <a className={styles.contents1}>
              <img src="/assets/youtube.svg" alt="youtube" />
            </a>
            <a className={styles.contents1}>
              <img src="/assets/twitch.svg" alt="twitch" />
            </a>
          </div>
          <div className={styles.content2}>
            <img
              className={styles.border}
              src="/assets/border.svg"
              alt="border"
            />
          </div>
          <div className={styles.content3}>
            <h1 className={styles.contents3}>
              {" "}
              © 2018 Your Games, Inc. All Rights Reserved
            </h1>
            <h1 className={styles.contents31}>
              Privacy Policy | Terms of Services | Code of Conduct{" "}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
