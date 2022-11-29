
import style from "./../styles/gameList.module.css";

export default function Gamelist() {
  return (
    <div className={style.root}>
      
      <div className={style.gridContainer}>
      <p className={style.tittle}>Choose Game</p>
        <div className={style.grid}>
          <a href="/dicegame" class={style.flipCard}>
            <div class={style.flipCardInner}>
              <div class={style.flipCardFront}>
                <img className={style.pict} src="/assets/dice.logo.png" />
                <h3 className={style.h3}>DICE</h3>
              </div>
              <div class={style.flipCardBack}>
                <img src="/assets/dice.logo.png" />
                <p className={style.caption}>Play The Game <br /> And Be the Best Player</p>
              </div>
            </div>
          </a>
          <a href="/dicegame" class={style.flipCard}>
            <div class={style.flipCardInner}>
              <div class={style.flipCardFront}>
                <img className={style.pict} src="/assets/RPS.logo.png" />
                <h3 className={style.h3}>RPS</h3>
              </div>
              <div class={style.flipCardBack}>
                <img src="/assets/RPS.logo.png" />
                <p className={style.caption}>Play The Game <br /> and PROVE you're The BEST</p>
              </div>
            </div>
          </a>
          </div>
          <div className={style.grid2}>
          <a href="/dicegame" class={style.flipCard}>
            <div class={style.flipCardInner}>
              <div class={style.flipCardFront}>
                <img className={style.picts} src="/assets/CP.jpeg" />
                <h3 className={style.h3}>Cyber Punk</h3>
              </div>
              <div class={style.flipCardBack}>
              <a href=""><button className={style.flipCardBackButton}>Details</button></a>
                <img src="/assets/CP.jpeg" />
                <p className={style.caption}> Click the Button for Get details </p>
                <button className={style.buttonFlipCard}>Buy NOW!</button>
              </div>
            </div>
          </a>
          <a href="/dicegame" class={style.flipCard}>
            <div class={style.flipCardInner}>
              <div class={style.flipCardFront}>
                <img className={style.picts} src="/assets/angrybird.jpg" />
                <h3 className={style.h3}>Angry Bird 2: Kill that PIG</h3>
              </div>
              <div class={style.flipCardBack}>
              <a href=""><button className={style.flipCardBackButton}>Details</button></a>
                <img src="/assets/angrybird.jpg" />
                <p className={style.caption}> Click the Button for Get details </p>
                <button className={style.buttonFlipCard}>Buy NOW</button>
              </div>
            </div>
          </a>
          <a href="/dicegame" class={style.flipCard}>
            <div class={style.flipCardInner}>
              <div class={style.flipCardFront}>
                <img className={style.picts} src="/assets/AC.png" />
                <h3 className={style.h3}>Assasins Creed: Brother Hood</h3>
              </div>
              <div class={style.flipCardBack}>
              <a href=""><button className={style.flipCardBackButton}>Details</button></a>
                <img src="/assets/AC.png" />
                <p className={style.caption}> Click the Button for Get details </p>
                <button className={style.buttonFlipCard}>Buy NOW</button>
              </div>
            </div>
          </a>
          </div>

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
