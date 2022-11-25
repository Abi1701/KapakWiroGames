import Image from "next/image";
import Link from "next/link";
import diceLogo from "./../public/assets/dice.logo.png"
import rpsLogo from "./../public/assets/RPS.logo.png";
import F1Logo from "./../public/assets/F1.png"
import pesLogo from "././../public/assets/PES.png"
import tennisLogo from "././../public/assets/tennis1.png"
import birdLogo from "./../public/assets/angrybird.png"
import style from "./../styles/gameList.module.css";

export default function Gamelist() {
  return (
    <div className={style.root}>
      <h1 className={style.choose}>Choose Game</h1>
      <div className={style.grid}>
        <Link href="/dicegame" className={style.card}>
          <Image className={style.logo} src={diceLogo} alt="dice.logo" />
          <h2>Dice Game &rarr;</h2>
          <p className={style.p}>Play The Game And Be the Best Player</p>
        </Link>

        <Link href="/rpsgame" className={style.card}>
          <Image className={style.logo} src={rpsLogo} alt="RPS.logo" />
          <h2>RPS &rarr;</h2>
          <p className={style.p}>Play The Game And Be the Best Player</p>
        </Link>

        <a href="#" className={style.card}>
          <Image className={style.logo} src={F1Logo} alt="F1" />
          <h2>F1 Race &rarr;</h2>
          <p className={style.p}>Play Game And Be the Best Player</p>
        </a>

        <a href="#" className={style.card}>
          <Image className={style.logo} src={pesLogo} alt="PES" />
          <h2>PES 2022 &rarr;</h2>
          <p className={style.p}>Play Game And Be the Best Player</p>
        </a>

        <a href="#" className={style.card}>
          <Image className={style.logo} src={tennisLogo} alt="tennis1" />
          <h2>Tennis Clash &rarr;</h2>
          <p className={style.p}>Play Game Collect  Points And Be the Best Player</p>
        </a>

        <a href="#" className={style.card}>
          <Image className={style.logo} src={birdLogo} alt="angrybird" />
          <h2>Angry Bird &rarr;</h2>
          <p className={style.p}>Play Game And Be the Best Player</p>
        </a>
      </div>
      <div class={style.customshapedividerbottom1668858171}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class={style.shapefill}
          ></path>
        </svg>
      </div>
    </div>
  );
}
