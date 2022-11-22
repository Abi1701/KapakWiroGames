import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Login, Verified, VerifiedUser } from "@mui/icons-material";
export default function Home() {
  const profile = useSelector((state) => state.authReducer.profile);
  return (
    <>
      <section className={styles.container}>
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
      <section className={styles.rowGame}>
        <div className={styles.GamelistColGame}>
          
          <div className={styles.GamelistCol}>
          <h1 className={styles.tittle}>Adventures RPG</h1>
          <a href="https://nextjs.org/docs" className={styles.GamelistColContent}>
              <img
                className={styles.GamelistPicture}
                src="/assets/LOS.jpg"
                alt="RPS"
              />
              <p>Last Of Us<br />Buy Now</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.GamelistColContent}>
              <img
                className={styles.GamelistPicture}
                src="/assets/DS.jpg"
                alt="RPS"
              />
              <p>Dark Souls</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.GamelistColContent}>
              <img
                className={styles.GamelistPicture}
                src="/assets/GOW.jpg"
                alt="RPS"
              />
              <p>God of War</p>
            </a>
          </div>
          <div className={styles.GamelistCol}>
          <h1 className={styles.tittle}>Developer's Choices</h1>
          <a href="https://nextjs.org/docs" className={styles.GamelistColContent}>
              <img
                className={styles.GamelistPicture}
                src="/assets/UC.jpg"
                alt=""
              />
              <p>Uncharted</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.GamelistColContent}>
              <img
                className={styles.GamelistPicture}
                src="/assets/AC.png"
                alt="RPS"
              />
              <p>Assasins Creed</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.GamelistColContent}>
              <img
                className={styles.GamelistPicture}
                src="/assets/SM.jpg"
                alt="RPS"
              />
              <p>Spider-Man</p>
            </a>
          </div>
          <div className={styles.GamelistCol}>
          <h1 className={styles.tittle}>Actions</h1>
          <a href="https://nextjs.org/docs" className={styles.GamelistColContent}>
              <img
                className={styles.GamelistPicture}
                src="/assets/SR.jpg"
                alt="RPS"
              />
              <p>Sky Rim</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.GamelistColContent}>
              <img
                className={styles.GamelistPicture}
                src="/assets/BF.jpg"
                alt="RPS"
              />
              <p>Battle Field: 2042</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.GamelistColContent}>
              <img
                className={styles.GamelistPicture}
                src="/assets/WZ.jpg"
                alt="RPS"
              />
              <p>Call of Duty WARZONE</p>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.promo}>
        <div className={styles.input}>
          <div className={styles.contentContainer}>
            <h1 className={styles.inputContent}>
              Easy{" "}
              <a href="/register" className={styles.spanRegistration}>
                <Login /> Registration
              </a>
              <br /> you only need to put your <span>EMAIL</span>
            </h1>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Rock Papper Scissors</h2>
              <img
                className={styles.picture}
                src="/assets/banner.png"
                alt="RPS"
              />
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
